---
title: "sprite_duplicate"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Sprites/Sprite_Manipulation/sprite_duplicate.htm"
converted: "2025-09-14T03:59:42.059Z"
---

# sprite\_duplicate

This function will return a handle to a newly created sprite that is a duplicate (copy) of the one input as the "index" argument. If the function fails, -1 is returned. This function _must_ be used to copy any sprites from the original assets before any transformations can be done on them. For example, if you wish to change the bounding box for a sprite, or set its alpha from another sprite, you must first duplicate it, then perform the operation on the duplicated sprite and use that. A duplicated sprite will be places on its own unique texture page when created, meaning that duplicating multiple sprites will create multiple texture pages and have an impact on performance, so use this function only when necessary.

**NOTE** When you duplicate a sprite in GameMaker you must remember to remove it again (with [sprite\_delete](sprite_delete.md)) when no longer needed, otherwise there is risk of a memory leak which will slow down and eventually crash your game.

#### Syntax:

sprite\_duplicate(index)

| Argument | Type | Description |
| --- | --- | --- |
| index | Sprite Asset | The sprite to duplicate |

#### Returns

[Sprite Asset](../../../../../The_Asset_Editors/Sprites.md)

#### Example:

new\_sprite = sprite\_duplicate(sprite\_index);

The above code duplicates the sprite currently being used as the [sprite\_index](../Sprite_Instance_Variables/sprite_index.md) of the instance and stores the handle of this new sprite in a variable new\_sprite.