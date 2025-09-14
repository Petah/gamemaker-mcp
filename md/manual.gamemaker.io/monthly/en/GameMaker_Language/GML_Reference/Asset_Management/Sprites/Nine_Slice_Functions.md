---
title: "Nine Slice Functions"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Sprites/Nine_Slice_Functions.htm"
converted: "2025-09-14T03:59:40.267Z"
---

# Nine Slice Functions

In addition to the Nine Slice section in the [Sprite Editor](../../../../The_Asset_Editors/Sprites.md "The Sprite Editor"), GameMaker provides functions for setting Nine Slice properties for sprites at runtime. Before reading about these functions, it is recommended to read [this page](../../../../The_Asset_Editors/Sprite_Properties/Nine_Slices.md "Nine Slice") to get an understanding of the Nine Slice technique.

The following functions can be used to retrieve and change Nine Slice properties for a sprite asset at runtime:

-   [sprite\_nineslice\_create](Sprite_Manipulation/sprite_nineslice_create.md "sprite_nineslice_create")
-   [sprite\_get\_nineslice](Sprite_Information/sprite_get_nineslice.md "sprite_get_nineslice")
-   [sprite\_set\_nineslice](Sprite_Manipulation/sprite_set_nineslice.md "sprite_set_nineslice")

These functions make use of a Nine Slice struct, and you can read about the contents of that struct on [this page](Nine_Slice_Struct.md "The Nine Slice Struct").

## Drawing Nine Slice Sprites

There are no separate functions for drawing Nine Slice sprites as they work with the existing sprite drawing functions (except for functions that draw only a part of the sprite or distort it, such as [draw\_sprite\_part()](../../Drawing/Sprites_And_Tiles/draw_sprite_part.md) or [draw\_sprite\_pos()](../../Drawing/Sprites_And_Tiles/draw_sprite_pos.md)).

It is recommended to use the [draw\_sprite\_stretched()](../../Drawing/Sprites_And_Tiles/draw_sprite_stretched.md) function to draw a Nine Slice sprite, as it allows you to specify the absolute dimensions of the sprite in pixels and will be easy to use along with Nine Slice. You can also use [draw\_sprite\_ext()](../../Drawing/Sprites_And_Tiles/draw_sprite_ext.md) which instead takes scale values.