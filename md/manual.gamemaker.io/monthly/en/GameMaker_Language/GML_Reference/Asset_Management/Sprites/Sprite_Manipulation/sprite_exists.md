---
title: "sprite_exists"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Sprites/Sprite_Manipulation/sprite_exists.htm"
converted: "2025-09-14T03:59:42.073Z"
---

# sprite\_exists

This function returns whether a sprite with the specified index exists or not in the project being run.

#### Syntax:

sprite\_exists(index);

| Argument | Type | Description |
| --- | --- | --- |
| index | Sprite Asset | The index of the sprite to check. |

#### Returns

[Boolean](../../../../GML_Overview/Data_Types.md)

#### Example:

if sprite\_exists(spr\_array\[0\])
{
    sprite\_index = spr\_array\[0\];
}
else
{
    sprite\_index = spr\_BaseSprite;
}

The above code checks an array to see if it contains a valid sprite index and if so it assigns that sprite to the instance, but if not, it assigns a sprite from the included resources.