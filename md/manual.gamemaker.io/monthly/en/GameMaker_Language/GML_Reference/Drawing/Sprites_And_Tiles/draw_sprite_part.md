---
title: "draw_sprite_part"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Sprites_And_Tiles/draw_sprite_part.htm"
converted: "2025-09-14T03:59:53.764Z"
---

# draw\_sprite\_part

With this function you can draw part of any sprite at a given position within the room. As with [draw\_sprite()](draw_sprite.md) you can specify a sprite and a sub-image for drawing, then you must give the _relative coordinates_ within the sprite of the area to select for drawing. This means that a left position of 0 and a top position of 0 would be the top left corner of the sprite and all further coordinates should be taken from that position. The image below shows an example of how this works:

![draw_sprite_part example](../../../../assets/Images/Scripting_Reference/GML/Reference/Drawing/spr_part.png)You should note that if the texture page permits automatic cropping then this function may not work as expected, since the extra "empty" space around the sprite will have been removed for creating the texture page. To resolve this issue, you will need to set the texture page settings (in the [Texture Group Editor](../../../../Settings/Texture_Groups.md)) to disable the option **Automatic Crop**.

**NOTE** When drawing with this function, the sprite [x offset](../../Asset_Management/Sprites/Sprite_Instance_Variables/sprite_xoffset.md) and [y offset](../../Asset_Management/Sprites/Sprite_Instance_Variables/sprite_yoffset.md) are ignored and the sprite part will be drawn with the top left corner at the specified x / y position in the room.

**NOTE** This function is only useful for **bitmap** sprites and will not work with vector or JSON (Spine) sprites.

NOTE You cannot draw sprites that have [Nine Slice](../../../../The_Asset_Editors/Sprite_Properties/Nine_Slices.md) enabled using this function.

#### Syntax:

draw\_sprite\_part(sprite, subimg, left, top, width, height, x, y);

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

#### Returns:

N/A

#### Example:

draw\_sprite\_part(sprite\_index, image\_index, 4, 0, sprite\_width-16, sprite\_height-16, x, y );

This will draw the instances assigned sprite (sprite\_index) and its current frame of animation (image\_index), however it will shave a 4px margin off the width on both sides, and an 8 pixel margin off the height from the bottom of the original 24x24 pixel sprite.