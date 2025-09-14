#!/usr/bin/env node

const path = require('path');
const { Server } = require('@modelcontextprotocol/sdk/server/index.js');
const { StdioServerTransport } = require('@modelcontextprotocol/sdk/server/stdio.js');
const { CallToolRequestSchema, ListToolsRequestSchema } = require('@modelcontextprotocol/sdk/types.js');
const DocsIndexer = require('./lib/docs-indexer.js');

class GameMakerDocsServer {
    constructor(docsIndexer) {
        this.docsIndexer = docsIndexer;
        this.server = new Server(
            {
                name: 'gamemaker-docs',
                version: '1.0.0',
            },
            {
                capabilities: {
                    tools: {},
                },
            }
        );

        this.setupHandlers();
    }

    setupHandlers() {
        this.server.setRequestHandler(ListToolsRequestSchema, async () => {
            return {
                tools: [
                    {
                        name: 'lookup_gamemaker_function',
                        description: 'Look up GameMaker Language (GML) function documentation',
                        inputSchema: {
                            type: 'object',
                            properties: {
                                function_name: {
                                    type: 'string',
                                    description: 'The name of the GML function to look up (e.g., "draw_sprite", "instance_create_layer")',
                                },
                                include_examples: {
                                    type: 'boolean',
                                    description: 'Whether to include code examples in the response (default: true)',
                                    default: true,
                                },
                            },
                            required: ['function_name'],
                        },
                    },
                    {
                        name: 'search_gamemaker_docs',
                        description: 'Search GameMaker documentation for topics, concepts, or keywords',
                        inputSchema: {
                            type: 'object',
                            properties: {
                                query: {
                                    type: 'string',
                                    description: 'Search term or phrase (e.g., "collision detection", "audio", "networking")',
                                },
                                max_results: {
                                    type: 'number',
                                    description: 'Maximum number of results to return (default: 5)',
                                    default: 5,
                                },
                            },
                            required: ['query'],
                        },
                    },
                    {
                        name: 'list_functions_by_category',
                        description: 'List all functions in a specific category or module',
                        inputSchema: {
                            type: 'object',
                            properties: {
                                category: {
                                    type: 'string',
                                    description: 'Category name (e.g., "Drawing", "Audio", "Instance", "String")',
                                },
                            },
                            required: ['category'],
                        },
                    },
                    {
                        name: 'get_markdown_file',
                        description: 'Fetch the content of a specific markdown file from the documentation',
                        inputSchema: {
                            type: 'object',
                            properties: {
                                file_path: {
                                    type: 'string',
                                    description: 'Path to the markdown file (e.g., "GameMaker_Language/GML_Reference/Drawing/Sprites_And_Tiles/draw_sprite.md")',
                                },
                            },
                            required: ['file_path'],
                        },
                    },
                    {
                        name: 'init_gamemaker_agent',
                        description: 'Get GameMaker Language (GML) coding guide and MCP tool overview. Call this first to understand GML syntax, best practices, and available documentation tools.',
                        inputSchema: {
                            type: 'object',
                            properties: {},
                            additionalProperties: false,
                        },
                    },
                ],
            };
        });

        this.server.setRequestHandler(CallToolRequestSchema, async (request) => {
            const { name, arguments: args } = request.params;

            try {
                switch (name) {
                    case 'lookup_gamemaker_function':
                        return await this.lookupFunction(args.function_name, args.include_examples);

                    case 'search_gamemaker_docs':
                        return await this.searchDocs(args.query, args.max_results || 5);

                    case 'list_functions_by_category':
                        return await this.listFunctionsByCategory(args.category);

                    case 'get_markdown_file':
                        return await this.getMarkdownFile(args.file_path);

                    case 'init_gamemaker_agent':
                        return await this.initGameMakerAgent();

                    default:
                        throw new Error(`Unknown tool: ${name}`);
                }
            } catch (error) {
                return {
                    content: [
                        {
                            type: 'text',
                            text: `Error: ${error.message}`,
                        },
                    ],
                };
            }
        });
    }

    async lookupFunction(functionName, includeExamples = true) {
        const result = await this.docsIndexer.lookupFunction(functionName);

        if (!result.found) {
            return {
                content: [
                    {
                        type: 'text',
                        text: `Function "${functionName}" not found in documentation.\n\n` +
                            (result.suggestions && result.suggestions.length > 0 ?
                                `Did you mean one of these?\n${result.suggestions.map(f => `- ${f}`).join('\n')}` :
                                'No similar functions found. Try using the search tool instead.'),
                    },
                ],
            };
        }

        let documentation = result.documentation || `Found reference to "${functionName}" but couldn't extract detailed documentation.`;

        // Remove code examples if requested
        if (!includeExamples) {
            documentation = documentation.replace(/```[\s\S]*?```/g, '[Code example removed]');
        }

        // Add reference information
        if (result.allReferences && result.allReferences.length > 1) {
            const otherRefs = result.allReferences.filter(ref => ref !== result.function);
            if (otherRefs.length > 0) {
                const otherPaths = [...new Set(otherRefs.map(ref => this.docsIndexer.convertToRootRelative(ref.file)))];
                documentation += `\n\n**Also found in:**\n${otherPaths.map(path => `- ${path}`).join('\n')}`;
            }
        }

        return {
            content: [
                {
                    type: 'text',
                    text: documentation,
                },
            ],
        };
    }

