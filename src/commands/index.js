const LookupCommand = require('./lookup.js');
const SearchCommand = require('./search.js');
const ListCommand = require('./list.js');
const CategoriesCommand = require('./categories.js');
const CategoryCommand = require('./category.js');
const FileCommand = require('./file.js');
const ConvertCommand = require('./convert.js');

function registerAllCommands(program) {
    LookupCommand.register(program);
    SearchCommand.register(program);
    ListCommand.register(program);
    CategoriesCommand.register(program);
    CategoryCommand.register(program);
    FileCommand.register(program);
    ConvertCommand.register(program);
}

module.exports = {
    registerAllCommands,
    LookupCommand,
    SearchCommand,
    ListCommand,
    CategoriesCommand,
    CategoryCommand,
    FileCommand,
    ConvertCommand
};