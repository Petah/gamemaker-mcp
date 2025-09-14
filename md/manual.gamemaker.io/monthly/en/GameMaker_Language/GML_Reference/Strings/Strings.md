---
title: "Strings"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Strings/Strings.htm"
converted: "2025-09-14T04:00:07.198Z"
---

# Strings

When you want to use text in your game, whether it's for dialogue, menus, or just debugging, use strings.

In GML, text is created as a _string_, which can be stored in a variable. "String" refers to a "_string_ of characters" which makes up your text.

GameMaker has a complete set of functions that permit you to manipulate strings in many ways, including the insertion of one string in another, the copying of strings and the ability to parse strings for the digits or the letters that they contain.

It also has more advanced functions to deal with strings, including trimming, splitting into an array, concatenating from an array and iterating over characters.

Lastly, GameMaker also provides a convenient way to convert [structs](../../GML_Overview/Structs.md) and [instances](../Asset_Management/Instances/Instances.md) to a string representation by assigning them a [toString method](Strings.htm#tostring_method).

## String Basics

A string is a type of [variable](../../GML_Overview/Variables_And_Variable_Scope.md). The simplest way to create one is by adding text within double quotes " ":

my\_first\_string = "Hello World!";

The above line of code creates a string that reads "Hello World!" and assigns it to a variable called my\_first\_string.

NOTE Single quote strings ' ' are not accepted.

NOTE You cannot split a string over multiple lines in your code and expect GameMaker to render it as if the line breaks were newlines, however, you can do that by using a string literal identifier [@](Strings.htm#@) before your string's starting quotation mark, as [explained below](Strings.htm#h2).

### Escape Characters

Sometimes you will need to add special characters inside a string, such as double quotes ", newline characters or characters with a specific character code.

This can be done by using _escape characters_. These are characters that are preceded by a backslash \\ symbol. For example, if you wanted to put quotation marks within a string you would have something like this:

str = "Hello\\"World\\"!";

GameMaker also has full four byte wide Unicode character support, allowing you to decode and encode Unicode characters in the upper bounds of the standard (including - but not limited to - emoji).

To deal with Unicode characters, you can use a backslash \\ to precede any Unicode literal - digits of hex preceded by a "u", for example "\\u00e2" for "á"- where the digits are the number of the Unicode character. When working with Unicode in this way, you need to be aware of the fact that GameMaker will interpret _all_ digits following the "u", so if you wanted to write "áa" for example, you should use:

"\\u00e2\\a"

or

"\\u00e2\\u61"

or

"\\u00e2" + "a"

Just using "\\u00e2a" would actually result in the Unicode character "ส" (essentially becoming "\\ue2a").

GameMaker can also handle any hexadecimal literal - normally written as digits of hex following "0x", for example "0xff", where the digits form the character code of the character to use. In GameMaker strings, these are written using "\\x" and then the hex value. These and other predefined escape characters are listed in the table below:

| Constant | Description |
| --- | --- |
| \n | Newline |
| \r | Carriage return (0x0d) |
| \b | Backspace (0x08) |
| \f | Form Feed (0x0c) |
| \t | Horizontal Tab (0x09) |
| \v | Vertical Tab (0x0b) |
| \\ | Backslash itself (0x5c) |
| \a | Alert (0x07) |
| \u[Hex Digits] | Insert Unicode character |
| \x[Hex Digits] | Insert hex literal character |
| \[Octal Digits] | Insert octal Unicode character |

NOTE Strings support form feed, vertical tab, etc., but this does not mean to say that **rendering** does, and when drawing strings these characters may be ignored.

### Multi-Line String Literal

You can create multi-line string literals by preceding the whole string with the @ character:

var test = @"This string has
line breaks
over multiple
lines
";

The above code will create a string that is rendered over multiple lines as if there was a line break escape character included. A string literal can also be defined using single quotes ' ' when prefixed by an @ symbol.

Multi-line string literals do not support escaped characters, e.g. @"Hello\\World" will _not_ try to escape the W on World and will be stored verbatim. Note though that when using string literals like this, you will need to break the string if you wish to include quotation marks as part of the string, e.g.:

var test = @"Hello " + "\\"" + @"World" + "\\"";

NOTE The Unicode character 9647 (▯) is used to substitute any missing glyphs that you may have in your designated font when rendering it in the draw event. So if your font doesn't have, for example, the ° symbol, then writing 90° will actually produce 90▯.

### Template Strings

Template strings give you a convenient syntax to create and format strings. You can create them by prefixing a string literal with the $ character, and including expressions inside {}:

var \_world = "Earth";
var \_template = $"Hello {\_world}!";

Which produces the same string as:

var \_world = "Earth";
var \_template = string("Hello {0}!", \_world);

Everything written between curly braces { } inside a template string is executed as regular GML. The result of the GML expression between the braces is inserted into the string:

var \_template = $"The result of a random complicated calculation is {5 \* power(pi, 3) + 37.84094}";

To make it more clear that this is regular GML, [The Script Editor](../../../The_Asset_Editors/Scripts.md) also highlights this code normally. [Feather](../../../Setting_Up_And_Version_Information/IDE_Preferences/Feather_Settings.md) also checks these GML expressions for any errors, e.g.:

var \_arr = \[ 1, 2, 3, 4 \];
var \_a = $"The first value is {\_arr\[| 0\]}"; // GM1028 - Accessor is intended for type of 'Id.DsList' but 'Array<Real>' appears instead.

You can split a template string across multiple lines, however you can only do this in the expression parts of the templates. Any newline and other white-space characters that need to be added to the actual string have to be added using [Escape Characters](Strings.htm#h1).

The following code shows a valid and an invalid way of splitting a template string across multiple lines:

var \_a = $"This is the \\n{
valid
}\\nway to split a template across multiple lines";

var \_b = $"This is the
{invalid}
way to split a template across multiple lines";

## toString() Method

When a reference to a struct or an instance of an object is passed as an argument to any of [string](string.md) / [string\_ext](string_ext.md) / [show\_debug\_message](../../../../../../GameMaker_Language/GML_Reference/Debugging/show_debug_message.md) / [show\_debug\_message\_ext](show_debug_message_ext.md), it will have its toString method called, if it has one set.

toString = function()
{
    return string("I am the instance with ID {0}", id);
}

You can pass a struct reference to one of the above functions for its toString() method to be used, however for instances you must use self within its scope, as passing an instance ID will not call its toString() method.

// In an instance
string(self); // Calls its toString() method, if it exists
string(id); // Prints "ref <id>", same goes for IDs returned from instance\_create\_\*()

TIP Arrays are automatically converted to a string representation when they are passed to one of the above functions, without needing to assign a custom function to the array.

You're not required to convert a struct or instance to a string with [string()](string.md) if you want to draw it. Simply passing a valid reference to [draw\_text](../../../../../../GameMaker_Language/GML_Reference/Drawing/Text/draw_text.md) or [any of the related draw\_text\_ functions](../Drawing/Text/Text.md) will automatically convert it to a string:

draw\_text(0, 0, self);

## Function Reference

Below is the list of functions for dealing with strings.

IMPORTANT In GameMaker, string positions start at 1 (meaning they are _one-based_), compared to other data types in GameMaker, which are all [zero-based](https://en.wikipedia.org/wiki/Zero-based_numbering) (starting at 0). So the first character in a string has a position of 1, the second character a position of 2, and so on. The last character is [string\_length](string_length.md)(string).

### Creating Strings

-   [string](string.md)
-   [string\_ext](string_ext.md)

### Character Code

-   [ansi\_char](ansi_char.md)
-   [chr](../../../../../../GameMaker_Language/GML_Reference/Strings/chr.md)
-   [ord](ord.md)
-   [string\_byte\_at](string_byte_at.md)
-   [string\_byte\_length](string_byte_length.md)
-   [string\_set\_byte\_at](../../../../../../GameMaker_Language/GML_Reference/Strings/string_set_byte_at.md)
-   [string\_char\_at](string_char_at.md)
-   [string\_ord\_at](../../../../../../GameMaker_Language/GML_Reference/Strings/string_ord_at.md)

### Searching and Information

-   [string\_length](string_length.md)
-   [string\_pos](string_pos.md)
-   [string\_pos\_ext](string_pos_ext.md)
-   [string\_last\_pos](../../../../../../GameMaker_Language/GML_Reference/Strings/string_last_pos.md)
-   [string\_last\_pos\_ext](string_last_pos_ext.md)
-   [string\_starts\_with](string_starts_with.md)
-   [string\_ends\_with](../../../../../../GameMaker_Language/GML_Reference/Strings/string_ends_with.md)
-   [string\_count](string_count.md)

### Manipulating Strings

-   [string\_copy](string_copy.md)
-   [string\_delete](../../../../../../GameMaker_Language/GML_Reference/Strings/string_delete.md)
-   [string\_digits](string_digits.md)
-   [string\_format](string_format.md)
-   [string\_insert](../../../../../../GameMaker_Language/GML_Reference/Strings/string_insert.md)
-   [string\_letters](string_letters.md)
-   [string\_lettersdigits](string_lettersdigits.md)
-   [string\_lower](../../../../../../GameMaker_Language/GML_Reference/Strings/string_lower.md)
-   [string\_repeat](string_repeat.md)
-   [string\_replace](string_replace.md)
-   [string\_replace\_all](string_replace_all.md)
-   [string\_upper](string_upper.md)
-   [string\_hash\_to\_newline](../../../../../../GameMaker_Language/GML_Reference/Strings/string_hash_to_newline.md)
-   [string\_trim](string_trim.md)
-   [string\_trim\_start](string_trim_start.md)
-   [string\_trim\_end](string_trim_end.md)
-   [string\_split](string_split.md)
-   [string\_split\_ext](../../../../../../GameMaker_Language/GML_Reference/Strings/string_split_ext.md)
-   [string\_join](string_join.md)
-   [string\_join\_ext](string_join_ext.md)
-   [string\_concat](string_concat.md)
-   [string\_concat\_ext](string_concat_ext.md)

### Drawing-Related

-   [string\_width](string_width.md)
-   [string\_width\_ext](string_width_ext.md)
-   [string\_height](string_height.md)
-   [string\_height\_ext](../../../../../../GameMaker_Language/GML_Reference/Strings/string_height_ext.md)

### Iteration

-   [string\_foreach](string_foreach.md)

### Data Type

-   [is\_string](../Variable_Functions/is_string.md)

### Methods

-   [toString Method](Strings.htm#tostring_method)

### Related functions

-   [Text](../Drawing/Text/Text.md)
-   Debugging: [show\_debug\_message](../../../../../../GameMaker_Language/GML_Reference/Debugging/show_debug_message.md) and [show\_debug\_message\_ext](show_debug_message_ext.md)
-   [Clipboard](../OS_And_Compiler/OS_And_Compiler.htm#h)