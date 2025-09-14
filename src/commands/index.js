import LookupCommand from './lookup.js';
import SearchCommand from './search.js';
import ListCommand from './list.js';
import CategoriesCommand from './categories.js';
import CategoryCommand from './category.js';
import FileCommand from './file.js';
import ConvertCommand from './convert.js';

export function registerAllCommands(program) {
    LookupCommand.register(program);
    SearchCommand.register(program);
    ListCommand.register(program);
    CategoriesCommand.register(program);
    CategoryCommand.register(program);
    FileCommand.register(program);
    ConvertCommand.register(program);
}

export {
    LookupCommand,
    SearchCommand,
    ListCommand,
    CategoriesCommand,
    CategoryCommand,
    FileCommand,
    ConvertCommand
};