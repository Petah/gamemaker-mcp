const fs = require('fs').promises;
const path = require('path');
const HTMLToMarkdownConverter = require('../lib/html-converter.js');

class ConvertCommand {
    static register(program) {
        program
            .command('convert [input] [output]')
            .description('Convert HTML documentation to Markdown')
            .action(async (input, output) => {
                const command = new ConvertCommand();
                await command.execute(input, output, {}, program.opts());
            });
    }

    async execute(input, output, options, globalOptions) {
        const inputDir = input || path.join(__dirname, '..', '..', 'docs');
        const outputDir = output || path.join(__dirname, '..', '..', 'md');

        if (!input && !output) {
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
    }
}

module.exports = ConvertCommand;