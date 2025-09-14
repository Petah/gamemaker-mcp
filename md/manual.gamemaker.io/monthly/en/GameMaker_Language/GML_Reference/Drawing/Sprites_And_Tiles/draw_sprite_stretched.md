---
title: "draw_sprite_stretched"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Sprites_And_Tiles/draw_sprite_stretched.htm"
converted: "2025-09-14T03:59:53.824Z"
---

# draw\_sprite\_stretched

This function simply takes a sprite resource and stretches it over the given width and height so that it occupies that area. As with [draw\_sprite()](draw_sprite.md) you can specify a sprite and a sub-image for drawing, then the x / y position in the room for the sprite to be drawn at and finally a width and a height (which must be pixel values). The image below shows the result of this function with different sets of arguments:

![draw_sprite_stretched example](../../../../assets/Images/Scripting_Reference/GML/Reference/Drawing/spr_stretch.png)

NOTE When drawing with this function, the sprite [x offset](../../Asset_Management/Sprites/Sprite_Instance_Variables/sprite_xoffset.md) and [y offset](../../Asset_Management/Sprites/Sprite_Instance_Variables/sprite_yoffset.md) (or origins) are ignored and the sprite is drawn with the top-left corner at the specified x/y position in the room.

If used with a Nine Slice enabled sprite, it will retain any detail after scaling depending on your Nine Slice settings in the [Sprite Editor](../../../../The_Asset_Editors/Sprites.md). See the page on [Nine Slice](../../../../The_Asset_Editors/Sprite_Properties/Nine_Slices.md) for more information.

#### Syntax:

draw\_sprite\_stretched(sprite, subimg, x, y, w, h);

| Argument | Type | Description |
| --- | --- | --- |
| sprite | Sprite Asset | The sprite to draw. |
| subimg | Real | The subimg (frame) of the sprite to draw (image_index or -1 correlate to the current frame of animation in the object). |
| x | Real | The x coordinate of where to draw the sprite. |
| y | Real | The y coordinate of where to draw the sprite. |
| w | Real | The width of the area the stretched sprite will occupy. |
| h | Real | The height of the area the stretched sprite will occupy. |

#### Returns:

N/A

#### Example:

draw\_sprite\_stretched(sprite\_index, image\_index, x, y, sprite\_width, sprite\_height / 2);

This will draw the instance's assigned sprite and its sub-image with the left corner at the instance x/y position. Its width is set to the same as the sprite, and the height is the sprite height divided by two.