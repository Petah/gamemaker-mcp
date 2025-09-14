---
title: "font_get_size"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Fonts/font_get_size.htm"
converted: "2025-09-14T03:59:33.156Z"
---

# font\_get\_size

With this function you can get the size of any font resource, which is the point value shown by the font resource dialogue.

#### Syntax:

font\_get\_size(ind);

| Argument | Type | Description |
| --- | --- | --- |
| ind | Font Asset | Index of the font to get the size of. |

#### Returns:

[Real](../../../GML_Overview/Data_Types.md)

#### Example:

sz = font\_get\_size(font0);

This will get the size of the font indexed by the "font0" variable and store it in the variable "sz".