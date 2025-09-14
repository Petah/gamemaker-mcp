import BaseCommand from './base-command.js';

class LookupCommand extends BaseCommand {
    static register(program) {
        program
            .command('lookup <function>')
            .description('Look up a specific function')
            .option('--no-examples', 'Exclude code examples from results')
            .action(async (functionName, options) => {
                const command = new LookupCommand();
                await command.execute(functionName, options, program.opts());
            });
    }

    async execute(functionName, options, globalOptions) {
        const docsPath = globalOptions.path;
        await this.validateDocsPath(docsPath);
        const cli = await this.initializeCLI(docsPath);
        await cli.lookupFunction(functionName, !options.noExamples);
    }
}

export default LookupCommand;