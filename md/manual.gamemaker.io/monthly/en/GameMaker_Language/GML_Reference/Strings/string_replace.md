---
title: "string_replace"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Strings/string_replace.htm"
converted: "2025-09-14T04:00:07.795Z"
---

# string\_replace

You can use this function to parse a string looking for a specific substring, which can then be replaced by the new string that you have specified. This will only replace one occurrence, to replace all of them use [string\_replace\_all](string_replace_all.md).

#### Syntax:

string\_replace(str, substr, newstr);

| Argument | Type | Description |
| --- | --- | --- |
| str | String | The string to be parsed. |
| substr | String | The substring within the string to be replaced. |
| newstr | String | The new substring to replace the previous one. |

#### Returns:

[String](../../GML_Overview/Data_Types.md)

#### Example:

str1 = "Hello Earth";
str2 = string\_replace(str1, "Earth", "World");

This will set str2 to str1, but with its first instance of "Earth" replaced with "World", resulting in str2 being "Hello World".