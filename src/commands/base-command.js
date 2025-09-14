import { access } from 'node:fs/promises';
import DocsIndexer from '../lib/docs-indexer.js';
import GameMakerLookupCLI from '../lib/gamemaker-cli.js';
import { ErrorHandler, ValidationError, PerformanceMonitor } from '../lib/errors.js';

class BaseCommand {
    async validateDocsPath(docsPath) {
        await ErrorHandler.wrapAsync(async () => {
            await access(docsPath);
        }, { operation: 'validateDocsPath', path: docsPath });
    }

    async initializeCLI(docsPath) {
        return await PerformanceMonitor.measure('initializeCLI', async () => {
            const docsIndexer = new DocsIndexer(docsPath);
            await docsIndexer.buildIndex();
            return new GameMakerLookupCLI(docsIndexer);
        });
    }
}

export default BaseCommand;