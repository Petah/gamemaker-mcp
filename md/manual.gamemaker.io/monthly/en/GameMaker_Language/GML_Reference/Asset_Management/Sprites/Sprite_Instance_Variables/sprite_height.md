---
title: "sprite_height"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Sprites/Sprite_Instance_Variables/sprite_height.htm"
converted: "2025-09-14T03:59:41.808Z"
---

# sprite\_height

This **read only** variable returns the height of the sprite that has been assigned to the instance. This height is returned in pixels and will be dependent on the [image\_yscale](image_yscale.md). If you need the un-scaled height you should use [sprite\_get\_height()](../Sprite_Information/sprite_get_height.md).

#### Syntax:

sprite\_height;

#### Returns:

[Real](../../../../GML_Overview/Data_Types.md)

#### Example:

if (sprite\_height != sprite\_get\_height(sprite\_index))
{
    image\_yscale = 1;
}

The above code checks the height of the sprite assigned to the instance running the code against the height of the sprite resource and if it is not the same, it resets the image\_yscale to 1,