---
title: "string_digits"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Strings/string_digits.htm"
converted: "2025-09-14T04:00:07.478Z"
---

# string\_digits

You can use this function to parse a given string and get any numbers from it. For example, say you have this text - "I am 81 years old". With this function you would get a return string of "81".

#### Syntax:

string\_digits(string);

| Argument | Type | Description |
| --- | --- | --- |
| string | String | The string to get the digits from. |

#### Returns:

[String](../../GML_Overview/Data_Types.md)

#### Example:

var t\_str = string\_digits(input\_str);
age = real(t\_str);

The above code will take the input string, strip it of all characters other than numbers and then set the variable age to hold the real number value of the return string (so, if the input string was - for example - "I am 18", the function would return "18").