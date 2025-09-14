---
title: "sprite_assign"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Sprites/Sprite_Manipulation/sprite_assign.htm"
converted: "2025-09-14T03:59:41.975Z"
---

# sprite\_assign

This function takes two previously created (or included) sprite indexes, and copies the image from one to the other. In this way you can copy (or "clone") one sprite into another index. Note that _you cannot copy to a game resource_. You have to have created the sprite to be copied to previously using the [sprite\_add()](sprite_add.md) or [sprite\_duplicate()](sprite_duplicate.md) functions.

#### Syntax:

sprite\_assign(index, sprite);

| Argument | Type | Description |
| --- | --- | --- |
| index | Sprite Asset | The index of the sprite to be copied to (ie: overwritten). |
| sprite | Sprite Asset | The sprite to be copied from. |

#### Returns

N/A

#### Example:

if (sprite\_exists(global.Player\_Sprite))
{
    var t\_spr = sprite\_add("player.png", 16, true, true, 0, 0);
    sprite\_assign(global.Player\_Sprite, t\_spr);
    sprite\_delete(t\_spr);
}
else
{
    global.Player\_Sprite = sprite\_add("player.png", 16, true, true, 0, 0);
}

The above code checks to see if the global variable "Player\_Sprite" contains a sprite and if it does it uses sprite\_assign to change it for one that has been loaded from an external file. If it does not contain a sprite one is loaded and its index is stored in that variable.