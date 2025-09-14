---
title: "sprite_set_offset"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Sprites/Sprite_Manipulation/sprite_set_offset.htm"
converted: "2025-09-14T03:59:42.351Z"
---

# sprite\_set\_offset

This function can be used to set the x and y origin of a sprite, and takes relative values based on the (0,0) position being the upper left corner of the sprite. The following image illustrates this:

![X/Y Offset Example](../../../../../assets/Images/Scripting_Reference/GML/Reference/Sprites/spr_xyoffset.png)

**NOTE** This function affects the sprite **asset** so that all further instances with this sprite will have the same offset.

#### Syntax:

sprite\_set\_offset(ind, xoff, yoff);

| Argument | Type | Description |
| --- | --- | --- |
| ind | Sprite Asset | The index of the sprite to change the offset of. |
| xoff | Real | The x position of the origin. |
| yoff | Real | The y position of the origin. |

#### Returns

N/A

#### Example:

sprite\_assign(spr\_Custom, spr\_Base);
sprite\_set\_offset(spr\_Custom, sprite\_get\_xoffset(spr\_Base), sprite\_get\_yoffset(spr\_Base));

The above code assigns the sprite indexed in "spr\_Base" to the sprite indexed in "spr\_Custom" and then uses the x and y offset values of "spr\_Base" to set the new sprite's origin.