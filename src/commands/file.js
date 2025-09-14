import BaseCommand from './base-command.js';

class FileCommand extends BaseCommand {
    static register(program) {
        program
            .command('file <path>')
            .description('Get the content of a specific markdown file')
            .action(async (filePath) => {
                const command = new FileCommand();
                await command.execute(filePath, {}, program.opts());
            });
    }

    async execute(filePath, options, globalOptions) {
        const docsPath = globalOptions.path;
        await this.validateDocsPath(docsPath);
        const cli = await this.initializeCLI(docsPath);
        await cli.getMarkdownFile(filePath);
    }
}

export default FileCommand;