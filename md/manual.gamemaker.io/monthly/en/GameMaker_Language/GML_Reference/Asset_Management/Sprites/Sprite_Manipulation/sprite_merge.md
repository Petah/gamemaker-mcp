---
title: "sprite_merge"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Sprites/Sprite_Manipulation/sprite_merge.htm"
converted: "2025-09-14T03:59:42.122Z"
---

# sprite\_merge

This function will merge the sprite indexed in argument 1 ("ind2") with that which is indexed in argument 0 ("ind1"). The images themselves are **NOT** merged together, but rather the image indices are merged, with the sub images from sprite "ind2" appended onto those of sprite "ind1", ie: they are added on at the end. Note that if the sprites are different sizes, then the appended sprites are stretched to fit the image size for "ind1".

This change is permanent, and from the moment you use this function until the game is closed or the sprite deleted, the sprite that is being merged into will be changed, however the sprite that it is being merged with will remain the same.

NOTE Neither the image asset that is being merged into, nor the image asset that is for merging, can be one of the original game resources. You must use [sprite\_duplicate()](sprite_duplicate.md) first to create two new resources (if you are merging included game assets) and then merge those.

NOTE This function is only useful for **bitmap** sprites and will not work with SWF or JSON (Spine) sprites.

#### Syntax:

sprite\_merge(ind1, ind2);

| Argument | Type | Description |
| --- | --- | --- |
| ind1 | Sprite Asset | The index of the sprite to merge. |
| ind2 | Sprite Asset | The index of the sprite that ind1 is to be merged with. |

#### Returns

N/A

#### Example:

var tspr = array\_create(2);
tspr\[0\] = sprite\_add(working\_directory + "Sprite Assets/explode1.png", 16, true, true, 0, 0);
tspr\[1\] = sprite\_duplicate(spr\_Explosion);
sprite\_merge(tspr\[0\], tspr\[1\]);
sprite\_index = tspr\[0\];
sprite\_delete(tspr\[1\]);

The above code loads a sprite into a local variable then merges it with another sprite that has been duplicated. Finally the merged sprite is assigned to the instance sprite\_index while the loaded sprite is removed to free the memory it uses. Note that at some point after this operation, like in the Destroy or Room End events, you will also need to use [sprite\_delete()](sprite_delete.md) to remove the merged sprite from memory too.