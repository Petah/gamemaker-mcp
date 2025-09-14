#!/usr/bin/env node

const fs = require('fs').promises;
const path = require('path');
const { JSDOM } = require('jsdom');
const TurndownService = require('turndown');
const DocsIndexer = require('./lib/docs-indexer.js');

class HTMLToMarkdownConverter {
    constructor(inputDir, outputDir) {
        this.inputDir = inputDir;
        this.outputDir = outputDir;
        this.turndownService = new TurndownService({
            headingStyle: 'atx',
            hr: '---',
            bulletListMarker: '-',
            codeBlockStyle: 'fenced',
            fence: '```'
        });

        this.setupTurndownRules();
    }

    setupTurndownRules() {
        // Custom rule for code blocks
        this.turndownService.addRule('codeBlocks', {
            filter: ['pre'],
            replacement: (content, node) => {
                const code = node.textContent || '';
                const language = this.detectLanguage(node);
                return `\n\`\`\`${language}\n${code}\n\`\`\`\n\n`;
            }
        });

        // Custom rule for inline code
        this.turndownService.addRule('inlineCode', {
            filter: ['code'],
            replacement: (content) => {
                return `\`${content}\``;
            }
        });

        // Custom rule for tables
        this.turndownService.addRule('tables', {
            filter: 'table',
            replacement: (content, node) => {
                return this.convertTable(node);
            }
        });

        // Custom rule for links
        this.turndownService.addRule('links', {
            filter: 'a',
            replacement: (content, node) => {
                const href = node.getAttribute('href');
                const title = node.getAttribute('title');

                if (!href || !content.trim()) {
                    return content;
                }

                // Convert absolute GameMaker manual URLs to relative paths
                let processedHref = this.processHref(href);

                // Format the markdown link
                if (title) {
                    return `[${content}](${processedHref} "${title}")`;
                } else {
                    return `[${content}](${processedHref})`;
                }
            }
        });

        // Remove script and style tags
        this.turndownService.remove(['script', 'style', 'nav', 'header', 'footer']);
    }

    processHref(href) {
        // If it's already a relative link, convert .htm to .md
        if (!href.startsWith('http')) {
            return href.replace(/\.htm$/, '.md');
        }

        // Convert GameMaker manual URLs to relative paths
        const gamemakerPattern = /https?:\/\/manual\.gamemaker\.io\/monthly\/en\/(.+)\.htm/;
        const match = href.match(gamemakerPattern);

        if (match) {
            // Get the target path
            const targetPath = match[1] + '.md';

            // If we have the current file path, calculate relative path
            if (this.currentFilePath) {
                const currentDir = path.dirname(this.currentFilePath.replace(/\.html?$/, '.md'));
                const relativePath = path.relative(currentDir, targetPath);
                return relativePath.replace(/\\/g, '/'); // Ensure forward slashes
            }

            // Fallback to direct path
            return targetPath;
        }

        // For external links or other patterns, keep the full URL
        return href;
    }

    detectLanguage(node) {
        // Try to detect programming language from class names or context
        const className = node.className || '';
        const parentClass = node.parentElement?.className || '';

        if (className.includes('gml') || parentClass.includes('gml')) return 'gml';
        if (className.includes('javascript') || className.includes('js')) return 'javascript';
        if (className.includes('css')) return 'css';
        if (className.includes('html')) return 'html';
        if (className.includes('json')) return 'json';

        // Default to no language specification
        return '';
    }

    convertTable(tableNode) {
        const rows = Array.from(tableNode.querySelectorAll('tr'));
        if (rows.length === 0) return '';

        let markdown = '\n';

        rows.forEach((row, index) => {
            const cells = Array.from(row.querySelectorAll('td, th'));
            const cellContents = cells.map(cell =>
                (cell.textContent || '').trim().replace(/\|/g, '\\|')
            );

            markdown += `| ${cellContents.join(' | ')} |\n`;

            // Add header separator after first row
            if (index === 0 && cells.length > 0) {
                markdown += `| ${cells.map(() => '---').join(' | ')} |\n`;
            }
        });

        return markdown + '\n';
    }

