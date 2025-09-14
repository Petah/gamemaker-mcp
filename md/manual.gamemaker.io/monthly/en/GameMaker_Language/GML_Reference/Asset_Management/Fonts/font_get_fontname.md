---
title: "font_get_fontname"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Fonts/font_get_fontname.htm"
converted: "2025-09-14T03:59:33.038Z"
---

# font\_get\_fontname

With this function you can get the actual system name of the given font asset. This function returns a _string_ and not an _index_, and the name returned will depend on the font being used. For example, you may have a font asset called "**fnt\_Main**" in the Asset Browser, and the font itself may be the Windows system font **Arial**. In this case the function will return "Arial" as that is the system name of the font. If you need the name that appears in the Asset Browser, use [font\_get\_name()](font_get_name.md).

The behaviour described above only applies to font assets added through the IDE. When used on a font loaded at runtime (using [font\_add()](font_add.md)), the function will return the full path to that font file instead of its font name.

#### Syntax:

font\_get\_fontname(ind);

| Argument | Type | Description |
| --- | --- | --- |
| ind | Font Asset | Index of the font to check. |

#### Returns:

[String](../../../GML_Overview/Data_Types.md)

#### Example:

fnt\_Name = font\_get\_fontname(font0);

The above code will get the system name of a font resource and store it as a string in the variable "fnt\_Name".