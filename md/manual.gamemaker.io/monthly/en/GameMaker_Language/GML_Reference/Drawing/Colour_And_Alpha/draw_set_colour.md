---
title: "draw_set_colour"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Colour_And_Alpha/draw_set_colour.htm"
converted: "2025-09-14T03:59:49.726Z"
---

# draw\_set\_colour

With this function you can set the base draw colour for the game.

This will affect drawing of fonts, forms, primitives and 3D, however it will not affect sprites (drawn [manually](../Sprites_And_Tiles/draw_sprite.md) or by an instance). If any affected graphics are drawn with their own colour values, this value will be ignored.

#### Syntax:

draw\_set\_colour(col);

| Argument | Type | Description |
| --- | --- | --- |
| col | Colour | The colour to set for drawing. |

#### Returns:

N/A

#### Example:

draw\_set\_alpha(0.5);
draw\_set\_colour(c\_black);
draw\_text(x+5, y+5, "LEVEL 1");
draw\_set\_alpha(1);
draw\_set\_colour(c\_white);
draw\_text(x, y, "LEVEL 1");

The above code will draw some text at the specified position with a shadow effect created by modified draw alpha and colour.