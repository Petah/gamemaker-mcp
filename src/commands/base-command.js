const fs = require('fs').promises;
const DocsIndexer = require('../lib/docs-indexer.js');
const GameMakerLookupCLI = require('../lib/gamemaker-cli.js');

class BaseCommand {
    async validateDocsPath(docsPath) {
        try {
            await fs.access(docsPath);
        } catch (error) {
            console.error(`Error: Documentation path "${docsPath}" does not exist or is not accessible.`);
            process.exit(1);
        }
    }

    async initializeCLI(docsPath) {
        const docsIndexer = new DocsIndexer(docsPath);
        await docsIndexer.buildIndex();
        return new GameMakerLookupCLI(docsIndexer);
    }
}

module.exports = BaseCommand;