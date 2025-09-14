---
title: "draw_sprite_part_ext"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Sprites_And_Tiles/draw_sprite_part_ext.htm"
converted: "2025-09-14T03:59:53.784Z"
---

# draw\_sprite\_part\_ext

This function will draw a part of the chosen sprite at the given position following the same rules as per [draw\_sprite\_part()](draw_sprite_part.md), only now you can scale the part, blend a colour with it, or change its alpha when drawing it to the screen (the same as when drawing a sprite with [draw\_sprite\_ext()](draw_sprite_ext.md)). You should note that if the texture page permits automatic cropping then this function may not work as expected, since the extra "empty" space around the sprite will have been removed for creating the texture page. To resolve this issue, you will need to set the texture page settings (in the [Texture Group Editor](../../../../Settings/Texture_Groups.md)) to disable the **Automatic Crop**.

**NOTE** When drawing with this function, the sprite [x offset](../../Asset_Management/Sprites/Sprite_Instance_Variables/sprite_xoffset.md) and [y offset](../../Asset_Management/Sprites/Sprite_Instance_Variables/sprite_yoffset.md) are ignored and the sprite part will be drawn with the top left corner at the specified x / y position in the room.

**NOTE** This function is only useful for **bitmap** sprites and will not work with vector or JSON (Spine) sprites.

**NOTE** Colour blending is only recommended for the HTML5 target when WebGL is enabled, although you can still set the blending colour if it is not enabled and it will blend the sprite as normal. However all blending in this way creates a duplicate sprite which is then stored in the cache and used when required. This is far from optimal and if you use multiple colour changes it will slow down your games performance unless you activate WebGL. if you do not wish to use WebGL, then you can set the font cache size to try and limit this should it be necessary using the function [sprite\_set\_cache\_size()](../../Asset_Management/Sprites/Sprite_Manipulation/sprite_set_cache_size_ext.md).

NOTE You cannot draw sprites that have [Nine Slice](../../../../The_Asset_Editors/Sprite_Properties/Nine_Slices.md) enabled using this function.

#### Syntax:

draw\_sprite\_part\_ext(sprite, subimg, left, top, width, height, x, y, xscale, yscale, colour, alpha);

| Argument | Type | Description |
| --- | --- | --- |
| sprite | Sprite Asset | The sprite to draw. |
| subimg | Real | The subimg (frame) of the sprite to draw (image_index or -1 correlate to the current frame of animation in the object). |
| left | Real | The x position on the sprite of the top left corner of the area to draw. |
| top | Real | The y position on the sprite of the top left corner of the area to draw. |
| width | Real | The width of the area to draw. |
| height | Real | The height of the area to draw. |
| x | Real | The x coordinate of where to draw the sprite. |
| y | Real | The y coordinate of where to draw the sprite. |
| xscale | Real | The horizontal scaling of the sprite, as a multiplier: 1 = normal scaling, 0.5 is half etc... |
| yscale | Real | The vertical scaling of the sprite, as a multiplier: 1 = normal scaling, 0.5 is half etc... |
| colour | Colour | The colour with which to blend the sprite. c_white is to display it normally. |
| alpha | Real | The alpha of the sprite (from 0 to 1 where 0 is transparent and 1 opaque). |

#### Returns:

N/A

#### Example:

draw\_sprite\_part\_ext(sprite\_index, image\_index, 8, 8, sprite\_width-16, sprite\_height-16, x, y, 2, 0.5, c\_black, 1);

This will draw the instances assigned sprite (sprite\_index) and its current frame of animation (image\_index), however it will shave an 8px margin off all four sides of the sprite. It will then be stretched to double its usual width but half its usual height, and although the alpha is still 1, it will be blended with black (turning it into a silhouette).