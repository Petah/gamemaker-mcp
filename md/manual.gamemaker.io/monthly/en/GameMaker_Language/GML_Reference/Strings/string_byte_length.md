---
title: "string_byte_length"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Strings/string_byte_length.htm"
converted: "2025-09-14T04:00:07.372Z"
---

# string\_byte\_length

This function returns the number of bytes in a string. Due to their being held as UTF8, this will _not_ be equal to the [number of characters](string_length.md) in the string.

#### Syntax:

string\_byte\_length(string);

| Argument | Type | Description |
| --- | --- | --- |
| string | String | The string to measure the number of bytes of. |

#### Returns:

[Real](../../GML_Overview/Data_Types.md)

#### Example:

bytesize = string\_byte\_length("Hello World");

This would set bytesize to the number of bytes in "Hello World".