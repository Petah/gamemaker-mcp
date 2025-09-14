#!/usr/bin/env node

import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { Command } from 'commander';
import { registerAllCommands } from './commands/index.js';
import { ErrorHandler, AppError } from './lib/errors.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


async function main() {
    const program = new Command();

    // Set default docs path
    const defaultDocsPath = join(__dirname, '..', 'md');

    program
        .name('gm-cli')
        .description('GameMaker Language Documentation Tool')
        .version('1.0.0')
        .option('-p, --path <path>', 'Documentation path', defaultDocsPath);

    // Register all commands
    registerAllCommands(program);

    // Parse and execute commands
    try {
        await program.parseAsync(process.argv);
    } catch (error) {
        console.error('Error:', error.message);
        process.exit(1);
    }
}

// ES module equivalent of require.main === module
if (import.meta.url === `file://${process.argv[1]}`) {
    try {
        await main();
    } catch (error) {
        const handledError = ErrorHandler.handle(error, { operation: 'main' });
        ErrorHandler.logError(handledError);
        process.exit(handledError instanceof AppError ? Math.floor(handledError.statusCode / 100) : 1);
    }
}