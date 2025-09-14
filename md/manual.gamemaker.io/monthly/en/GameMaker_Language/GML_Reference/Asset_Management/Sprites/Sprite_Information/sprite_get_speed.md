---
title: "sprite_get_speed"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Sprites/Sprite_Information/sprite_get_speed.htm"
converted: "2025-09-14T03:59:41.495Z"
---

# sprite\_get\_speed

This function can be used to retrieve the sprite speed as defined for the sprite resource in the [Sprite Editor](../../../../../The_Asset_Editors/Sprites.md). The value returned can then be used, for example, to calculate how many frames may be drawn for different [image\_speed](../Sprite_Instance_Variables/image_speed.md). Note that the return value will be very different depending on the _type_ of speed that was applied in the Sprite Editor, either _Frames Per Second_, or _Frames Per Game Frame_. The following two examples illustrate this:

-   If you have a sprite that draws 1 frame per _second_ and set the image speed to 0.5 it will draw at 0.5 frames per second. If your game frame rate is 60 frames per second then the sprite will draw 1 frame for every 120 game frames.
-   If you have a sprite that draws 1 frame per _game frame_ and set the image speed to 0.5 it will draw 0.5 frames per game frame. If your game frame rate is 60 frames per second then the sprite will draw 30 frames for every 60 game frames.

You can find out what the type of animation speed was used when defining the sprite using the function [sprite\_get\_speed\_type()](sprite_get_speed_type.md), and you can set the animation speed _and_ type using the function [sprite\_set\_speed()](../Sprite_Manipulation/sprite_set_speed.md).

#### Syntax:

sprite\_get\_speed(index)

| Argument | Type | Description |
| --- | --- | --- |
| index | Sprite Asset | The index of the sprite to get the speed of |

#### Returns:

[Real](../../../../GML_Overview/Data_Types.md)

#### Example:

s\_speed = sprite\_get\_speed(sprite\_index);
s\_type = sprite\_get\_speed\_type(sprite\_index);

The above code gets the sprite speed and the sprite animation type and stores them in instance variables for future use.