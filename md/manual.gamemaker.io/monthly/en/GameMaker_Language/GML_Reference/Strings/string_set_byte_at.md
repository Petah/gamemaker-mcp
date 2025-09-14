---
title: "string_set_byte_at"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Strings/string_set_byte_at.htm"
converted: "2025-09-14T04:00:07.827Z"
---

# string\_set\_byte\_at

This function sets a byte directly in a string (based on the UTF-8 format) and returns a copy of the string with the changes.

NOTE This function is incredibly slow so consider carefully whether it is necessary and where you use it.

#### Syntax:

string\_set\_byte\_at(str, pos, byte);

| Argument | Type | Description |
| --- | --- | --- |
| str | String | The string to change the byte of. |
| pos | Real | The position within the string (starting at 1) to change the byte of. |
| byte | Real | The new byte value. |

#### Returns:

[String](../../../../../../GameMaker_Language/GML_Overview/Data_Types.md)

#### Example:

str = string\_set\_byte\_at("hello", 2, 97);

The above code would change the byte value of the second letter in the string, and so set the variable str to hold "hallo".