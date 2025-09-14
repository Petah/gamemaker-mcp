---
title: "font_exists"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Fonts/font_exists.htm"
converted: "2025-09-14T03:59:32.993Z"
---

# font\_exists

This function returns whether a font with the specified index exists or not. You can check font indices as defined from the Asset Browser, or fonts that have been added using functions like font\_add().

#### Syntax:

font\_exists(ind);

| Argument | Type | Description |
| --- | --- | --- |
| ind | Font Asset | Index of the font to check. |

#### Returns:

[Boolean](../../../GML_Overview/Data_Types.md)

#### Example:

if (font\_exists(fnt\_Main))
{
    draw\_set\_font(fnt\_Main);
}

This will set the active drawing font to fnt\_Main if it exists.