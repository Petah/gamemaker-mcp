---
title: "string_byte_at"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Strings/string_byte_at.htm"
converted: "2025-09-14T04:00:07.359Z"
---

# string\_byte\_at

Returns the raw byte value as a real value at a given position in the given string.

#### Syntax:

string\_byte\_at(str, index);

| Argument | Type | Description |
| --- | --- | --- |
| str | String | The string to check. |
| index | Real | The position to get the byte from. |

#### Returns:

[Real](../../GML_Overview/Data_Types.md)

#### Example:

newbyte = string\_byte\_at("Hello World", 5);

This will set newbyte to the raw byte value of the sixth letter of "Hello World".