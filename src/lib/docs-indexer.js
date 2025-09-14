import { readFile, readdir, writeFile, stat, access } from 'node:fs/promises';
import { join, relative, basename, sep, isAbsolute, dirname, resolve } from 'node:path';
import { constants } from 'node:fs';

class DocsIndexer {
    constructor(docsPath) {
        this.docsPath = docsPath;
        this.functionIndex = new Map();
        this.fileContent = new Map();
        this.cacheFile = join(docsPath, '.docs-index-cache.json');
        this.cacheValid = false;
    }

    async buildIndex() {
        // Try to load from cache first
        if (await this.loadFromCache()) {
            console.error('Loaded documentation index from cache');
            return;
        }

        console.error('Building documentation index...');

        try {
            const files = await this.findMarkdownFiles(this.docsPath);
            let totalFunctions = 0;

            for (const filePath of files) {
                try {
                    const content = await readFile(filePath, 'utf-8');
                    this.fileContent.set(filePath, content);

                    const functions = this.extractFunctions(content, filePath);

                    for (const funcInfo of functions) {
                        const key = funcInfo.name.toLowerCase();
                        if (!this.functionIndex.has(key)) {
                            this.functionIndex.set(key, []);
                        }
                        this.functionIndex.get(key).push(funcInfo);
                        totalFunctions++;
                    }
                } catch (error) {
                    console.error(`Error processing ${filePath}:`, error.message);
                }
            }

            console.error(`Index built: ${this.functionIndex.size} unique functions, ${totalFunctions} total references`);

            // Save to cache
            await this.saveToCache();
        } catch (error) {
            console.error('Error building index:', error.message);
        }
    }

    async findMarkdownFiles(dir) {
        const files = [];

        try {
            const entries = await readdir(dir, { withFileTypes: true });

            for (const entry of entries) {
                const fullPath = join(dir, entry.name);

                if (entry.isDirectory()) {
                    const subFiles = await this.findMarkdownFiles(fullPath);
                    files.push(...subFiles);
                } else if (entry.isFile() && entry.name.endsWith('.md')) {
                    files.push(fullPath);
                }
            }
        } catch (error) {
            console.error(`Error reading directory ${dir}:`, error.message);
        }

        return files;
    }

    extractFunctions(content, filePath) {
        const functions = [];
        const lines = content.split('\n');

        // Track current section context
        let currentSection = '';
        let inCodeBlock = false;

        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];
            const trimmedLine = line.trim();

            // Track code blocks
            if (trimmedLine.startsWith('```')) {
                inCodeBlock = !inCodeBlock;
                continue;
            }

