---
title: "string_concat"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Strings/string_concat.htm"
converted: "2025-09-14T04:00:07.404Z"
---

# string\_concat

This function concatenates (joins together) the string representations of all arguments that are passed to it, and returns the result as a new string.

Arguments that are not strings will have the [string()](string.md) function run on them implicitly. See [Conversion From Non-String Types](string.htm#h1) for information on how those data types are converted.

If you want to join strings with certain characters between them, use [string\_join()](string_join.md).

#### Syntax:

string\_concat(value1 \[, value2, ... max\_val\]);

| Argument | Type | Description |
| --- | --- | --- |
| value1 | Any | The first value to concatenate |
| [, value2, ... max_val] | Any | OPTIONAL Additional values to concatenate |

#### Returns:

[String](../../GML_Overview/Data_Types.md)

#### Example:

result = string\_concat("W", "o", "r", "d", "s");

The above code calls string\_concat on a series of letters to make a word. The new string is stored in a variable result.