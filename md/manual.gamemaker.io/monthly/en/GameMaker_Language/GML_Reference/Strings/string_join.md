---
title: "string_join"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Strings/string_join.htm"
converted: "2025-09-14T04:00:07.620Z"
---

# string\_join

This function joins together the string representations of all arguments that are passed to it, inserting the given "delimiter" between each argument. The function returns the joined string.

Arguments that are not strings will have the [string()](string.md) function run on them implicitly. See [Conversion From Non-String Types](string.htm#h1) for information on how those data types are converted.

#### Syntax:

string\_join(delimiter, value1 \[, value2, ... max\_val\]);

| Argument | Type | Description |
| --- | --- | --- |
| delimiter | String | The string to insert between the values |
| value1 | Any | The first value to join |
| [, value2, ... max_val] | Any | OPTIONAL The other values to join |

#### Returns:

[String](../../GML_Overview/Data_Types.md)

#### Example:

countdown\_message = string\_join("... ", "Ready", "Set", "Go!");

The above code calls string\_join to create a new string from a few phrases, joined together by the string "... ". The result is stored in a variable named countdown\_message.