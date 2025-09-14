---
title: "string_ext"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Strings/string_ext.htm"
converted: "2025-09-14T04:00:07.514Z"
---

# string\_ext

This function creates a new string, allowing you to insert placeholders in the main "format string", and to specify an array containing the values to be inserted into those placeholders.

The first argument is a [Format String](string.htm#h) and the second argument is an array containing values to be inserted into the format string.

## Format String

For information on format strings, see: [string()](string.md)

This function works in a similar manner, but instead of the values being passed as separate arguments, they're passed as an array in the second argument.

NOTE You can also use [Template Strings](Strings.htm#h4) to insert variables and expressions into strings.

#### Syntax:

string\_ext(value\_or\_format, values);

| Argument | Type | Description |
| --- | --- | --- |
| value_or_format | Any (if value) or String (if format) | The value to be turned into a string. |
| values | Array | An array of values to be inserted at the placeholder positions. |

#### Returns:

[String](../../GML_Overview/Data_Types.md)

#### Example:

numbers = \[59, 23, 656, 8, 54\];
array\_sort(numbers, true);

var \_str = string\_ext("The three lowest numbers are: {0}, {1} and {2}", numbers);

The above code first defines an array with some numbers, and sorts them in an ascending order. It then uses that array in a string\_ext() to call to insert its first three numbers into a format string.