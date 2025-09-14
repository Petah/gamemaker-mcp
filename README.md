# GameMaker Documentation Tools

A comprehensive toolkit for GameMaker Language (GML) documentation management, featuring an MCP server, CLI tools, and HTML-to-Markdown conversion utilities.

## Features

- **MCP Server**: Model Context Protocol server for programmatic documentation access
- **CLI Documentation Tool**: Search, lookup, and browse GameMaker documentation from the command line
- **HTML Converter**: Convert GameMaker HTML documentation to clean Markdown format
- **Modern Node.js**: Built with ES modules, structured error handling, and performance monitoring

## Requirements

- **Node.js**: >= 24.0.0
- **npm**: Latest version recommended

## Installation

```bash
# Clone the repository
git clone <repository-url>
cd gm-mcp

# Install dependencies
npm install
```

## Usage

### CLI Documentation Tool

The CLI provides comprehensive GameMaker documentation lookup and search capabilities:

```bash
# Show help
npm run cli -- --help

# Look up a specific function
npm run cli lookup draw_sprite

# Search documentation
npm run cli search collision

# List functions by pattern
npm run cli list draw

# Show available categories
npm run cli categories

# List functions in a category
npm run cli category Drawing

# Get specific file content
npm run cli file GameMaker_Language/GML_Reference/Drawing/Sprites_And_Tiles/draw_sprite.md

# Convert HTML docs to Markdown
npm run cli convert
npm run cli convert ./html ./markdown
```

#### Development Mode

Use watch mode for development with automatic reloading:

```bash
npm run cli:dev -- --help
```

#### Custom Documentation Path

Specify a custom documentation directory:

```bash
npm run cli -- --path /path/to/docs lookup draw_sprite
npm run cli -- --path /path/to/docs search collision --max-results 10
```

### MCP Server

Start the Model Context Protocol server for programmatic access:

```bash
# Start with default documentation path
npm run mcp

# Start with custom documentation path
node src/gamemaker-docs-server.js /path/to/docs
```

The MCP server provides 5 tools:
- `lookup_gamemaker_function` - Look up specific GML functions
- `search_gamemaker_docs` - Search documentation content
- `list_gamemaker_functions` - List functions by pattern or category
- `get_gamemaker_file` - Retrieve specific documentation files
- `init_gamemaker_agent` - Initialize with comprehensive GML coding guide

### HTML to Markdown Conversion

Convert GameMaker HTML documentation to clean Markdown:

```bash
# Convert with default paths (docs -> md)
npm run convert

# Convert with custom paths
npm run cli convert /path/to/html /path/to/output
```

## Project Structure

```
src/
├── cli.js                      # Main CLI entry point
├── gamemaker-docs-server.js    # MCP server implementation
├── commands/                   # CLI command implementations
│   ├── base-command.js        # Shared command functionality
│   ├── lookup.js              # Function lookup command
│   ├── search.js              # Documentation search command
│   ├── list.js                # Function listing command
│   ├── categories.js          # Category browsing command
│   ├── category.js            # Category-specific listing
│   ├── file.js                # File retrieval command
│   ├── convert.js             # HTML conversion command
│   └── index.js               # Command registry
├── lib/                       # Shared libraries
│   ├── docs-indexer.js        # Documentation indexing and search
│   ├── gamemaker-cli.js       # GameMaker CLI functionality
│   ├── html-converter.js      # HTML to Markdown converter
│   └── errors.js              # Structured error handling
docs/                          # Raw HTML documentation
md/                            # Converted Markdown documentation
init.txt                       # GameMaker coding guide for LLM agents
.vscode/mcp.json              # VS Code MCP configuration
```

## Key Features

### Modern Node.js Architecture

- **ES Modules**: Full ESM support with proper import/export syntax
- **Node.js Built-ins**: Uses `node:` prefix for built-in modules
- **Structured Error Handling**: Rich error context and logging
- **Performance Monitoring**: Automatic timing and slow operation detection

### Documentation Management

- **Smart Indexing**: Efficient function and content indexing
- **Fuzzy Search**: Find functions even with partial or misspelled names
- **Category Organization**: Browse documentation by logical categories
- **Link Conversion**: Automatic conversion of HTML links to Markdown paths

### Development Experience

- **Watch Mode**: Hot reloading during development (`npm run cli:dev`)
- **Structured Logging**: Rich error context and debugging information
- **Performance Insights**: Automatic timing measurements for operations
- **Comprehensive Error Handling**: Clear error messages with context

## Examples

### Function Lookup
```bash
$ npm run cli lookup draw_sprite

# draw_sprite(sprite, subimg, x, y)

Draws a sprite at the given position.

**Parameters:**
- sprite: The sprite to draw
- subimg: The sub-image of the sprite
- x: The x coordinate
- y: The y coordinate

**Example:**
```gml
draw_sprite(spr_player, 0, x, y);
```
```

### Documentation Search
```bash
$ npm run cli search "collision detection"

Found 15 result(s) for "collision detection":

## Result 1: GameMaker_Language/GML_Reference/Movement_And_Collisions/Collisions/collision_point.md
**Category:** Movement and Collisions
**Relevance Score:** 8.5

Returns true if there is a collision at the specified point...
```

### Performance Monitoring
```bash
$ npm run cli convert ./docs ./output

Starting conversion from ./docs to ./output
Found 1247 HTML files to convert
...
Conversion complete! Converted 1247 files.
htmlConversion: 15.43s
```

## Development

### Architecture Principles

1. **Modular Design**: Each command is self-contained in its own file
2. **Shared Utilities**: Common functionality in the `lib/` directory
3. **Error Handling**: Structured error classes with rich context
4. **Performance**: Built-in timing and monitoring capabilities

### Adding New Commands

1. Create a new command file in `src/commands/`
2. Extend `BaseCommand` for shared functionality
3. Register the command in `src/commands/index.js`
4. Follow the existing pattern for error handling and performance monitoring

### Error Handling

The project uses structured error handling with contextual information:

```javascript
import { ErrorHandler, ValidationError } from './lib/errors.js';

// Wrap async operations
await ErrorHandler.wrapAsync(async () => {
    // Your async code here
}, { operation: 'myOperation', context: 'additional info' });

// Handle specific errors
throw new ValidationError('Invalid input', 'fieldName', inputValue);
```

## License

MIT License - see LICENSE file for details.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes following the existing code style
4. Submit a pull request

## Issues & Support

Report issues at: [GitHub Issues](https://github.com/anthropics/claude-code/issues)

For help with using Claude Code: `/help`