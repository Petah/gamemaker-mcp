class GameMakerLookupCLI {
    constructor(docsIndexer) {
        this.docsIndexer = docsIndexer;
    }

    async lookupFunction(functionName, includeExamples = true) {
        const result = await this.docsIndexer.lookupFunction(functionName);

        if (!result.found) {
            console.log(`Function "${functionName}" not found in documentation.\n`);
            if (result.suggestions && result.suggestions.length > 0) {
                console.log('Did you mean one of these?');
                result.suggestions.forEach(f => console.log(`  - ${f}`));
            } else {
                console.log('No similar functions found. Try using search instead.');
            }
            return;
        }

        let documentation = result.documentation || `Found reference to "${functionName}" but couldn't extract detailed documentation.`;

        // Remove code examples if requested
        if (!includeExamples) {
            documentation = documentation.replace(/```[\s\S]*?```/g, '[Code example removed]');
        }

        console.log(documentation);

        // Add reference information
        if (result.allReferences && result.allReferences.length > 1) {
            const otherRefs = result.allReferences.filter(ref => ref !== result.function);
            if (otherRefs.length > 0) {
                const otherPaths = [...new Set(otherRefs.map(ref => this.docsIndexer.convertToRootRelative(ref.file)))];
                console.log('\n**Also found in:**');
                otherPaths.forEach(path => console.log(`  - ${path}`));
            }
        }
    }

    async searchDocs(query, maxResults = 5) {
        const results = await this.docsIndexer.searchDocs(query, maxResults);

        if (results.length === 0) {
            console.log(`No results found for "${query}". Try different keywords or check spelling.`);
            return;
        }

        console.log(`Found ${results.length} result(s) for "${query}":\n`);
        results.forEach((result, index) => {
            console.log(`## Result ${index + 1}: ${result.file}`);
            console.log(`**Category:** ${result.category}`);
            console.log(`**Relevance Score:** ${result.score}\n`);
            console.log(result.section);
            console.log('\n---\n');
        });
    }

    async listFunctions(pattern = '') {
        const functions = this.docsIndexer.getAllFunctions(pattern);

        if (functions.length === 0) {
            console.log(pattern ? `No functions found matching "${pattern}"` : 'No functions found');
            return;
        }

        console.log(pattern ?
            `Functions matching "${pattern}" (${functions.length} total):` :
            `All functions (${functions.length} total):`
        );

        // Group by category
        const grouped = {};
        functions.forEach(f => {
            const category = f.category || 'Unknown';
            if (!grouped[category]) grouped[category] = [];
            grouped[category].push(f);
        });

        for (const [category, funcs] of Object.entries(grouped)) {
            console.log(`\n**${category}:**`);
            funcs.forEach(f => console.log(`  - ${f.name} (${f.type})`));
        }
    }

    async listCategories() {
        const categories = this.docsIndexer.getCategories();

        console.log('Available categories:');
        categories.forEach(cat => console.log(`  - ${cat}`));
    }

    async listFunctionsByCategory(category) {
        const allFunctions = this.docsIndexer.getAllFunctions();
        const categoryLower = category.toLowerCase();

        const functions = allFunctions.filter(func =>
            func.category && func.category.toLowerCase().includes(categoryLower)
        );

        if (functions.length === 0) {
            const categories = this.docsIndexer.getCategories();
            const similarCategories = categories.filter(cat =>
                cat.toLowerCase().includes(categoryLower)
            ).slice(0, 5);

            console.log(`No functions found for category "${category}".`);
            if (similarCategories.length > 0) {
                console.log('\nSimilar categories:');
                similarCategories.forEach(c => console.log(`  - ${c}`));
            } else {
                console.log('Try searching for specific terms or use the search command instead.');
            }
            return;
        }

        console.log(`Functions in category "${category}" (${functions.length} total):\n`);
        functions.forEach(f => console.log(`  - ${f.name} (${f.type})`));
    }

    async getMarkdownFile(filePath) {
        const result = await this.docsIndexer.getMarkdownFile(filePath);

        if (!result.found) {
            console.log(`File "${filePath}" not found.\n`);
            if (result.suggestions && result.suggestions.length > 0) {
                console.log('Similar files:');
                result.suggestions.forEach(f => console.log(`  - ${f}`));
            } else {
                console.log('No similar files found.');
            }
            console.log(`\nError: ${result.error}`);
            return;
        }

        console.log(`**File:** ${result.relativePath}\n`);
        console.log(result.content);
    }
}

module.exports = GameMakerLookupCLI;