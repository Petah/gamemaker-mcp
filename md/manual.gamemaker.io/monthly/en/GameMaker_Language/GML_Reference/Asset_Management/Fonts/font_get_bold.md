---
title: "font_get_bold"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Fonts/font_get_bold.htm"
converted: "2025-09-14T03:59:33.008Z"
---

# font\_get\_bold

With this function you can check any font asset to see if it has the **bold** flag or not. If it does the function will return true, otherwise it will return false.

#### Syntax:

font\_get\_bold(ind);

| Argument | Type | Description |
| --- | --- | --- |
| ind | Font Asset | Index of the font to check. |

#### Returns:

[Boolean](../../../GML_Overview/Data_Types.md)

#### Example:

if (font\_get\_bold(fnt\_Main))
{
    draw\_set\_font(fnt\_Main);
}

This will set the active drawing font to fnt\_Main if it is set as bold in its font properties.