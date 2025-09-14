#!/usr/bin/env node

const path = require('path');
const DocsIndexer = require('./lib/docs-indexer.js');

class GameMakerLookupCLI {
    constructor(docsIndexer) {
        this.docsIndexer = docsIndexer;
    }

    async lookupFunction(functionName, includeExamples = true) {
        const result = await this.docsIndexer.lookupFunction(functionName);

        if (!result.found) {
            console.log(`Function "${functionName}" not found in documentation.\n`);
            if (result.suggestions && result.suggestions.length > 0) {
                console.log('Did you mean one of these?');
                result.suggestions.forEach(f => console.log(`  - ${f}`));
            } else {
                console.log('No similar functions found. Try using search instead.');
            }
            return;
        }

        let documentation = result.documentation || `Found reference to "${functionName}" but couldn't extract detailed documentation.`;

        // Remove code examples if requested
        if (!includeExamples) {
            documentation = documentation.replace(/```[\s\S]*?```/g, '[Code example removed]');
        }

        console.log(documentation);

        // Add reference information
        if (result.allReferences && result.allReferences.length > 1) {
            const otherRefs = result.allReferences.filter(ref => ref !== result.function);
            if (otherRefs.length > 0) {
                const otherPaths = [...new Set(otherRefs.map(ref => this.docsIndexer.convertToRootRelative(ref.file)))];
                console.log('\n**Also found in:**');
                otherPaths.forEach(path => console.log(`  - ${path}`));
            }
        }
    }

    async searchDocs(query, maxResults = 5) {
        const results = await this.docsIndexer.searchDocs(query, maxResults);

        if (results.length === 0) {
            console.log(`No results found for "${query}". Try different keywords or check spelling.`);
            return;
        }

        console.log(`Found ${results.length} result(s) for "${query}":\n`);
        results.forEach((result, index) => {
            console.log(`## Result ${index + 1}: ${result.file}`);
            console.log(`**Category:** ${result.category}`);
            console.log(`**Relevance Score:** ${result.score}\n`);
            console.log(result.section);
            console.log('\n---\n');
        });
    }

    async listFunctions(pattern = '') {
        const functions = this.docsIndexer.getAllFunctions(pattern);

        if (functions.length === 0) {
            console.log(pattern ? `No functions found matching "${pattern}"` : 'No functions found');
            return;
        }

        console.log(pattern ?
            `Functions matching "${pattern}" (${functions.length} total):` :
            `All functions (${functions.length} total):`
        );

        // Group by category
        const grouped = {};
        functions.forEach(f => {
            const category = f.category || 'Unknown';
            if (!grouped[category]) grouped[category] = [];
            grouped[category].push(f);
        });

        for (const [category, funcs] of Object.entries(grouped)) {
            console.log(`\n**${category}:**`);
            funcs.forEach(f => console.log(`  - ${f.name} (${f.type})`));
        }
    }

    async listCategories() {
        const categories = this.docsIndexer.getCategories();

        console.log('Available categories:');
        categories.forEach(cat => console.log(`  - ${cat}`));
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

            console.log(`No functions found for category "${category}".`);
            if (similarCategories.length > 0) {
                console.log('\nSimilar categories:');
                similarCategories.forEach(c => console.log(`  - ${c}`));
            } else {
                console.log('Try searching for specific terms or use the search command instead.');
            }
            return;
        }

        console.log(`Functions in category "${category}" (${functions.length} total):\n`);
        functions.forEach(f => console.log(`  - ${f.name} (${f.type})`));
    }

    async getMarkdownFile(filePath) {
        const result = await this.docsIndexer.getMarkdownFile(filePath);

        if (!result.found) {
            console.log(`File "${filePath}" not found.\n`);
            if (result.suggestions && result.suggestions.length > 0) {
                console.log('Similar files:');
                result.suggestions.forEach(f => console.log(`  - ${f}`));
            } else {
                console.log('No similar files found.');
            }
            console.log(`\nError: ${result.error}`);
            return;
        }

        console.log(`**File:** ${result.relativePath}\n`);
        console.log(result.content);
    }
}

