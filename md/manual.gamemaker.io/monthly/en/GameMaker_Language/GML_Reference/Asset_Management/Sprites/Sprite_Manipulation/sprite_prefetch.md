---
title: "sprite_prefetch"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Sprites/Sprite_Manipulation/sprite_prefetch.htm"
converted: "2025-09-14T03:59:42.154Z"
---

# sprite\_prefetch

This function can be used to prefetch (place into texture memory) a texture page with the given sprite. You supply the sprite index as defined when you created the sprite asset, and the texture page it is on will be loaded into memory. Note that the function will return \-1 if prefetch is not supported for the chosen resource or the target platform is HTML5, or it will return 0 if all worked correctly.

NOTE There is a performance hit as the texture is uploaded to texture memory on most devices, so it's recommended that you call sprite\_prefetch on any required graphics at the start of a level to avoid any stalls.

**WARNING** This will not work on HTML5 when WebGL is disabled or not supported by the browser. WebGL can be allowed or set to be required in the [HTML5 Game Options](../../../../../Settings/Game_Options/HTML5.md) under **Graphics**.

#### Syntax:

sprite\_prefetch(ind)

| Argument | Type | Description |
| --- | --- | --- |
| ind | Sprite Asset | The sprite index to fetch |

#### Returns:

[Real](../../../../GML_Overview/Data_Types.md) (-1 or 0)

#### Example:

sprite\_prefetch(spr\_Player\_Aura);

The above code will place the referenced sprite into texture memory ready for use.