---
title: "string_lower"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Strings/string_lower.htm"
converted: "2025-09-14T04:00:07.724Z"
---

# string\_lower

With this function you can force a string to contain only lower case characters.

NOTE This function only detects the 26 letter English alphabet from A - Z.

#### Syntax:

string\_lower(string);

| Argument | Type | Description |
| --- | --- | --- |
| string | String | The string to convert to lowercase. |

#### Returns:

[String](../../../../../../GameMaker_Language/GML_Overview/Data_Types.md)

#### Example:

str1 = "Hello World";
str2 = string\_lower(str1);

The above code will set str2 to "hello world".