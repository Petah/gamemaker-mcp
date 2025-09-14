---
title: "sprite_get_width"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Sprites/Sprite_Information/sprite_get_width.htm"
converted: "2025-09-14T03:59:41.572Z"
---

# sprite\_get\_width

With this function you can find the width of the base resource sprite, with no transforms, in pixels.

#### Syntax:

sprite\_get\_width(index);

| Argument | Type | Description |
| --- | --- | --- |
| index | Sprite Asset | The index of the sprite to find the width of. |

#### Returns

[Real](../../../../GML_Overview/Data_Types.md)

#### Example:

if (sprite\_width != sprite\_get\_width(sprite\_index))
{
    image\_xscale = 1;
}

The above code checks the width of the sprite as it is in the current instance and if there is a difference between that and the original base sprite, it resets the x axis scale.