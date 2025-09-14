---
title: "sprite_yoffset"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Sprites/Sprite_Instance_Variables/sprite_yoffset.htm"
converted: "2025-09-14T03:59:41.866Z"
---

# sprite\_yoffset

This **read only** variable returns the local yoffset (the y component of the origin as defined in the sprite editor) of the sprite that has been assigned to the instance. This yoffset is returned in pixels and will be dependent on the [image\_yscale](image_yscale.md), so that (for example) if a square 32x32 sprite is defined as having the y origin at 16, when that sprite is scaled by 2 this variable will return 32. If you need the un-scaled yoffset you should use [sprite\_get\_yoffset()](../Sprite_Information/sprite_get_yoffset.md).

![Y Offset Example](../../../../../assets/Images/Scripting_Reference/GML/Reference/Sprites/yoffset_image.png)

#### Syntax:

sprite\_yoffset;

#### Returns:

[Real](../../../../GML_Overview/Data_Types.md)

#### Example:

if (y - sprite\_yoffset < 0)
{
    y = sprite\_yoffset;
}

The above code checks to see if the top edge of the sprite of the instance is outside the room and if it is it moves the instance so that the whole sprite is visible.