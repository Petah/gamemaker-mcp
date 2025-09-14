---
title: "string_last_pos"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Strings/string_last_pos.htm"
converted: "2025-09-14T04:00:07.656Z"
---

# string\_last\_pos

This function will return the character position of an instance of a sub-string within a string, searching from the end of the string to the beginning (so the reverse of [string\_pos()](string_pos.md). The function will return 0 if the search string is not found, or the position of the first character of the search string if it is. Keep in mind that for legacy support strings are indexed from 1, so 1 is the first position in the string, not 0 as you may expect.

#### Syntax:

string\_last\_pos(substr, str);

| Argument | Type | Description |
| --- | --- | --- |
| substr | String | The substring to look for in the string. |
| str | String | The string. |

#### Returns:

[Real](../../../../../../GameMaker_Language/GML_Overview/Data_Types.md)

#### Example:

if (string\_last\_pos(",", text) != 0)
{
    string\_insert(name, text, string\_last\_pos(",", text));
}

The above code searches the string stored in the variable "text" for a comma starting the search from the end of the string. If it finds one it inserts the substring "name" at that position.