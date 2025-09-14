---
title: "sprite_get_height"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Sprites/Sprite_Information/sprite_get_height.htm"
converted: "2025-09-14T03:59:41.361Z"
---

# sprite\_get\_height

With this function you can find the height of the base sprite asset, with no transforms, in pixels.

#### Syntax:

sprite\_get\_height(index);

| Argument | Type | Description |
| --- | --- | --- |
| index | Sprite Asset | The index of the sprite to find the height of. |

#### Returns

[Real](../../../../GML_Overview/Data_Types.md)

#### Example:

if (sprite\_height != sprite\_get\_height(sprite\_index))
{
    image\_yscale = 1;
}

The above code checks the height of the sprite as it is in the current instance and if there is a difference between that and the original base sprite, it resets the y axis scale.