---
title: "sprite_delete"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Sprites/Sprite_Manipulation/sprite_delete.htm"
converted: "2025-09-14T03:59:42.041Z"
---

# sprite\_delete

This function will delete a sprite from the game, freeing any memory that was reserved for it. This is a very important function for those moments when you need to create and change sprites from external sources (like loading a sprite from a file with [sprite\_add()](sprite_add.md), or duplicating a sprite using [sprite\_duplicate()](sprite_duplicate.md)) and should always be used to remove those assets that are no longer needed by a game, or to clear an indexed asset from a variable before re-assigning another asset to that variable.

IMPORTANT This cannot be used to delete sprites that are included in the game as part of the assets in the Asset Browser.

NOTE Deleting the sprite in the same event after drawing the sprite may cause the sprite to not draw that frame. Work around this by deleting the sprite in a later event or in a different frame where the sprite is not drawn.

This function will return true if the sprite was successfully deleted, or false in case of an invalid sprite (e.g. it was already deleted).

#### Syntax:

sprite\_delete(index);

| Argument | Type | Description |
| --- | --- | --- |
| index | Sprite Asset | The index of the sprite to be deleted. |

#### Returns

[Boolean](../../../../GML_Overview/Data_Types.md)

#### Example:

var spr = sprite\_create\_from\_surface(application\_surface, 0, 0, 32, 32, false, false, 16, 16);
sprite\_merge(spr\_Player, spr);
sprite\_delete(spr);

The above code creates a local variable and then stores the index of the sprite created from the application surface. This sprite is then merged with the asset indexed in the variable "spr\_Player" before being removed from memory again.