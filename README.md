# GameMaker Documentation Tools

A comprehensive toolkit for GameMaker Language (GML) documentation management, featuring an MCP server, CLI tools, and HTML-to-Markdown conversion utilities.

> **Includes GameMaker Documentation**: This package comes with GameMaker Language documentation built-in. No additional setup or file downloads required!

## Features

- **MCP Server**: Model Context Protocol server for programmatic documentation access
- **CLI Documentation Tool**: Search, lookup, and browse GameMaker documentation from the command line
- **HTML Converter**: Convert GameMaker HTML documentation to clean Markdown format
- **Modern Node.js**: Built with ES modules, structured error handling, and performance monitoring

## Requirements

- **Node.js**: >= 22.0.0
- **npm**: Latest version recommended

## Installation

### Quick Start with npx (Recommended)

No installation needed! Run directly with npx:

```bash
# Run MCP server
npx @petah/gamemaker-mcp

# Run CLI tool
npx @petah/gamemaker-mcp gm-cli --help

# Alternative command names
npx @petah/gamemaker-mcp gamemaker-mcp  # MCP server
npx @petah/gamemaker-mcp gm-docs lookup draw_sprite  # CLI tool
```

### Global Installation

```bash
# Install globally
npm install -g @petah/gamemaker-mcp

# Then use directly
gamemaker-mcp
gm-cli --help
gm-docs lookup draw_sprite
```

### Local Development

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
# Using npx (recommended)
npx @petah/gamemaker-mcp gm-cli --help
npx @petah/gamemaker-mcp gm-docs lookup draw_sprite

# Alternative npx usage
npx @petah/gamemaker-mcp gm-cli lookup draw_sprite
npx @petah/gamemaker-mcp gm-docs search collision

# Global installation
gm-cli --help
gm-docs lookup draw_sprite

# All CLI commands work the same way:
# Look up a specific function
gm-docs lookup draw_sprite

# Search documentation
gm-docs search collision

# List functions by pattern
gm-docs list draw

# Show available categories
gm-docs categories

# List functions in a category
gm-docs category Drawing

# Get specific file content
gm-docs file GameMaker_Language/GML_Reference/Drawing/Sprites_And_Tiles/draw_sprite.md

# Convert HTML docs to Markdown
gm-docs convert
gm-docs convert ./html ./markdown

# Local development
npm run cli -- --help
npm run cli lookup draw_sprite
```

#### Development Mode

Use watch mode for development with automatic reloading:

```bash
# Local development only
npm run cli:dev -- --help
```

#### Custom Documentation Path (Optional)

The package includes GameMaker documentation by default. If you need to use custom docs:

```bash
# Using npx
npx @petah/gamemaker-mcp gm-docs --path /path/to/docs lookup draw_sprite

# Global installation
gm-docs --path /path/to/docs lookup draw_sprite

# Local development
npm run cli -- --path /path/to/docs lookup draw_sprite
```

### MCP Server

Start the Model Context Protocol server for programmatic access:

```bash
# Using npx (recommended) - includes built-in GameMaker docs
npx @petah/gamemaker-mcp

# Or with alternative command
npx @petah/gamemaker-mcp gamemaker-mcp

# Global installation
gamemaker-mcp
gamemaker-docs-server

# Local development
npm run mcp
node src/gamemaker-docs-server.js

# Custom documentation path (optional)
npx @petah/gamemaker-mcp /path/to/custom/docs
```

The MCP server provides 5 tools:
- `lookup_gamemaker_function` - Look up specific GML functions
- `search_gamemaker_docs` - Search documentation content
- `list_gamemaker_functions` - List functions by pattern or category
- `get_gamemaker_file` - Retrieve specific documentation files
- `init_gamemaker_agent` - Initialize with comprehensive GML coding guide

#### MCP Configuration

For Claude Desktop or other MCP clients, add this to your configuration:

**Claude Desktop (claude_desktop_config.json):**
```json
{
  "mcpServers": {
    "gamemaker-docs": {
      "command": "npx",
      "args": ["@petah/gamemaker-mcp"],
      "env": {}
    }
  }
}
```

**VS Code (.vscode/settings.json):**
```json
{
  "mcp.servers": {
    "gamemaker-docs": {
      "command": "npx",
      "args": ["@petah/gamemaker-mcp"],
      "cwd": "${workspaceFolder}"
    }
  }
}
```

**With custom documentation path (optional):**
```json
{
  "mcpServers": {
    "gamemaker-docs": {
      "command": "npx",
      "args": ["@petah/gamemaker-mcp", "/path/to/your/gamemaker/docs"],
      "env": {}
    }
  }
}
```

> **Note**: The package includes GameMaker documentation by default, so no path configuration is needed for standard usage.

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
