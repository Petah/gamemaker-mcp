---
title: "draw_sprite_tiled_ext"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Sprites_And_Tiles/draw_sprite_tiled_ext.htm"
converted: "2025-09-14T03:59:53.877Z"
---

# draw\_sprite\_tiled\_ext

This function will take a sprite and then repeatedly tile it across the whole view (or room if no view is defined), starting from the coordinates that you give in the function and with each tile scaled, colour blended and with the alpha that you define (these properties are the same as those used in [draw\_sprite\_ext()](draw_sprite_ext.md)). This function is for 2D (orthographic) projections only, and will not work correctly when a 3D camera projection is used.

**NOTE** Colour blending is only recommended for the HTML5 target when WebGL is enabled, although you can still set the blending colour if it is not enabled and it will blend the sprite as normal. However all blending in this way creates a duplicate sprite which is then stored in the cache and used when required. This is far from optimal and if you use multiple colour changes it will slow down your games performance unless you activate WebGL. if you do not wish to use WebGL, then you can set the font cache size to try and limit this should it be necessary using the function [sprite\_set\_cache\_size()](../../Asset_Management/Sprites/Sprite_Manipulation/sprite_set_cache_size_ext.md).

NOTE You cannot draw sprites that have [Nine Slice](../../../../The_Asset_Editors/Sprite_Properties/Nine_Slices.md) enabled using this function.

#### Syntax:

draw\_sprite\_tiled\_ext(sprite, subimg, x, y, xscale, yscale, colour, alpha);

| Argument | Type | Description |
| --- | --- | --- |
| sprite | Sprite Asset | The sprite to draw. |
| subimg | Real | The subimg (frame) of the sprite to draw (image_index or -1 correlate to the current frame of animation in the object). |
| x | Real | The x coordinate of where to draw the sprite. |
| y | Real | The y coordinate of where to draw the sprite. |
| xscale | Real | The horizontal scaling of the sprite. A multiplier ' 1 = normal scaling, 0.5 is half etc. |
| yscale | Real | The vertical scaling of the sprite. A multiplier ' 1 = normal scaling, 0.5 is half etc. |
| colour | Colour | The colour with which to blend the sprite. c_white is to display it normally. |
| alpha | Real | The alpha of the sprite (from 0 to 1 where 0 is transparent and 1 opaque). |

#### Returns:

N/A

#### Example:

draw\_sprite\_tiled\_ext(sprite\_index, image\_index, x, y, 2, 2, c\_red, 0.5);

This will draw the instances assigned sprite (sprite\_index) and its current frame of animation (image\_index) at the instances own x and y position, but scaled to twice the normal size, blended red and with half the normal alpha. The sprite will be tiled horizontally and vertically across the view.