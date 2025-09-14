import { readFile, writeFile, mkdir, readdir, stat } from 'node:fs/promises';
import { join, dirname, basename, relative } from 'node:path';
import { JSDOM } from 'jsdom';
import TurndownService from 'turndown';
import { ErrorHandler, ConversionError, PerformanceMonitor } from './errors.js';

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
                const currentDir = dirname(this.currentFilePath.replace(/\.html?$/, '.md'));
                const relPath = relative(currentDir, targetPath);
                return relPath.replace(/\\/g, '/'); // Ensure forward slashes
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

            const htmlContent = await readFile(filePath, 'utf-8');
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
                         basename(relativePath, '.html');

            const frontMatter = `---
title: "${title.replace(/"/g, '\\"')}"
source: "${relativePath}"
converted: "${new Date().toISOString()}"
---

`;

            markdown = frontMatter + markdown;

            // Determine output path
            const outputPath = join(
                this.outputDir,
                relativePath.replace(/\.html?$/i, '.md')
            );

            // Ensure output directory exists
            await mkdir(dirname(outputPath), { recursive: true });

            // Write markdown file
            await writeFile(outputPath, markdown, 'utf-8');

            console.log(`✓ Converted: ${relativePath} -> ${relative(this.outputDir, outputPath)}`);

        } catch (error) {
            const handledError = ErrorHandler.handle(error, {
                operation: 'processFile',
                filePath: relativePath
            });
            ErrorHandler.logError(handledError);
            throw new ConversionError(
                `Failed to process ${relativePath}`,
                filePath,
                relativePath.replace(/\.html?$/i, '.md'),
                { originalError: handledError }
            );
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
        const entries = await readdir(dir, { withFileTypes: true });

        for (const entry of entries) {
            const fullPath = join(dir, entry.name);
            const relativePath = relative(baseDir, fullPath);

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
        return await PerformanceMonitor.measure('htmlConversion', async () => {
            console.log(`Starting conversion from ${this.inputDir} to ${this.outputDir}`);

            // Ensure output directory exists
            await ErrorHandler.wrapAsync(async () => {
                await mkdir(this.outputDir, { recursive: true });
            }, { operation: 'createOutputDirectory', path: this.outputDir });

            // Find all HTML files
            const htmlFiles = await ErrorHandler.wrapAsync(async () => {
                return await this.findHtmlFiles(this.inputDir);
            }, { operation: 'findHtmlFiles', path: this.inputDir });

            console.log(`Found ${htmlFiles.length} HTML files to convert`);

            if (htmlFiles.length === 0) {
                console.log('No HTML files found to convert.');
                return;
            }

            // Process each file
            let converted = 0;
            const errors = [];

            for (const { fullPath, relativePath } of htmlFiles) {
                try {
                    await this.processFile(fullPath, relativePath);
                    converted++;

                    // Progress indicator
                    if (converted % 10 === 0) {
                        console.log(`Progress: ${converted}/${htmlFiles.length} files converted`);
                    }
                } catch (error) {
                    errors.push({ file: relativePath, error });
                    console.warn(`Skipping ${relativePath}: ${error.message}`);
                }
            }

            console.log(`\n✅ Conversion complete! Converted ${converted} files.`);
            if (errors.length > 0) {
                console.warn(`⚠️  ${errors.length} files had errors and were skipped.`);
            }
            console.log(`Markdown files saved to: ${this.outputDir}`);

            return { converted, errors: errors.length, total: htmlFiles.length };
        });
    }
}

export default HTMLToMarkdownConverter;