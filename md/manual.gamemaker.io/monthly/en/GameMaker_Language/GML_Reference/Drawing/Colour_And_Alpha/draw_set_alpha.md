---
title: "draw_set_alpha"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Colour_And_Alpha/draw_set_alpha.htm"
converted: "2025-09-14T03:59:49.710Z"
---

# draw\_set\_alpha

With this function you can set the base draw alpha for the game. This value can be set from 0 to 1 with 0 being fully transparent and 1 being fully opaque (the default value), and will affect all further drawing, including backgrounds, sprites, fonts, primitives and 3D.

Note that if you are drawing any of the assets and supplying an alpha argument as part of the function (for example, when using [draw\_sprite\_ext()](../Sprites_And_Tiles/draw_sprite_ext.md)), then the alpha value set here will be overridden, so drawing a sprite using draw\_sprite\_ext() with an alpha argument of 1 will draw the sprite fully opaque regardless of the alpha set with draw\_set\_alpha() (this will work the same when using [draw\_self()](../Sprites_And_Tiles/draw_self.md) and setting the [image\_alpha](../../Asset_Management/Sprites/Sprite_Instance_Variables/image_alpha.md) of the instance). Also note that when an instance is _default_ drawing (ie: it has a sprite but no Draw Event), then the image\_alpha variable will be clamped to the alpha set with draw\_set\_alpha(), such that an image\_alpha of 1 and a draw alpha of 0.5 will draw the sprite at alpha 0.5, while an image\_alpha of 0.25 and a draw alpha of 0.5 will draw the sprite at 0.25 alpha.

#### Syntax:

draw\_set\_alpha(alpha);

| Argument | Type | Description |
| --- | --- | --- |
| alpha | Real | The alpha to set (between 0 and 1) |

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