---
title: "draw_sprite"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Sprites_And_Tiles/draw_sprite.htm"
converted: "2025-09-14T03:59:53.702Z"
---

# draw\_sprite

This function draws the given sprite and sub-image at a position within the game room. For the sprite you can use the instance variable [sprite\_index](../../Asset_Management/Sprites/Sprite_Instance_Variables/sprite_index.md) to get the current sprite that is assigned to the instance running the code, or you can use any other sprite asset. The same goes for the sub-image, as this can also be set to the instance variable [image\_index](../../Asset_Management/Sprites/Sprite_Instance_Variables/image_index.md) which will set the sub-image to that selected for the current instance sprite (note, that you can draw a different sprite and still use the sub-image value for the current instance), or you can use any other value for this to draw a specific sub-image of the chosen sprite. If the value is larger than the number of sub-images, then GameMaker will automatically loop the number to select the corresponding image (for example, if the sprite being drawn has 5 sub-images numbered 0 to 4 and we set the index value to 7, then the function will draw the third sub-image, numbered 2). Finally, the x and y position is the position within the room that the sprite will be drawn, and it is centered on the sprite [x offset](../../Asset_Management/Sprites/Sprite_Instance_Variables/sprite_xoffset.md) and [y offset](../../Asset_Management/Sprites/Sprite_Instance_Variables/sprite_yoffset.md).

NOTE This function may not work as expected when using skeleton animation sprites, and you may find that the function only draws the first frame of the default pose. You should be using the draw\_skeleton\_\* functions instead.

#### Syntax:

draw\_sprite(sprite, subimg, x, y);

| Argument | Type | Description |
| --- | --- | --- |
| sprite | Sprite Asset | The sprite to draw. |
| subimg | Real | The sub-image (frame) of the sprite to draw (image_index or -1 correlate to the current frame of animation in the object). |
| x | Real | The x coordinate of where to draw the sprite. |
| y | Real | The y coordinate of where to draw the sprite. |

#### Returns:

N/A

#### Example:

draw\_sprite(sprite\_index, image\_index, x, y);
draw\_sprite(spr\_Halo, 0, x, y-32);

This will draw the instances assigned sprite (sprite\_index) with the current sub-image at the x and y position of the instance within the room. It will then draw the first frame of the sprite indexed by "spr\_Halo" at the same x and y position but 32 pixels 'above'.