    async searchDocs(query, maxResults) {
        const results = await this.docsIndexer.searchDocs(query, maxResults);

        if (results.length === 0) {
            return {
                content: [
                    {
                        type: 'text',
                        text: `No results found for "${query}". Try different keywords or check spelling.`,
                    },
                ],
            };
        }

        const formattedResults = results.map((result, index) =>
            `## Result ${index + 1}: ${result.file}\n**Category:** ${result.category}\n**Relevance Score:** ${result.score}\n\n${result.section}\n\n---\n`
        ).join('\n');

        return {
            content: [
                {
                    type: 'text',
                    text: `Found ${results.length} result(s) for "${query}":\n\n${formattedResults}`,
                },
            ],
        };
    }

    async listFunctionsByCategory(category) {
        const allFunctions = this.docsIndexer.getAllFunctions();
        const categoryLower = category.toLowerCase();

        const functions = allFunctions.filter(func =>
            func.category && func.category.toLowerCase().includes(categoryLower)
        );

        if (functions.length === 0) {
            const categories = this.docsIndexer.getCategories();
            const similarCategories = categories.filter(cat =>
                cat.toLowerCase().includes(categoryLower)
            ).slice(0, 5);

            return {
                content: [
                    {
                        type: 'text',
                        text: `No functions found for category "${category}". ` +
                            (similarCategories.length > 0 ?
                                `\n\nSimilar categories:\n${similarCategories.map(c => `- ${c}`).join('\n')}` :
                                'Try searching for specific terms or use the search tool instead.'),
                    },
                ],
            };
        }

        const functionList = functions.map(f => `- ${f.name} (${f.type})`).join('\n');

        return {
            content: [
                {
                    type: 'text',
                    text: `Functions in category "${category}" (${functions.length} total):\n\n${functionList}`,
                },
            ],
        };
    }

    async getMarkdownFile(filePath) {
        const result = await this.docsIndexer.getMarkdownFile(filePath);

        if (!result.found) {
            return {
                content: [
                    {
                        type: 'text',
                        text: `File "${filePath}" not found.\n\n` +
                              (result.suggestions && result.suggestions.length > 0 ?
                                `Similar files:\n${result.suggestions.map(f => `- ${f}`).join('\n')}` :
                                'No similar files found.') +
                              `\n\nError: ${result.error}`,
                    },
                ],
            };
        }

        return {
            content: [
                {
                    type: 'text',
                    text: `**File:** ${result.relativePath}\n\n${result.content}`,
                },
            ],
        };
    }

    async initGameMakerAgent() {
        const fs = require('fs').promises;
        const path = require('path');

        try {
            const llmsFilePath = path.join(__dirname, '..', 'init.txt');
            const content = await fs.readFile(llmsFilePath, 'utf-8');

            return {
                content: [
                    {
                        type: 'text',
                        text: content,
                    },
                ],
            };
        } catch (error) {
            return {
                content: [
                    {
                        type: 'text',
                        text: `Error loading GameMaker agent guide: ${error.message}`,
                    },
                ],
            };
        }
    }

    async run() {
        const transport = new StdioServerTransport();
        await this.server.connect(transport);
        console.error('GameMaker Documentation MCP Server running on stdio');
    }
}

// Main execution
async function main() {
    const docsPath = process.argv[2] || path.join(__dirname, '..', 'md');

    if (!docsPath) {
        console.error('Usage: node gamemaker-docs-server.js [path-to-markdown-docs]');
        console.error('       node gamemaker-docs-server.js (uses ../md)');
        process.exit(1);
    }

    const fs = require('fs').promises;
    try {
        await fs.access(docsPath);
    } catch (error) {
        console.error(`Error: Documentation path "${docsPath}" does not exist or is not accessible.`);
        process.exit(1);
    }

    const docsIndexer = new DocsIndexer(docsPath);
    await docsIndexer.buildIndex();
    const server = new GameMakerDocsServer(docsIndexer);
    await server.run();
}

if (require.main === module) {
    main().catch(error => {
        console.error('Server failed:', error);
        process.exit(1);
    });
}