---
title: "ansi_char"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Strings/ansi_char.htm"
converted: "2025-09-14T04:00:07.211Z"
---

# ansi\_char

This function returns a string containing the character with raw BYTE value set. This will not, _and should not_, be displayed, but it will save correctly to disk for use in encoding.

#### Syntax:

ansi\_char(val);

| Argument | Type | Description |
| --- | --- | --- |
| val | Real | The raw byte value. |

#### Returns:

[String](../../GML_Overview/Data_Types.md) (Single character)

#### Example:

var str1 = ansi\_char($EF);
var str2 = ansi\_char($BB);
var str3 = ansi\_char($BF);
file\_text\_write\_string(global.saveFile, str1 + str2 + str3);

The above code creates a string from raw byte data and writes it to a (previously opened) file.