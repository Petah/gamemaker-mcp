---
title: "string_foreach"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Strings/string_foreach.htm"
converted: "2025-09-14T04:00:07.535Z"
---

# string\_foreach

This function executes a callback function on all characters of the given string.

The function optionally takes in a starting position and a length that define the range of characters over which to iterate, and the direction of iteration (left-to-right or right-to-left).

The callback function will receive two arguments for each character in the string: the character itself, and its position in the string.

IMPORTANT In GameMaker, string positions start at 1 (meaning they are _one-based_), compared to other data types in GameMaker, which are all [zero-based](https://en.wikipedia.org/wiki/Zero-based_numbering) (starting at 0). So the first character in a string has a position of 1, the second character a position of 2, and so on. The last character is [string\_length](string_length.md)(string).

#### Syntax:

string\_foreach(string, function, \[pos\], \[length\]);

| Argument | Type | Description |
| --- | --- | --- |
| string | String | The string to iterate over |
| function | Function | The function to execute for each of the characters in the range, with arguments character and position |
| pos | Real | OPTIONAL The starting position (default is 1 for strings). Negative values count from the end of the string (e.g. -1 is the position of the last character, -2 is the position of the one before last character, etc.). 0 is treated the same as 1. |
| length | Real | OPTIONAL The number of characters to iterate over and the direction in which to iterate (left-to-right (positive value) or right-to-left (negative value)). |

#### Returns:

N/A

#### Example 1:

function debug\_character(character, position)
{
    show\_debug\_message(character);
}

string\_foreach("test", debug\_character);

The above code first defines a function debug\_character that prints the character to the log using [show\_debug\_message](../../../../../../GameMaker_Language/GML_Reference/Debugging/show_debug_message.md). It then calls the function string\_foreach on a string "test" to execute the debug\_character function on all its characters.

#### Example 2:

function debug\_extended(character, position)
{
    show\_debug\_message("{0}: {1}", position, character);
}

string\_foreach("1234567890", debug\_extended, -1, -infinity);

The above code first defines a function debug\_extended that shows a debug message with both the position and the character in it. Then, string\_foreach is called with the debug\_extended function on the string "1234567890". Because the offset is -1, the first character on which the function will execute is the last one ("0"). The characters are traversed in a descending order because of the negative length ("0", "9", "8", "7", "6", ..., "1").