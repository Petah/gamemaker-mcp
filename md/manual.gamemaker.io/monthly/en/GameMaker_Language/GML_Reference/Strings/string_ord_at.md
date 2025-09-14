---
title: "string_ord_at"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Strings/string_ord_at.htm"
converted: "2025-09-14T04:00:07.738Z"
---

# string\_ord\_at

You can use this function to return a specific character code at a specific position within a string, with the index starting at 1 for the first character. If no character is found or the string is shorter than the value given to index, -1 is returned.

#### Syntax:

string\_ord\_at(str, index);

| Argument | Type | Description |
| --- | --- | --- |
| str | String | The string to check. |
| index | Real | The position to get the character code from. |

#### Returns:

[Real](../../../../../../GameMaker_Language/GML_Overview/Data_Types.md)

#### Example:

str = "Hello World";
char\_code = string\_ord\_at(str, 7);

This will get the character code for the seventh character (where "H" counts as the first) in string "str" and store it in the variable "char\_code".