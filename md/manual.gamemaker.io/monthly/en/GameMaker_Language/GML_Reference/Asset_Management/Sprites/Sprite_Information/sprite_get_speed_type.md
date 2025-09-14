---
title: "sprite_get_speed_type"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Sprites/Sprite_Information/sprite_get_speed_type.htm"
converted: "2025-09-14T03:59:41.512Z"
---

# sprite\_get\_speed\_type

This function can be used to retrieve the sprite animation type as defined for the sprite resource in the [Sprite Editor](../../../../../The_Asset_Editors/Sprites.md). The value returned will be one of the following constants:

| Sprite Speed Constant |
| --- |
| Constant | Description |
| spritespeed_framespersecond | The sprite was defined with animation in frames per second. |
| spritespeed_framespergameframe | The sprite was defined with in animation in frames per game frame. |

The following two examples illustrate the difference this can make when calculating animation speeds for the sprite:

-   If you have a sprite that draws 1 frame per _second_ and set the image speed to 0.5 it will draw at 0.5 frames per second. If your game frame rate is 60 frames per second then the sprite will draw 1 frame for every 120 game frames.
-   If you have a sprite that draws 1 frame per _game frame_ and set the image speed to 0.5 it will draw 0.5 frames per game frame. If your game frame rate is 60 frames per second then the sprite will draw 30 frames for every 60 game frames.

You can find out what the speed value used for the sprite animation was using the function [sprite\_get\_speed()](sprite_get_speed.md), and you can set the animation speed _and_ type using the function [sprite\_set\_speed()](../Sprite_Manipulation/sprite_set_speed.md).

#### Syntax:

sprite\_get\_speed\_type(index)

| Argument | Type | Description |
| --- | --- | --- |
| index | Sprite Asset | The index of the sprite to get the animation type of |

#### Returns:

[Sprite Speed Constant](sprite_get_speed_type.md) (see above)

#### Example:

s\_speed = sprite\_get\_speed(sprite\_index);
s\_type = sprite\_get\_speed\_type(sprite\_index);

The above code gets the sprite speed and the sprite animation type and stores them in instance variables for future use.