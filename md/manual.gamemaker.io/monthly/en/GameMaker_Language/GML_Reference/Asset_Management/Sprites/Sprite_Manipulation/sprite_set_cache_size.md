---
title: "sprite_set_cache_size"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Sprites/Sprite_Manipulation/sprite_set_cache_size.htm"
converted: "2025-09-14T03:59:42.304Z"
---

# sprite\_set\_cache\_size

When performing image blending, HTML5 cannot do it dynamically in the same way an executable could be performed. Therefore GameMaker has to temporarily save a blended copy of the image and load it in. This function sets how many blended copies of the given sprite can be cached before old ones are overwritten. Default is 4. This is applied to all sub-images of the sprite.

#### Syntax:

sprite\_set\_cache\_size(ind, max);

| Argument | Type | Description |
| --- | --- | --- |
| ind | Sprite Asset | The index of the sprite to change the cache size of. |
| max | Real | The maximum number of cached copies of the sprite that can be stored. |

#### Returns

N/A

#### Example:

sprite\_set\_cache\_size(sprite0, 2);

This will set the sprite cache of all sub-images of sprite0 to 2 copies.