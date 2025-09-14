---
title: "string_count"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Strings/string_count.htm"
converted: "2025-09-14T04:00:07.450Z"
---

# string\_count

This function will return the amount of times the given substring appears within a specific string. In this way you can check for how many times a single letter or a phrase is repeated in a section of stored text.

#### Syntax:

string\_count(substr, str);

| Argument | Type | Description |
| --- | --- | --- |
| substr | String | The substring to check the string for. |
| str | String | The string to check. |

#### Returns:

[Real](../../GML_Overview/Data_Types.md)

#### Example:

str1 = "Hello World";
ocount = string\_count( "o", str1 );

This will set the variable ocount to the number of "o"s in str1, in this case 2.