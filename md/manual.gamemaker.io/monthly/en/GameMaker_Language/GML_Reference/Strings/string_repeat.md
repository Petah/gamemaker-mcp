---
title: "string_repeat"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Strings/string_repeat.htm"
converted: "2025-09-14T04:00:07.781Z"
---

# string\_repeat

This function simply returns the same string repeated a given number of times over itself.

#### Syntax:

string\_repeat(str, count);

| Argument | Type | Description |
| --- | --- | --- |
| str | String | The string to repeat. |
| count | Real | The number of times to repeat the string. |

#### Returns:

[String](../../GML_Overview/Data_Types.md)

#### Example:

str1 = "Hello World";
str2 = string\_repeat(str1, 3);

The above code will set str2 to "Hello WorldHello WorldHello World".