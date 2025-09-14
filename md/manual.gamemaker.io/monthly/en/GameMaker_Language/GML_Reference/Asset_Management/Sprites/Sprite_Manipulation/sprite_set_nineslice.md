---
title: "sprite_set_nineslice"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Sprites/Sprite_Manipulation/sprite_set_nineslice.htm"
converted: "2025-09-14T03:59:42.335Z"
---

# sprite\_set\_nineslice

This function is used to apply a [Nine Slice struct](../Nine_Slice_Struct.md "The Nine Slice Struct") to a sprite. You supply the sprite index and the Nine Slice struct to apply, which can be retrieved using [sprite\_nineslice\_create()](sprite_nineslice_create.md "sprite_nineslice_create") or [sprite\_get\_nineslice()](../Sprite_Information/sprite_get_nineslice.md "sprite_get_nineslice").

**NOTE** This function affects the sprite **asset** so any changes you make with this function will affect **all** instances that are using this sprite and all future instances too.

#### Syntax:

sprite\_set\_nineslice(ind, nineslice);

| Argument | Type | Description |
| --- | --- | --- |
| ind | Sprite Asset | The index of the sprite to modify |
| nineslice | Nine Slice Struct | The Nine Slice struct to apply |

#### Returns:

N/A

#### Example:

var \_nineslice = sprite\_nineslice\_create();

\_nineslice.enabled = true;
\_nineslice.left = 10;
\_nineslice.right = 10;
\_nineslice.top = 10;
\_nineslice.bottom = 10;

**sprite\_set\_nineslice**(spr\_box\_0, \_nineslice);

The code above creates a new Nine Slice struct, enables it and sets the offsets for the guides. The struct is then applied to a sprite, changing its Nine Slice properties.