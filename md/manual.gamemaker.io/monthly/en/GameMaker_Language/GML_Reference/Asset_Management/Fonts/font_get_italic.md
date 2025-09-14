---
title: "font_get_italic"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Fonts/font_get_italic.htm"
converted: "2025-09-14T03:59:33.092Z"
---

# font\_get\_italic

With this function you can check any font asset to see if it has the _italic_ flag or not. If it does the function will return true, otherwise it will return false.

#### Syntax:

font\_get\_italic(ind);

| Argument | Type | Description |
| --- | --- | --- |
| ind | Font Asset | Index of the font to check. |

#### Returns:

[Boolean](../../../GML_Overview/Data_Types.md)

#### Example:

if (font\_get\_italic(fnt\_Main))
{
    draw\_set\_font(fnt\_Main);
}

This will set the active drawing font to fnt\_Main if it is set as italic in its font properties.