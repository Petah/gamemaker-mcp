---
title: "draw_set_font"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Text/draw_set_font.htm"
converted: "2025-09-14T03:59:54.720Z"
---

# draw\_set\_font

This function sets the font used for drawing text.

The font must have been added into the [font assets](../../../../The_Asset_Editors/Fonts.md) of the game or have been created using either [font\_add](../../Asset_Management/Fonts/font_add.md), [font\_add\_sprite](../../Asset_Management/Fonts/font_add_sprite.md) or [font\_add\_sprite\_ext](../../Asset_Management/Fonts/font_add_sprite_ext.md).

#### Syntax:

draw\_set\_font(font);

| Argument | Type | Description |
| --- | --- | --- |
| font | Font Asset | The name of the font to use, or -1 for the default font |

#### Returns:

N/A

#### Example:

draw\_set\_colour(c\_blue);
draw\_set\_font(fnt\_game);
draw\_text(200, 200, "Hello World");

The above code will draw the given text using the font referenced in the variable fnt\_game and coloured blue.