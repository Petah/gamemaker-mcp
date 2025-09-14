#!/usr/bin/env node

const path = require('path');
const { Command } = require('commander');
const { registerAllCommands } = require('./commands');


async function main() {
    const program = new Command();

    // Set default docs path
    const defaultDocsPath = path.join(__dirname, '..', 'md');

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

if (require.main === module) {
    main().catch(error => {
        console.error('CLI failed:', error);
        process.exit(1);
    });
}