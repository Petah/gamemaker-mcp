---
title: "draw_get_font"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Text/draw_get_font.htm"
converted: "2025-09-14T03:59:54.660Z"
---

# draw\_get\_font

This function will get the font currently assigned for drawing text. The function will return the handle for the font asset assigned, or an invalid handle (-1) if no font is set.

#### Syntax:

draw\_get\_font()

#### Returns:

[Font Asset](../../../../The_Asset_Editors/Fonts.md)

#### Example:

var \_cur\_font = draw\_get\_font();
var \_y\_offset = 0;

switch (\_cur\_font)
{
    case ft\_small:
        \_y\_offset = 10;
    break;

    case ft\_medium:
        \_y\_offset = 22;
    break;

    case ft\_big:
        \_y\_offset = 34;
    break;

    default:
        \_y\_offset = 8;
}

draw\_text(room\_width / 2, 200 + \_y\_offset, "MENU");

The above code gets the currently applied font and runs a switch statement on it, applying a different Y offset value depending on the font. It then uses that offset value while drawing some text.