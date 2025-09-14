---
title: "draw_sprite_pos"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Sprites_And_Tiles/draw_sprite_pos.htm"
converted: "2025-09-14T03:59:53.805Z"
---

# draw\_sprite\_pos

With this function you can draw a sprite distorted over the area defined by the four corner coordinates. The first two arguments are the sprite to draw and the sub-image of the sprite (the same as in the function [draw\_sprite()](draw_sprite.md)) but the next ones are those that define the position of each of the four corners of the **bounding box** of the given sprite. These should be given in _clockwise_ order, so the first coordinate is the top left, then the top right, then bottom right and finally the bottom left. You can also set a value for the alpha of the sprite to draw it with transparency. The image below illustrates how this function works:

![draw_sprite_pos example](../../../../assets/Images/Scripting_Reference/GML/Reference/Drawing/draw_sprite_pos.png)

**WARNING** The image above is only for illustrative purposes, and if you use this function on a sprite, you will get different results and may experience texture "shearing" due to the way that a sprite is constructed from a quad of primitives.

**NOTE** This function is only useful for **bitmap** sprites and will not work with vector or JSON (Spine) sprites.

**NOTE** When using this function, you should have the [Automatically Crop](../../../../Settings/Texture_Groups.md) setting disabled for texture pages.

NOTE You cannot draw sprites that have [Nine Slice](../../../../The_Asset_Editors/Sprite_Properties/Nine_Slices.md) enabled using this function.

#### Syntax:

draw\_sprite\_pos(sprite, subimg, x1, y1, x2, y2, x3, y3, x4, y4, alpha);

| Argument | Type | Description |
| --- | --- | --- |
| sprite | Sprite Asset | The sprite to draw. |
| subimg | Real | The subimg (frame) of the sprite to draw (image_index or -1 correlate to the current frame of animation in the object). |
| x1 | Real | The first x coordinate. |
| y1 | Real | The first y coordinate. |
| x2 | Real | The second x coordinate. |
| y2 | Real | The second y coordinate. |
| x3 | Real | The third x coordinate. |
| y3 | Real | The third y coordinate. |
| x4 | Real | The fourth x coordinate. |
| y4 | Real | The fourth y coordinate. |
| alpha | Real | The alpha of the sprite (from 0 to 1 where 0 is transparent and 1 opaque). |

#### Returns:

N/A

#### Example:

draw\_sprite\_pos(sprite\_index, image\_index, x - 100, y - 50, x - 50, y +150, x + 100, y + 200, x + 100, y, 1);

The above code will draw the sprite associated with the instance running the code distorted around the x / y position of the instance and with a fully opaque alpha.