    async processFile(filePath, relativePath) {
        try {
            console.log(`Processing: ${relativePath}`);

            // Store current file path for relative link calculation
            this.currentFilePath = relativePath;

            const htmlContent = await fs.readFile(filePath, 'utf-8');
            const dom = new JSDOM(htmlContent);
            const document = dom.window.document;

            // Extract main content (adjust selector based on the site structure)
            let contentElement =
                document.querySelector('main') ||
                document.querySelector('.content') ||
                document.querySelector('#content') ||
                document.querySelector('article') ||
                document.querySelector('.documentation') ||
                document.body;

            if (!contentElement) {
                console.warn(`No main content found in ${relativePath}`);
                return;
            }

            // Remove navigation and sidebar elements
            const elementsToRemove = contentElement.querySelectorAll(
                'nav, .nav, .sidebar, .breadcrumb, .footer, .header, .menu'
            );
            elementsToRemove.forEach(el => el.remove());

            // Convert to markdown
            let markdown = this.turndownService.turndown(contentElement);

            // Clean up the markdown
            markdown = this.cleanMarkdown(markdown);

            // Add front matter with metadata
            const title = document.querySelector('title')?.textContent ||
                         path.basename(relativePath, '.html');

            const frontMatter = `---
title: "${title.replace(/"/g, '\\"')}"
source: "${relativePath}"
converted: "${new Date().toISOString()}"
---

`;

            markdown = frontMatter + markdown;

            // Determine output path
            const outputPath = path.join(
                this.outputDir,
                relativePath.replace(/\.html?$/i, '.md')
            );

            // Ensure output directory exists
            await fs.mkdir(path.dirname(outputPath), { recursive: true });

            // Write markdown file
            await fs.writeFile(outputPath, markdown, 'utf-8');

            console.log(`✓ Converted: ${relativePath} -> ${path.relative(this.outputDir, outputPath)}`);

        } catch (error) {
            console.error(`Error processing ${relativePath}:`, error.message);
        }
    }

    cleanMarkdown(markdown) {
        return markdown
            // Remove excessive blank lines
            .replace(/\n{3,}/g, '\n\n')
            // Clean up list formatting
            .replace(/^\s*[\-\*\+]\s*$/gm, '')
            // Remove empty links
            .replace(/\[\]\(\)/g, '')
            // Fix spacing around headers
            .replace(/^(#{1,6})\s*/gm, '$1 ')
            // Trim whitespace from lines
            .split('\n').map(line => line.trimEnd()).join('\n')
            // Remove leading/trailing whitespace
            .trim();
    }

    async findHtmlFiles(dir, baseDir = dir) {
        const files = [];
        const entries = await fs.readdir(dir, { withFileTypes: true });

        for (const entry of entries) {
            const fullPath = path.join(dir, entry.name);
            const relativePath = path.relative(baseDir, fullPath);

            if (entry.isDirectory()) {
                // Recursively search subdirectories
                const subFiles = await this.findHtmlFiles(fullPath, baseDir);
                files.push(...subFiles);
            } else if (entry.isFile() && /\.html?$/i.test(entry.name)) {
                files.push({ fullPath, relativePath });
            }
        }

        return files;
    }

    async convert() {
        try {
            console.log(`Starting conversion from ${this.inputDir} to ${this.outputDir}`);

            // Ensure output directory exists
            await fs.mkdir(this.outputDir, { recursive: true });

            // Find all HTML files
            const htmlFiles = await this.findHtmlFiles(this.inputDir);
            console.log(`Found ${htmlFiles.length} HTML files to convert`);

            if (htmlFiles.length === 0) {
                console.log('No HTML files found to convert.');
                return;
            }

            // Process each file
            let converted = 0;
            for (const { fullPath, relativePath } of htmlFiles) {
                await this.processFile(fullPath, relativePath);
                converted++;

                // Progress indicator
                if (converted % 10 === 0) {
                    console.log(`Progress: ${converted}/${htmlFiles.length} files converted`);
                }
            }

            console.log(`\n✅ Conversion complete! Converted ${converted} files.`);
            console.log(`Markdown files saved to: ${this.outputDir}`);

        } catch (error) {
            console.error('Conversion failed:', error);
            process.exit(1);
        }
    }
}

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
GameMaker Language Documentation Tool

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
  convert [input] [output]  Convert HTML documentation to Markdown
  help                  Show this help message

Examples:
  node gm-lookup.js lookup draw_sprite
  node gm-lookup.js search "collision detection"
  node gm-lookup.js list draw
  node gm-lookup.js categories
  node gm-lookup.js category Drawing
  node gm-lookup.js file GameMaker_Language/GML_Reference/Drawing/Sprites_And_Tiles/draw_sprite.md
  node gm-lookup.js convert                                (uses ../docs -> ../md)
  node gm-lookup.js convert ./html ./markdown

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

            case 'convert':
                // Handle convert command separately as it doesn't need docs indexer
                let inputDir, outputDir;

                if (args.length >= commandArgStart + 2) {
                    // Custom input/output directories provided
                    inputDir = args[commandArgStart];
                    outputDir = args[commandArgStart + 1];
                } else {
                    // Use defaults
                    inputDir = path.join(__dirname, '..', 'docs');
                    outputDir = path.join(__dirname, '..', 'md');
                    console.log('Using default directories:');
                    console.log(`  Input:  ${inputDir}`);
                    console.log(`  Output: ${outputDir}`);
                }

                // Validate input directory exists
                try {
                    const stat = await fs.stat(inputDir);
                    if (!stat.isDirectory()) {
                        throw new Error('Input path is not a directory');
                    }
                } catch (error) {
                    console.error(`Error: Input directory "${inputDir}" does not exist or is not accessible.`);
                    process.exit(1);
                }

                const converter = new HTMLToMarkdownConverter(inputDir, outputDir);
                await converter.convert();
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