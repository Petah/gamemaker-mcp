---
title: "sprite_prefetch_multi"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Sprites/Sprite_Manipulation/sprite_prefetch_multi.htm"
converted: "2025-09-14T03:59:42.174Z"
---

# sprite\_prefetch\_multi

This function can be used to prefetch (place into texture memory) a number of texture pages that contain the sprites given. You supply an array populated with the sprite indices (as defined when you created the sprite asset) and the texture pages that they are on will be loaded into memory. Note that the function will return \-1 if prefetch is not supported for the chosen resource or the target platform is HTML5, or it will return 0 if all worked correctly.

NOTE There is a performance hit as the texture is uploaded to texture memory on most devices, so it's recommended that you call sprite\_prefetch\_multi on any required graphics at the start of a level to avoid any stalls.

**WARNING** This will not work on HTML5 when WebGL is disabled or not supported by the browser. WebGL can be allowed or set to be required in the [HTML5 Game Options](../../../../../Settings/Game_Options/HTML5.md) under **Graphics**.

#### Syntax:

sprite\_prefetch\_multi

| Argument | Type | Description |
| --- | --- | --- |
| array | Array of Sprite Assets | Array with the sprite indices to fetch |

#### Returns:

[Real](../../../../GML_Overview/Data_Types.md) (-1 or 0)

#### Example:

spr\_a\[0\] = spr\_Player\_Aura1;
spr\_a\[1\] = spr\_Player\_Aura2;
spr\_a\[2\] = spr\_Player\_Aura3;
spr\_a\[3\] = spr\_Player\_Aura4;
sprite\_prefetch\_multi(spr\_a);

The above code creates an array where each element holds a sprite index. This array is then used to place those sprite textures into memory.