function showHelp() {
    console.log(`
GameMaker Language Documentation Lookup Tool

Usage:
  node gm-lookup.js <command> [options]                    (uses ../md as docs path)
  node gm-lookup.js <docs-path> <command> [options]

Commands:
  lookup <function>     Look up a specific function
  search <query>        Search documentation for terms
  list [pattern]        List all functions (optionally filtered by pattern)
  categories            Show available categories
  category <name>       List functions in a specific category
  file <path>           Get the content of a specific markdown file
  help                  Show this help message

Examples:
  node gm-lookup.js lookup draw_sprite
  node gm-lookup.js search "collision detection"
  node gm-lookup.js list draw
  node gm-lookup.js categories
  node gm-lookup.js category Drawing
  node gm-lookup.js file GameMaker_Language/GML_Reference/Drawing/Sprites_And_Tiles/draw_sprite.md

  # Or with custom path:
  node gm-lookup.js /path/to/md lookup draw_sprite

Options:
  --no-examples        Exclude code examples from lookup results
  --max-results N      Limit search results (default: 5)
    `);
}

async function main() {
    const args = process.argv.slice(2);

    // Set default docs path
    const defaultDocsPath = path.join(__dirname, '..', 'md');

    let docsPath, command;

    if (args.length === 0 || args.includes('help') || args.includes('--help')) {
        showHelp();
        return;
    }

    if (args.length === 1) {
        // Single argument - treat as command with default path
        docsPath = defaultDocsPath;
        command = args[0];
        console.error(`Using default docs path: ${docsPath}`);
    } else if (args.length >= 2) {
        // Check if first argument is a valid path or a command
        const fs = require('fs').promises;
        try {
            await fs.access(args[0]);
            // First argument is a valid path
            docsPath = args[0];
            command = args[1];
        } catch (error) {
            // First argument is not a valid path, treat as command with default path
            docsPath = defaultDocsPath;
            command = args[0];
            console.error(`Using default docs path: ${docsPath}`);
        }
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
    const cli = new GameMakerLookupCLI(docsIndexer);

    try {
        // Determine the starting index for command arguments
        let commandArgStart;
        if (args.length === 1) {
            commandArgStart = 1;
        } else if (docsPath === defaultDocsPath) {
            // Using default path, so command is first arg
            commandArgStart = 1;
        } else {
            // Using custom path, so command is second arg
            commandArgStart = 2;
        }

        switch (command) {
            case 'lookup':
                if (args.length < commandArgStart + 1) {
                    console.error('Error: Function name required for lookup');
                    process.exit(1);
                }
                const includeExamples = !args.includes('--no-examples');
                await cli.lookupFunction(args[commandArgStart], includeExamples);
                break;

            case 'search':
                if (args.length < commandArgStart + 1) {
                    console.error('Error: Search query required');
                    process.exit(1);
                }
                const maxResultsIndex = args.indexOf('--max-results');
                const maxResults = maxResultsIndex !== -1 && args[maxResultsIndex + 1] ?
                    parseInt(args[maxResultsIndex + 1]) : 5;
                await cli.searchDocs(args[commandArgStart], maxResults);
                break;

            case 'list':
                const pattern = args[commandArgStart] || '';
                await cli.listFunctions(pattern);
                break;

            case 'categories':
                await cli.listCategories();
                break;

            case 'category':
                if (args.length < commandArgStart + 1) {
                    console.error('Error: Category name required');
                    process.exit(1);
                }
                await cli.listFunctionsByCategory(args[commandArgStart]);
                break;

            case 'file':
                if (args.length < commandArgStart + 1) {
                    console.error('Error: File path required');
                    process.exit(1);
                }
                await cli.getMarkdownFile(args[commandArgStart]);
                break;

            default:
                console.error(`Error: Unknown command "${command}"`);
                showHelp();
                process.exit(1);
        }
    } catch (error) {
        console.error('Error:', error.message);
        process.exit(1);
    }
}

if (require.main === module) {
    main().catch(error => {
        console.error('CLI failed:', error);
        process.exit(1);
    });
}