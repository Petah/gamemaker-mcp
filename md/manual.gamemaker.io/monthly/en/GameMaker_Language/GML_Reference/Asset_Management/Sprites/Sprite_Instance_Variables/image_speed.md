---
title: "image_speed"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Sprites/Sprite_Instance_Variables/image_speed.htm"
converted: "2025-09-14T03:59:41.750Z"
---

# image\_speed

This variable determines the speed in which GameMaker will cycle through the sub-images for the current instance sprite. The speed value given is a _multiplier_, with 1 being the default value, and setting it to 0.5 will half the animation speed - as set in the [Sprite Editor](../../../../../The_Asset_Editors/Sprites.md) or [Image Editor](../../../../../The_Asset_Editors/Image_Editor.md)\- while setting it to 2 will double it. If the sprite used has no sub-images, this variable will have no effect.

#### Syntax:

image\_speed;

#### Returns:

[Real](../../../../GML_Overview/Data_Types.md) (single precision floating point value)

#### Example:

with (instance\_create\_layer(x, y, "Effects", obj\_Explosion))
{
    image\_speed = 0.5;
}

The above code creates an instance of the object "obj\_Explosion" and sets its image\_speed to 0.5 (effectively halving the running speed).