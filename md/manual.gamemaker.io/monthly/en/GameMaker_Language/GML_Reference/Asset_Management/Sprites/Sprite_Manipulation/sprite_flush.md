---
title: "sprite_flush"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Sprites/Sprite_Manipulation/sprite_flush.htm"
converted: "2025-09-14T03:59:42.086Z"
---

# sprite\_flush

This function removes the texture page for the given sprite from texture memory (VRAM). The texture will stay in RAM after being flushed.

You supply the sprite (as defined when creating the sprite) and the texture page it is assigned to will be removed from texture memory. The function will return \-1 if flush is not supported for the chosen asset, or it will return 0 if all worked correctly.

NOTE If the texture page is used elsewhere in the room (by another instance sprite, a background, etc.) you may get a minor performance hit as the page is immediately reloaded, so care should be taken when using this function.

**WARNING** This will not work on HTML5 when WebGL is disabled or not supported by the browser. WebGL can be allowed or set to be required in the [HTML5 Game Options](../../../../../Settings/Game_Options/HTML5.md) under **Graphics**.

#### Syntax:

sprite\_flush(ind)

| Argument | Type | Description |
| --- | --- | --- |
| ind | Sprite Asset | The sprite asset to flush |

#### Returns:

[Real](../../../../GML_Overview/Data_Types.md) (-1 or 0)

#### Example:

sprite\_flush(spr\_Player\_Aura);

The above code flushes the sprite spr\_Player\_Aura from memory.