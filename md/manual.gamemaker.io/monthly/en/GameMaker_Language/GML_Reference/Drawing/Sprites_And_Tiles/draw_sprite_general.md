---
title: "draw_sprite_general"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Sprites_And_Tiles/draw_sprite_general.htm"
converted: "2025-09-14T03:59:53.745Z"
---

# draw\_sprite\_general

This function combines the function [draw\_sprite\_ext()](draw_sprite_ext.md) with the function [draw\_sprite\_part()](draw_sprite_part.md), adding in some additional blending options so that each corner of the final sprite part can be blended with an individual colour.

Note that applying colours to corners may not look exactly as you expect due to how sprites are drawn. See the following example, where the image on the left is drawn with a different bottom-left colour, and the image on the right is drawn with a different bottom-right colour:

![](../../../../assets/Images/Scripting_Reference/GML/Reference/Drawing/draw_sprite_general_quirk.png)In each image the gradients do not seamlessly span the whole rectangle and instead seem to be split into halves. This is due to a rectangle actually being made up of two triangles, where the corner colours supplied into this function are applied to each vertex of the two triangles (hence 6 vertices at 3 per triangle). This causes the colours between the vertices to be interpolated for each triangle separately.

**NOTE** Colour blending is only recommended for the HTML5 target when WebGL is enabled, although you can still set the blending colour if it is not enabled and it will blend the sprite as normal. However all blending in this way creates a duplicate sprite which is then stored in the cache and used when required. This is far from optimal and if you use multiple colour changes it will slow down your games performance unless you activate WebGL. If you do not wish to use WebGL, then you can set the sprite cache size to try and limit this should it be necessary using the function [sprite\_set\_cache\_size()](../../Asset_Management/Sprites/Sprite_Manipulation/sprite_set_cache_size_ext.md).

**NOTE** This function may not work as expected when using skeleton animation sprites, and you may find that the function only draws the first frame of the default pose. You should be using the draw\_skeleton\_\* functions instead.

**NOTE** When drawing with this function, the sprite [x offset](../../Asset_Management/Sprites/Sprite_Instance_Variables/sprite_xoffset.md) and [y offset](../../Asset_Management/Sprites/Sprite_Instance_Variables/sprite_yoffset.md) are ignored and the sprite part will be drawn with the top left corner at the specified x / y position in the room.

NOTE You cannot draw sprites that have [Nine Slice](../../../../The_Asset_Editors/Sprite_Properties/Nine_Slices.md) enabled using this function.

#### Syntax:

draw\_sprite\_general(sprite, subimg, left, top, width, height, x, y, xscale, yscale, rot, c1, c2, c3, c4, alpha);

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
| rot | Real | The rotation of the sprite. 0=normal, 90=turned 90 degrees counter-clockwise etc. |
| c1 | Colour | The colour with which to blend the top left area of the sprite. |
| c2 | Colour | The colour with which to blend the top right area of the sprite. |
| c3 | Colour | The colour with which to blend the bottom right area of the sprite. |
| c4 | Colour | The colour with which to blend the bottom left area of the sprite. |
| alpha | Real | The alpha of the sprite (from 0 to 1 where 0 is transparent and 1 opaque). |

#### Returns:

N/A

#### Example:

draw\_sprite\_general(sprite\_index, image\_index, 8, 8, sprite\_width-16, sprite\_height-16, x, y, 2, 0.5, 180, c\_white, c\_white, c\_black, c\_black, 1);

This will draw the instances assigned sprite (sprite\_index) and its current frame of animation (image\_index), however it will shave an 8px margin off all four sides of the sprite. It will be stretched to double its usual width but half its usual height. It will be opaque, and upside down. The top area of the sprite will be blended white and hence normal, but the bottom area will be black, meaning the sprite will go from normal to a silhouette downwards in a smooth gradient.