            // Track sections
            if (trimmedLine.match(/^#+\s+/)) {
                currentSection = trimmedLine.replace(/^#+\s+/, '').trim();

                // Check if this heading is a function name (handle escaped underscores)
                const unescapedSection = currentSection.replace(/\\_/g, '_');
                const funcMatch = unescapedSection.match(/^([a-zA-Z_][a-zA-Z0-9_]*)\s*(?:\(|$)/);
                if (funcMatch && this.isLikelyFunction(unescapedSection, content, i)) {
                    functions.push({
                        name: funcMatch[1],
                        file: filePath,
                        section: currentSection,
                        lineNumber: i + 1,
                        type: 'heading',
                        context: this.getFileCategory(filePath)
                    });
                }
            }

            // Look for function calls and definitions in code (handle escaped underscores)
            if (!inCodeBlock) {
                const unescapedLine = trimmedLine.replace(/\\_/g, '_');
                const functionMatches = unescapedLine.matchAll(/\b([a-zA-Z_][a-zA-Z0-9_]*)\s*\(/g);
                for (const match of functionMatches) {
                    const funcName = match[1];
                    if (this.isLikelyGMLFunction(funcName)) {
                        functions.push({
                            name: funcName,
                            file: filePath,
                            section: currentSection,
                            lineNumber: i + 1,
                            type: 'reference',
                            context: this.getFileCategory(filePath)
                        });
                    }
                }
            }
        }

        return functions;
    }

    isLikelyFunction(heading, content, lineIndex) {
        // Check if this looks like a function documentation section
        const lowerHeading = heading.toLowerCase();

        // Skip common non-function headings
        if (lowerHeading.match(/^(syntax|description|parameters|returns?|example|note|see also|overview)$/)) {
            return false;
        }

        // Look ahead for function-like content
        const lines = content.split('\n');
        for (let i = lineIndex + 1; i < Math.min(lineIndex + 10, lines.length); i++) {
            const line = lines[i].toLowerCase();
            if (line.includes('syntax') || line.includes('parameter') || line.includes('return')) {
                return true;
            }
            if (line.match(/^#+\s+/)) break; // Stop at next heading
        }

        return false;
    }

    isLikelyGMLFunction(name) {
        // Common GML function patterns
        if (name.length < 2) return false;
        if (name.match(/^(if|for|while|var|function|return|break|continue|else|switch|case|default)$/)) return false;

        // GML functions often have underscores or start with specific prefixes
        return name.includes('_') ||
               name.match(/^(draw|audio|sprite|instance|room|layer|surface|buffer|ds_|string|array)/);
    }

    getFileCategory(filePath) {
        const pathParts = filePath.split(sep);

        // Find the index where the meaningful path starts (after manual.gamemaker.io/monthly/en/)
        let startIndex = -1;
        for (let i = 0; i < pathParts.length; i++) {
            if (pathParts[i] === 'en' &&
                i > 0 && pathParts[i-1] === 'monthly' &&
                i > 1 && pathParts[i-2] === 'manual.gamemaker.io') {
                startIndex = i + 1;
                break;
            }
        }

        if (startIndex === -1) {
            // Fallback to old logic if pattern not found
            const relevantParts = pathParts.filter(part =>
                part !== 'md' &&
                part !== 'manual.gamemaker.io' &&
                part !== 'monthly' &&
                part !== 'en' &&
                !part.endsWith('.md') &&
                !part.includes('Users')
            );
            return relevantParts.join(' > ');
        }

        const relevantParts = pathParts.slice(startIndex).filter(part => !part.endsWith('.md'));
        return relevantParts.join(' > ');
    }

    async lookupFunction(functionName) {
        const normalizedName = functionName.toLowerCase();
        const functionRefs = this.functionIndex.get(normalizedName);

        if (!functionRefs || functionRefs.length === 0) {
            return {
                found: false,
                suggestions: this.findSimilarFunctions(normalizedName)
            };
        }

        // Prefer heading-type references (actual documentation sections)
        const bestRef = functionRefs.find(ref => ref.type === 'heading') || functionRefs[0];

        try {
            const content = this.fileContent.get(bestRef.file);
            if (!content) {
                throw new Error('File content not cached');
            }

            const documentation = this.extractFunctionDocumentation(content, functionName);
            const processedDocumentation = documentation ?
                this.convertLinksToRootRelative(documentation, bestRef.file) :
                documentation;

            return {
                found: true,
                function: bestRef,
                documentation: processedDocumentation,
                allReferences: functionRefs
            };
        } catch (error) {
            return {
                found: false,
                error: error.message
            };
        }
    }

    extractFunctionDocumentation(content, functionName) {
        const lines = content.split('\n');
        let startIndex = -1;
        let endIndex = lines.length;

        const functionNameLower = functionName.toLowerCase();
        const escapedFunctionName = functionName.replace(/_/g, '\\_');

        // Find the function documentation section
        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];
            const lowerLine = line.toLowerCase();
            const unescapedLine = line.replace(/\\_/g, '_');

            // Look for heading that matches the function name (with or without escaped underscores)
            if (line.match(/^#+\s+/) &&
                (lowerLine.includes(functionNameLower) ||
                 unescapedLine.toLowerCase().includes(functionNameLower))) {
                startIndex = i;
                break;
            }
        }

        if (startIndex === -1) {
            // Fallback: look for any mention of the function (with or without escaped underscores)
            for (let i = 0; i < lines.length; i++) {
                const line = lines[i];
                const lowerLine = line.toLowerCase();
                const unescapedLine = line.replace(/\\_/g, '_').toLowerCase();

                if ((lowerLine.includes(functionNameLower) || unescapedLine.includes(functionNameLower)) &&
                    (line.includes('(') || line.match(/^#+/))) {
                    startIndex = i;
                    break;
                }
            }
        }

        if (startIndex === -1) {
            return null;
        }

        // Find the end of this section
        for (let i = startIndex + 1; i < lines.length; i++) {
            const line = lines[i];
            // Stop at next major heading
            if (line.match(/^#+\s+/) && !line.toLowerCase().includes('syntax') &&
                !line.toLowerCase().includes('parameter') && !line.toLowerCase().includes('example')) {
                endIndex = i;
                break;
            }
        }

        const section = lines.slice(startIndex, endIndex).join('\n').trim();
        return section || null;
    }

    findSimilarFunctions(target) {
        const similar = [];
        const targetLength = target.length;

        for (const [funcName] of this.functionIndex) {
            // Exact substring matches
            if (funcName.includes(target) || target.includes(funcName)) {
                similar.push({ name: funcName, score: 3 });
            }
            // Levenshtein-like fuzzy matching for close names
            else if (Math.abs(funcName.length - targetLength) <= 2) {
                const score = this.calculateSimilarity(target, funcName);
                if (score > 0.6) {
                    similar.push({ name: funcName, score });
                }
            }
        }

        return similar
            .sort((a, b) => b.score - a.score)
            .slice(0, 10)
            .map(item => item.name);
    }

    calculateSimilarity(str1, str2) {
        const len1 = str1.length;
        const len2 = str2.length;
        const matrix = Array(len1 + 1).fill(null).map(() => Array(len2 + 1).fill(null));

        for (let i = 0; i <= len1; i++) matrix[i][0] = i;
        for (let j = 0; j <= len2; j++) matrix[0][j] = j;

        for (let i = 1; i <= len1; i++) {
            for (let j = 1; j <= len2; j++) {
                const cost = str1[i - 1] === str2[j - 1] ? 0 : 1;
                matrix[i][j] = Math.min(
                    matrix[i - 1][j] + 1,
                    matrix[i][j - 1] + 1,
                    matrix[i - 1][j - 1] + cost
                );
            }
        }

        const maxLen = Math.max(len1, len2);
        return (maxLen - matrix[len1][len2]) / maxLen;
    }

    async searchDocs(query, maxResults = 5) {
        const results = [];
        const queryLower = query.toLowerCase();
        const queryWords = queryLower.split(/\s+/);

        for (const [filePath, content] of this.fileContent) {
            const contentLower = content.toLowerCase();

            // Calculate relevance score
            let score = 0;
            let matchCount = 0;

            for (const word of queryWords) {
                const wordMatches = (contentLower.match(new RegExp(word, 'g')) || []).length;
                if (wordMatches > 0) {
                    matchCount++;
                    score += wordMatches;
                }
            }

            // Only include results that match at least half the query words
            if (matchCount >= Math.ceil(queryWords.length / 2)) {
                const relevantSection = this.extractRelevantSection(content, query);
                const fileName = basename(filePath, '.md');
                const category = this.getFileCategory(filePath);

                results.push({
                    file: fileName,
                    category,
                    section: relevantSection,
                    path: filePath,
                    score,
                    matchCount
                });
            }
        }

        // Sort by relevance (match count first, then score)
        results.sort((a, b) => {
            if (a.matchCount !== b.matchCount) {
                return b.matchCount - a.matchCount;
            }
            return b.score - a.score;
        });

        return results.slice(0, maxResults);
    }

    extractRelevantSection(content, query) {
        const lines = content.split('\n');
        const queryLower = query.toLowerCase();
        const queryWords = queryLower.split(/\s+/);

        let bestSection = '';
        let bestScore = 0;
        let currentSection = '';
        let sectionStart = 0;

        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];

            // Track sections
            if (line.match(/^#+\s+/)) {
                // Score the previous section
                if (currentSection) {
                    const sectionScore = this.scoreSectionRelevance(currentSection, queryWords);
                    if (sectionScore > bestScore) {
                        bestScore = sectionScore;
                        bestSection = lines.slice(sectionStart, i).join('\n').trim();
                    }
                }

                currentSection = line;
                sectionStart = i;
            } else {
                currentSection += '\n' + line;
            }
        }

        // Score the last section
        if (currentSection) {
            const sectionScore = this.scoreSectionRelevance(currentSection, queryWords);
            if (sectionScore > bestScore) {
                bestSection = lines.slice(sectionStart).join('\n').trim();
            }
        }

        // Fallback to context around first match
        if (!bestSection) {
            for (let i = 0; i < lines.length; i++) {
                if (lines[i].toLowerCase().includes(queryLower)) {
                    const start = Math.max(0, i - 5);
                    const end = Math.min(lines.length, i + 10);
                    bestSection = lines.slice(start, end).join('\n').trim();
                    break;
                }
            }
        }

        return bestSection || content.slice(0, 800) + '...';
    }

    scoreSectionRelevance(section, queryWords) {
        const sectionLower = section.toLowerCase();
        let score = 0;

        for (const word of queryWords) {
            const matches = (sectionLower.match(new RegExp(word, 'g')) || []).length;
            score += matches;
        }

        return score;
    }

    getAllFunctions(pattern = '') {
        const functions = [];
        const patternLower = pattern.toLowerCase();

        for (const [funcName, refs] of this.functionIndex) {
            if (!pattern || funcName.includes(patternLower)) {
                // Get the best reference (prefer headings)
                const bestRef = refs.find(ref => ref.type === 'heading') || refs[0];
                functions.push({
                    name: bestRef.name,
                    category: bestRef.context,
                    type: bestRef.type
                });
            }
        }

        return functions.sort((a, b) => a.name.localeCompare(b.name));
    }

    getCategories() {
        const categories = new Set();

        for (const [, refs] of this.functionIndex) {
            for (const ref of refs) {
                if (ref.context) {
                    categories.add(ref.context);
                }
            }
        }

        return Array.from(categories).sort();
    }

    async getMarkdownFile(filePath) {
        // Handle relative paths and normalize
        let targetPath = filePath;

        // If it's a root-relative path (starts with GameMaker_Language etc), resolve it
        if (!isAbsolute(targetPath) && !targetPath.includes('manual.gamemaker.io')) {
            targetPath = join(this.docsPath, 'manual.gamemaker.io/monthly/en', targetPath);
        } else if (!isAbsolute(targetPath)) {
            targetPath = join(this.docsPath, targetPath);
        }

        // Ensure .md extension
        if (!targetPath.endsWith('.md')) {
            targetPath = targetPath + '.md';
        }

        try {
            const content = await fs.readFile(targetPath, 'utf-8');
            const rootRelativePath = this.convertToRootRelative(targetPath);
            const processedContent = this.convertLinksToRootRelative(content, targetPath);

            return {
                found: true,
                path: targetPath,
                relativePath: rootRelativePath,
                content: processedContent
            };
        } catch (error) {
            return {
                found: false,
                error: error.message,
                suggestions: await this.findSimilarFiles(filePath)
            };
        }
    }

    convertLinksToRootRelative(content, currentFilePath) {
        // Convert relative links to root-relative paths
        return content.replace(/\[([^\]]+)\]\(([^)]+\.md)\)/g, (match, linkText, linkPath) => {
            // Skip if it's already a root-relative path or external URL
            if (linkPath.startsWith('http') || linkPath.startsWith('GameMaker_Language/')) {
                return match;
            }

            // Resolve the relative path from the current file
            const currentDir = dirname(currentFilePath);
            const resolvedPath = resolve(currentDir, linkPath);
            const rootRelativePath = this.convertToRootRelative(resolvedPath);

            return `[${linkText}](${rootRelativePath})`;
        });
    }

    async findSimilarFiles(searchPath) {
        const suggestions = [];
        const searchName = basename(searchPath, '.md').toLowerCase();

        for (const [filePath] of this.fileContent) {
            const fileName = basename(filePath, '.md').toLowerCase();
            if (fileName.includes(searchName) || searchName.includes(fileName)) {
                const rootRelativePath = this.convertToRootRelative(filePath);
                suggestions.push(rootRelativePath);
            }
        }

        return suggestions.slice(0, 5);
    }

    convertToRootRelative(filePath) {
        const pathParts = filePath.split(sep);

        // Find the index where the meaningful path starts (after manual.gamemaker.io/monthly/en/)
        let startIndex = -1;
        for (let i = 0; i < pathParts.length; i++) {
            if (pathParts[i] === 'en' &&
                i > 0 && pathParts[i-1] === 'monthly' &&
                i > 1 && pathParts[i-2] === 'manual.gamemaker.io') {
                startIndex = i + 1;
                break;
            }
        }

        if (startIndex === -1) {
            // Fallback: return relative to docs path
            return relative(this.docsPath, filePath).replace(/\\/g, '/');
        }

        const meaningfulParts = pathParts.slice(startIndex);
        return meaningfulParts.join('/');
    }

    async loadFromCache() {
        try {
            // Check if cache file exists
            await access(this.cacheFile, constants.F_OK);

            // Check if cache is still valid
            if (!(await this.isCacheValid())) {
                return false;
            }

            const cacheData = await readFile(this.cacheFile, 'utf-8');
            const cache = JSON.parse(cacheData);

            // Restore the Maps from the cache
            this.functionIndex = new Map(cache.functionIndex);
            this.fileContent = new Map(cache.fileContent);
            this.cacheValid = true;

            return true;
        } catch (error) {
            // Cache doesn't exist or is invalid
            return false;
        }
    }

    async saveToCache() {
        try {
            const cache = {
                timestamp: Date.now(),
                functionIndex: Array.from(this.functionIndex.entries()),
                fileContent: Array.from(this.fileContent.entries())
            };

            await writeFile(this.cacheFile, JSON.stringify(cache, null, 2), 'utf-8');
            this.cacheValid = true;
        } catch (error) {
            console.error('Failed to save cache:', error.message);
        }
    }

    async isCacheValid() {
        try {
            const cacheStats = await stat(this.cacheFile);
            const cacheTime = cacheStats.mtime.getTime();

            // Find all markdown files and check their modification times
            const files = await this.findMarkdownFiles(this.docsPath);

            for (const filePath of files) {
                try {
                    const fileStats = await stat(filePath);
                    if (fileStats.mtime.getTime() > cacheTime) {
                        return false; // A file is newer than the cache
                    }
                } catch (error) {
                    // If we can't stat a file, assume cache is invalid
                    return false;
                }
            }

            return true;
        } catch (error) {
            return false;
        }
    }
}

export default DocsIndexer;