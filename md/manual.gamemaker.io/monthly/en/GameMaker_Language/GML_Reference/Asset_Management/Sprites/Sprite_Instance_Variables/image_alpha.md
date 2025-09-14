---
title: "image_alpha"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Sprites/Sprite_Instance_Variables/image_alpha.htm"
converted: "2025-09-14T03:59:41.683Z"
---

# image\_alpha

This variable is used to get or to set the alpha value for the sprite. Alpha is always calculated as a value between 0 and 1 where 0 is completely transparent and 1 is completely opaque. Please note that for changes in this variable to be visible, the instance should have either _no_ draw event (and so GameMaker will default draw the sprite) or be drawn using one of the extended drawing functions like [draw\_self](../../../Drawing/Sprites_And_Tiles/draw_self.md) or [draw\_sprite\_ext](../../../Drawing/Sprites_And_Tiles/draw_sprite_ext.md).

#### Syntax:

image\_alpha

#### Returns:

[Real](../../../../GML_Overview/Data_Types.md)

#### Example:

image\_alpha = clamp(image\_alpha - 0.01, 0, 1);

The above code will slowly reduce the image\_alpha until it reaches 0.