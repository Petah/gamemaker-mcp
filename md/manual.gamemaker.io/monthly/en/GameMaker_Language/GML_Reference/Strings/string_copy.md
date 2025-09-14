---
title: "string_copy"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Strings/string_copy.htm"
converted: "2025-09-14T04:00:07.434Z"
---

# string\_copy

With this function you can easily select a number of characters from within a string to be copied to another one. The first character in a string is always indexed as 1 and not 0 as you may expect, so to copy (for example) the first five characters of string you would have string\_copy(str, 1, 5). A further example is provided below.

#### Syntax:

string\_copy(str, index, count);

| Argument | Type | Description |
| --- | --- | --- |
| str | String | The string to copy from. |
| index | Real | The position of the first character in the string to copy from (numbered from 1) |
| count | Real | The number of characters, starting from the position of the first, to copy |

#### Returns:

[String](../../GML_Overview/Data_Types.md)

#### Example:

name = keyboard\_string;
if (string\_length(name) > 15)
{
    keyboard\_string = string\_copy(name, 1, 15);
}

The above code will allow the player to input a string through the keyboard which is then stored in the variable name. This variable is then checked to see if it exceeds the maximum length of 15 characters and if it does, the keyboard\_string is replaced by a 15 character copy of the name string. This effectively limits the player input to 15 characters.