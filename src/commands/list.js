import BaseCommand from './base-command.js';

class ListCommand extends BaseCommand {
    static register(program) {
        program
            .command('list [pattern]')
            .description('List all functions (optionally filtered by pattern)')
            .action(async (pattern = '') => {
                const command = new ListCommand();
                await command.execute(pattern, {}, program.opts());
            });
    }

    async execute(pattern, options, globalOptions) {
        const docsPath = globalOptions.path;
        await this.validateDocsPath(docsPath);
        const cli = await this.initializeCLI(docsPath);
        await cli.listFunctions(pattern);
    }
}

export default ListCommand;