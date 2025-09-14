---
title: "string_format"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Strings/string_format.htm"
converted: "2025-09-14T04:00:07.551Z"
---

# string\_format

This function converts a real number into a string, where you can specify how many digits are visible on each side of the decimal.

The total argument is the number of digits on the left side of the decimal, and if this is higher than your value allows, spaces are inserted to fill the remaining digits. The dec argument is the number of digits on the right side of the decimal, and if this is more than the decimal digits in your number, zeroes are inserted to keep your given number of digits.

The default format is no extra spaces on the left, and only two decimal places on the right, e.g. "265.73".

Note that if val is a decimal value and dec is lower than the number of decimal places in the original number, [rounding](../Maths_And_Numbers/Number_Functions/round.md) will be performed to get the number to the appropriate decimal places. For example, 420.578 with 0 decimal places will be 421, with 1 decimal place it will be 420.6 and with 2 it will be 420.58.

#### Syntax:

string\_format(val, total, dec);

| Argument | Type | Description |
| --- | --- | --- |
| val | Real | The real number to be converted to a string. |
| total | Real | The number of places of the main number to be shown (left side of decimal). Spaces will be inserted to match this. |
| dec | Real | The number of decimal places to be included (right side of decimal). Zeroes will be inserted to match this. |

#### Returns:

[String](../../GML_Overview/Data_Types.md)

#### Example:

str1 = string\_format(1234, 8, 0);
str2 = string\_format(pi, 1, 10);
str3 = string\_format(pi, 5, 5);

This will set str1 to "    1234", str2 to "3.1415926536" and str3 to "    3.14159".