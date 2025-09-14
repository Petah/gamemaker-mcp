---
title: "draw_sprite_ext"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Sprites_And_Tiles/draw_sprite_ext.htm"
converted: "2025-09-14T03:59:53.720Z"
---

# draw\_sprite\_ext

This function will draw the given sprite as in the function [draw\_sprite()](draw_sprite.md) but with additional options to change the scale, blending, rotation and alpha of the sprite being drawn. Changing these values does _not_ modify the resource in any way (only how it is drawn), and you can use any of the available [sprite variables](../../Asset_Management/Sprites/Sprite_Instance_Variables/Sprite_Instance_Variables.md) instead of direct values for all the arguments in the function. The image below illustrates how different values affect the drawing of the sprite:

![sraw_sprite_ext examples](../../../../assets/Images/Scripting_Reference/GML/Reference/Drawing/spr_ext.png)

If used with a Nine Slice enabled sprite, it will retain any detail after scaling depending on your Nine Slice settings in the [Sprite Editor](../../../../The_Asset_Editors/Sprites.md). See the page on [Nine Slice](../../../../The_Asset_Editors/Sprite_Properties/Nine_Slices.md) for more information.

**NOTE**: Colour blending is only recommended for the HTML5 target when WebGL is enabled, although you can still set the blending colour if it is not enabled and it will blend the sprite as normal. However all blending in this way creates a duplicate sprite which is then stored in the cache and used when required. This is far from optimal and if you use multiple colour changes it will slow down your games performance unless you activate WebGL. if you do not wish to use WebGL, then you can set the font cache size to try and limit this should it be necessary using the function [sprite\_set\_cache\_size()](../../Asset_Management/Sprites/Sprite_Manipulation/sprite_set_cache_size_ext.md).

**NOTE**: This function may not work as expected when using skeleton animation sprites, and you may find that the function only draws the first frame of the default pose. You should be using the draw\_skeleton\_\* functions instead.

#### Syntax:

draw\_sprite\_ext( sprite, subimg, x, y, xscale, yscale, rot, colour, alpha );

| Argument | Type | Description |
| --- | --- | --- |
| sprite | Sprite Asset | The sprite to draw. |
| subimg | Real | The subimg (frame) of the sprite to draw (image_index or -1 correlate to the current frame of animation in the object). |
| x | Real | The x coordinate of where to draw the sprite. |
| y | Real | The y coordinate of where to draw the sprite. |
| xscale | Real | The horizontal scaling of the sprite, as a multiplier: 1 = normal scaling, 0.5 is half etc... |
| yscale | Real | The vertical scaling of the sprite as a multiplier: 1 = normal scaling, 0.5 is half etc... |
| rot | Real | The rotation of the sprite. 0=right way up, 90=rotated 90 degrees counter-clockwise etc... |
| colour | Colour | The colour with which to blend the sprite. c_white is to display it normally. |
| alpha | Real | The alpha of the sprite (from 0 to 1 where 0 is transparent and 1 opaque). |

#### Returns:

N/A

#### Example:

draw\_sprite\_ext(sprite\_index, image\_index, x, y, image\_xscale, image\_yscale, image\_angle, image\_blend, image\_alpha);

This will draw the instances assigned sprite with all its default values (essentially the same as using draw\_self).