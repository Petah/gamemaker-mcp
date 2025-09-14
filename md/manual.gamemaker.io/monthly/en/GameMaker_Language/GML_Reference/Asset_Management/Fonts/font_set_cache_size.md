---
title: "font_set_cache_size"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Fonts/font_set_cache_size.htm"
converted: "2025-09-14T03:59:33.257Z"
---

# font\_set\_cache\_size

When performing image blending and colouring, HTML5 cannot do it dynamically in the same way an executable could be performed. Therefore GameMaker has to temporarily save a blended copy of the images and load them in when needed. This function sets how many blended copies of the given font can be cached before old ones are overwritten. The default value is 4.

**NOTE** for sprite fonts you should be using the equivalent function for sprites, [sprite\_set\_cache\_size()](../Sprites/Sprite_Manipulation/sprite_set_cache_size.md).

#### Syntax:

font\_set\_cache\_size(ind, max);

| Argument | Type | Description |
| --- | --- | --- |
| ind | Font Asset | The index of the font to change the cache size of. |
| max | Real | The maximum number of cached copies of the font that can be stored. |

#### Returns:

N/A

#### Example:

font\_set\_cache\_size(fnt\_MainMenu, 2);

This will set the font cache of the font indexed in the variable "fnt\_MainMenu" to 2 copies.