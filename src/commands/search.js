import BaseCommand from './base-command.js';

class SearchCommand extends BaseCommand {
    static register(program) {
        program
            .command('search <query>')
            .description('Search documentation for terms')
            .option('-m, --max-results <number>', 'Maximum number of results', '5')
            .action(async (query, options) => {
                const command = new SearchCommand();
                await command.execute(query, options, program.opts());
            });
    }

    async execute(query, options, globalOptions) {
        const docsPath = globalOptions.path;
        await this.validateDocsPath(docsPath);
        const cli = await this.initializeCLI(docsPath);
        await cli.searchDocs(query, parseInt(options.maxResults));
    }
}

export default SearchCommand;