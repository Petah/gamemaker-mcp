const fs = require('fs').promises;
const path = require('path');
const { JSDOM } = require('jsdom');
const TurndownService = require('turndown');

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

        // Configure turndown service
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
            .replace(/\[]\(\)/g, '')
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

// Main execution
async function main() {
    const args = process.argv.slice(2);

    // Set default directories
    const defaultInputDir = path.join(__dirname, '..', 'docs');
    const defaultOutputDir = path.join(__dirname, '..', 'md');

    let inputDir, outputDir;

    if (args.length === 0) {
        // Use defaults
        inputDir = defaultInputDir;
        outputDir = defaultOutputDir;
        console.log(`Using default directories:`);
        console.log(`  Input:  ${inputDir}`);
        console.log(`  Output: ${outputDir}`);
    } else if (args.length === 1) {
        console.log('Usage: node html-to-markdown.js [input-directory] [output-directory]');
        console.log('       node html-to-markdown.js (uses ../docs -> ../md)');
        console.log('Example: node html-to-markdown.js ./manual.gamemaker.io ./markdown-docs');
        process.exit(1);
    } else {
        [inputDir, outputDir] = args;
    }

    // Validate input directory
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
}

// Run the script
if (require.main === module) {
    main().catch(error => {
        console.error('Script failed:', error);
        process.exit(1);
    });
}

module.exports = HTMLToMarkdownConverter;