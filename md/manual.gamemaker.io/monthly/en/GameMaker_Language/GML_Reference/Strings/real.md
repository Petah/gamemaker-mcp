---
title: "real"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Strings/real.htm"
converted: "2025-09-14T04:00:07.306Z"
---

# real

This function can be used to turn a value into a real number.

When using this function on a string, numbers, minus signs, decimal points and exponential parts in the string are taken into account, while other characters (such as letters) will cause an error to be thrown. If a string may have other characters then you can use [string\_digits](string_digits.md) to remove all non-numeric characters, before using this function to turn the resulting string into a real number.

NOTE Hexadecimal numbers are also supported in a string. These strings should have a format "0x00F".

NOTE This function can also be used to convert some other data types to [Real](../../GML_Overview/Data_Types.md), such as [int64](../Variable_Functions/int64.md).

#### Syntax:

real(string);

| Argument | Type | Description |
| --- | --- | --- |
| string | String | The string to be converted to a real value. |

#### Returns:

[Real](../../GML_Overview/Data_Types.md)

#### Example:

var t\_str = string\_digits(input\_str);
age = real(t\_str);

The above code will take the input string, strip it of all characters other than numbers and then set the variable "age" to hold the real number value of the return string.