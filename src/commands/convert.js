import { stat } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import HTMLToMarkdownConverter from '../lib/html-converter.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

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
        const inputDir = input || join(__dirname, '..', '..', 'docs');
        const outputDir = output || join(__dirname, '..', '..', 'md');

        if (!input && !output) {
            console.log('Using default directories:');
            console.log(`  Input:  ${inputDir}`);
            console.log(`  Output: ${outputDir}`);
        }

        // Validate input directory exists
        try {
            const statResult = await stat(inputDir);
            if (!statResult.isDirectory()) {
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

export default ConvertCommand;