---
title: "sprite_width"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Sprites/Sprite_Instance_Variables/sprite_width.htm"
converted: "2025-09-14T03:59:41.835Z"
---

# sprite\_width

This **read only** variable returns the width of the sprite that has been assigned to the instance. This width is returned in pixels and will be dependent on the [image\_xscale](image_xscale.md). If you need the un-scaled width you should use [sprite\_get\_width()](../Sprite_Information/sprite_get_width.md).

#### Syntax:

sprite\_width;

#### Returns:

[Real](../../../../GML_Overview/Data_Types.md)

#### Example:

if (sprite\_width != sprite\_get\_width(sprite\_index))
{
    image\_xscale = 1;
}

The above code checks the width of the sprite assigned to the instance running the code against the width of the sprite resource and if it is not the same, it resets the image\_xscale to 1,