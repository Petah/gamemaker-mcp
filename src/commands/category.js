const BaseCommand = require('./base-command.js');

class CategoryCommand extends BaseCommand {
    static register(program) {
        program
            .command('category <name>')
            .description('List functions in a specific category')
            .action(async (name) => {
                const command = new CategoryCommand();
                await command.execute(name, {}, program.opts());
            });
    }

    async execute(name, options, globalOptions) {
        const docsPath = globalOptions.path;
        await this.validateDocsPath(docsPath);
        const cli = await this.initializeCLI(docsPath);
        await cli.listFunctionsByCategory(name);
    }
}

module.exports = CategoryCommand;