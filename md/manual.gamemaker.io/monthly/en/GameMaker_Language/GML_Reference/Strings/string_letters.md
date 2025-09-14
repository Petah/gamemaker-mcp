---
title: "string_letters"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Strings/string_letters.htm"
converted: "2025-09-14T04:00:07.697Z"
---

# string\_letters

With this function you can remove all characters that are not classed as letters. This is handy for preventing people from entering unwanted characters into a text entry (like entering "#" to force a new line).

NOTE This function only detects and returns the 26 letter English alphabet from A - Z (upper or lower case).

#### Syntax:

string\_letters(string);

| Argument | Type | Description |
| --- | --- | --- |
| string | String | The string to convert to letters. |

#### Returns:

[String](../../GML_Overview/Data_Types.md)

#### Example:

username = string\_letters(username);

The above code will set the "username" variable to only hold the _letter_ characters of the original string (id the original string was "MacSw33ny" the returned string would be "MacSwny").