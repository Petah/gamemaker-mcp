---
title: "string_upper"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Strings/string_upper.htm"
converted: "2025-09-14T04:00:07.944Z"
---

# string\_upper

With this function you can force a string to contain only upper case characters.

NOTE This function only detects the 26 letter English alphabet from A - Z.

#### Syntax:

string\_upper(string);

| Argument | Type | Description |
| --- | --- | --- |
| string | String | The string to convert to uppercase. |

#### Returns:

[String](../../GML_Overview/Data_Types.md)

#### Example:

str1 = "Hello World";
str2 = string\_upper(str1);

The above code will set the variable str2 to "HELLO WORLD".