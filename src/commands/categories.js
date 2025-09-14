import BaseCommand from './base-command.js';

class CategoriesCommand extends BaseCommand {
    static register(program) {
        program
            .command('categories')
            .description('Show available categories')
            .action(async () => {
                const command = new CategoriesCommand();
                await command.execute({}, {}, program.opts());
            });
    }

    async execute(args, options, globalOptions) {
        const docsPath = globalOptions.path;
        await this.validateDocsPath(docsPath);
        const cli = await this.initializeCLI(docsPath);
        await cli.listCategories();
    }
}

export default CategoriesCommand;