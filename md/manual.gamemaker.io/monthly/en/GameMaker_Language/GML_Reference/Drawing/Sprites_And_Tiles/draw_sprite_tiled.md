---
title: "draw_sprite_tiled"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Sprites_And_Tiles/draw_sprite_tiled.htm"
converted: "2025-09-14T03:59:53.861Z"
---

# draw\_sprite\_tiled

This function will take a sprite and then repeatedly tile it across the whole view (or room if no view is defined), starting from the coordinates that you give in the function. Tiling is based on the width and height of the sprite as defined by the [sprite variables](../../Asset_Management/Sprites/Sprite_Instance_Variables/Sprite_Instance_Variables.md) of the instance running the code. This function is for 2D (orthographic) projections only, and will not work correctly when a 3D camera projection is used.

NOTE You cannot draw sprites that have [Nine Slice](../../../../The_Asset_Editors/Sprite_Properties/Nine_Slices.md) enabled using this function.

#### Syntax:

draw\_sprite\_tiled(sprite, subimg, x, y);

| Argument | Type | Description |
| --- | --- | --- |
| sprite | Sprite Asset | The sprite to draw. |
| subimg | Real | The subimg (frame) of the sprite to draw (image_index or -1 correlate to the current frame of animation in the object). |
| x | Real | The x coordinate of where to draw the sprite. |
| y | Real | The y coordinate of where to draw the sprite. |

#### Returns:

N/A

#### Example:

draw\_sprite\_tiled(sprite\_index, image\_index, x, y);

This will draw the instances assigned sprite (sprite\_index) and its current frame of animation (image\_index) at the instances own x and y position, and tiled horizontally and vertically across the view.