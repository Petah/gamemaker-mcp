---
title: "sprite_xoffset"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Sprites/Sprite_Instance_Variables/sprite_xoffset.htm"
converted: "2025-09-14T03:59:41.848Z"
---

# sprite\_xoffset

This **read only** variable returns the local xoffset (the x component of the origin as defined in the sprite editor) of the sprite that has been assigned to the instance. This xoffset is returned in pixels and will be dependent on the [image\_xscale](image_xscale.md), so that (for example) if a square 32x32 sprite is defined as having the x origin at 16, when that sprite is scaled by 2 this variable will return 32. If you need the un-scaled xoffset you should use [sprite\_get\_xoffset()](../Sprite_Information/sprite_get_xoffset.md).

![X Offset Example](../../../../../assets/Images/Scripting_Reference/GML/Reference/Sprites/xoffset_image.png)

#### Syntax:

sprite\_xoffset;

#### Returns:

[Real](../../../../GML_Overview/Data_Types.md)

#### Example:

if (x - sprite\_xoffset < 0)
{
    x = sprite\_xoffset;
}

The above code checks to see if the left edge of the sprite of the instance is outside the room and if it is it moves the instance so that the whole sprite is visible.