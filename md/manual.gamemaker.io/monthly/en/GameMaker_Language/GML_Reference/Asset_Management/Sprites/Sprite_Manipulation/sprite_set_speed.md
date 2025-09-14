---
title: "sprite_set_speed"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Sprites/Sprite_Manipulation/sprite_set_speed.htm"
converted: "2025-09-14T03:59:42.371Z"
---

# sprite\_set\_speed

This function can be used to set the base animation speed and type as for the sprite resource. This is normally set in the [Sprite Editor](../../../../../The_Asset_Editors/Sprites.md), but there may be moments when you are required to set this manually for a given sprite resource. You need to supply the sprite index to set, the animation speed and the type of animation speed to apply. The animation speed type can be any one of the following constants:

| Constant | Description |
| --- | --- |
| spritespeed_framespersecond | The sprite was defined with animation in frames per second. |
| spritespeed_framespergameframe | The sprite was defined with in animation in frames per game frame. |

Selecting the type of speed to use to calculate animations is very important as there is a huge difference between the two options. The following two examples illustrate this difference:

-   If you have a sprite that draws 1 frame per _second_ and set the image speed to 0.5 it will draw at 0.5 frames per second. If your game frame rate is 60 frames per second then the sprite will draw 1 frame for every 120 game frames.
-   If you have a sprite that draws 1 frame per _game frame_ and set the image speed to 0.5 it will draw 0.5 frames per game frame. If your game frame rate is 60 frames per second then the sprite will draw 30 frames for every 60 game frames.

You can find out what the speed value used for the sprite animation was using the function [sprite\_get\_speed()](../Sprite_Information/sprite_get_speed.md), and you can get the animation speed type using [sprite\_get\_speed\_type()](../Sprite_Information/sprite_get_speed_type.md).

**IMPORTANT!** This function will affect the sprite **resource** so any changes you make with this function will affect **all** instances that are using the sprite and all future instances too.

#### Syntax:

sprite\_set\_speed(index, speed, type)

| Argument | Type | Description |
| --- | --- | --- |
| index | Sprite Asset | The index of the sprite to set the animation speed of |
| speed | Real | The speed value to set |
| type | Sprite Speed Constant | The speed type to use |

#### Returns:

[Constant](../../../../GML_Overview/Variables/Constants.md) (see above)

#### Example:

sprite\_set\_speed(sprite\_index, 10, spritespeed\_framespersecond);

The above code sets the base animation speed for the sprite assigned to the instance to 10 frames per second.