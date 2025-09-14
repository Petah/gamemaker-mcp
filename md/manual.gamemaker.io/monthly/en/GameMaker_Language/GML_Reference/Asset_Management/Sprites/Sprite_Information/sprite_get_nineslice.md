---
title: "sprite_get_nineslice"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Sprites/Sprite_Information/sprite_get_nineslice.htm"
converted: "2025-09-14T03:59:41.464Z"
---

# sprite\_get\_nineslice

This function returns the [Nine Slice struct](../Nine_Slice_Struct.md) for a sprite, containing all its Nine Slice properties as set in the [Sprite Editor](../../../../../The_Asset_Editors/Sprites.md "The Sprite Editor") or using [sprite\_set\_nineslice()](../Sprite_Manipulation/sprite_set_nineslice.md "sprite_set_ninceslice"). The contents of this struct are detailed on [this page](../Nine_Slice_Struct.md "The Nine Slice Struct").

If the supplied sprite does not have a Nine Slice struct assigned to it, a new struct with default Nine Slice properties will be created for the sprite and returned.

Changing any values in this struct **will** modify the Nine Slice properties of the original sprite, affecting any future draw calls made with that sprite.

#### Syntax:

sprite\_get\_nineslice(ind);

| Argument | Type | Description |
| --- | --- | --- |
| ind | Sprite Asset | The index of the sprite from which the Nine Slice struct will be retrieved |

#### Returns:

[Nine Slice Struct](../Nine_Slice_Struct.md) (or -1 if the sprite doesn't exist)

#### Example:

var \_box\_nineslice = **sprite\_get\_nineslice**(spr\_box\_0);

\_box\_nineslice.enabled = true;
\_box\_nineslice.left = 10;
\_box\_nineslice.right = 10;
\_box\_nineslice.top = 10;
\_box\_nineslice.bottom = 10;

The code above retrieves the Nine Slice struct from a sprite, enables Nine Slicing for it and sets the guide offsets.