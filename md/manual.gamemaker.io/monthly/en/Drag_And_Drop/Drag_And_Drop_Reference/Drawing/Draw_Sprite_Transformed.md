---
title: "Draw Sprite Transformed"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Drawing/Draw_Sprite_Transformed.htm"
converted: "2025-09-14T03:59:25.158Z"
---

# ![Draw Sprite Transformed Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Drawing/i_Drawing_Draw_Sprite_Transformed.png) Draw Sprite Transformed

This function will draw the given sprite similar to the action [Draw Sprite](Draw_Sprite.md) but with additional options to change the scale, blending, rotation and frame of the sprite being drawn. Changing these values does _not_ modify the resource in any way (only how it is drawn), and you can use any of the available [sprite property variables](../Instance/Set_Instance_Variable.md) instead of direct values for all the arguments in the function. The image below illustrates how different values affect the drawing of the sprite:

![Transformed Sprite Examples](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Drawing/spr_ext.png)

NOTE Colour blending is only recommended for the HTML5 target when WebGL is enabled, although you can still set the blending colour if it is not enabled and it will blend the sprite as normal. However all blending in this way creates a duplicate sprite which is then stored in the cache and used when required. This is far from optimal and if you use multiple colour changes it will slow down your games performance unless you activate WebGL. if you do not wish to use WebGL, then you can set the font cache size to try and limit this should it be necessary using the function [sprite\_set\_cache\_size()](../../../GameMaker_Language/GML_Reference/Asset_Management/Sprites/Sprite_Manipulation/sprite_set_cache_size.md).

NOTE This action is only for use in the various [Draw Events](../../../The_Asset_Editors/Object_Properties/Draw_Events.md), and will not draw anything if used elsewhere.

#### Action Syntax:

![Draw Sprite Transformed Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Drawing/a_Drawing_Draw_Sprite_Transformed.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| Sprite | The sprite to draw |
| Frame | The sprite frame to draw (use the built-in variable image_index for the current frame) |
| X | The x position to draw at within the room |
| Y | The y position to draw at within the room |
| Scale X | The scale factor for the X axis (use the built-in variable image_xscale for the current X scale) |
| Scale Y | The scale factor for the Y axis (use the built-in variable image_yscale for the current Y scale) |
| Rotation | The draw angle for the sprite (from 0 to 360, rotating anticlockwise where 0 is to the right - use the built-in variable image_angle for the current rotation) |
| Colour | The colour to blend with the sprite (default is white, and you can use the built-in variable image_blend for the current colour) |

#### Example:

![Draw Sprite Transformed Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Drawing/e_Drawing_Draw_Sprite_Transformed.png)The above action block code checks a variable and if it is set to true then the sprite is drawn with random scaling along the x and y axis and blended with the colour red, otherwise the sprite is drawn using the default transforms.