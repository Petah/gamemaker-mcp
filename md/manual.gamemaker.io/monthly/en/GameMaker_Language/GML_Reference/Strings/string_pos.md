---
title: "string_pos"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Strings/string_pos.htm"
converted: "2025-09-14T04:00:07.751Z"
---

# string\_pos

This function will return the character position of an instance of a sub-string within a string, searching from the beginning of the string (to search from the end, use the function [string\_last\_pos()](../../../../../../GameMaker_Language/GML_Reference/Strings/string_last_pos.md)). The function will return 0 if it's not found at all, or the position of the first character of the sub-string if it is found. Keep in mind that for legacy support strings are indexed from 1, so 1 is the first position in the string, not 0 as you may expect. One use for this is for filtering words that may be considered offensive, or for finding the correct place to insert some text into another string.

#### Syntax:

string\_pos(substr, str);

| Argument | Type | Description |
| --- | --- | --- |
| substr | String | The substring to look for in the string. |
| str | String | The string. |

#### Returns:

[Real](../../GML_Overview/Data_Types.md)

#### Example:

if (string\_pos(",", text) != 0)
{
    string\_insert(name, text, string\_pos(",", text));
}

The above code searches the string stored in the variable "text" for a comma, and if it finds one it inserts the substring "name" at that position.