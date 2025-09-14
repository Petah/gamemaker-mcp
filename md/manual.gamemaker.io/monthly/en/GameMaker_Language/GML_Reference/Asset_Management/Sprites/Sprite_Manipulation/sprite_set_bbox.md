---
title: "sprite_set_bbox"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Sprites/Sprite_Manipulation/sprite_set_bbox.htm"
converted: "2025-09-14T03:59:42.269Z"
---

# sprite\_set\_bbox

This function can be used to set the bounding box values for a sprite. You supply the sprite index to use and then the left, top, right and bottom values for the bounding box positions. The positions are _absolute_ values, where the (0, 0) position corresponds to the top left corner of the sprite, regardless of the offset for the sprite, any "empty" pixels the sprite may have, or where it is being drawn in the room.

NOTE This function affects the sprite **asset** so that all further instances with this sprite will have the same bounding box.

#### Syntax:

sprite\_set\_bbox(ind, left, top, right, bottom);

| Argument | Type | Description |
| --- | --- | --- |
| ind | Sprite Asset | The index of the sprite to set the bounding box on. |
| left | Real | The left side of the bounding box |
| top | Real | The top of the bounding box. |
| right | Real | The right side of the bounding box |
| bottom | Real | The bottom of the bounding box. |

#### Returns

N/A

#### Example:

if (sprite\_get\_bbox\_mode(sprite\_index) == 2)
{
    left = irandom(sprite\_width / 2);
    right = irandom((sprite\_width / 2) + irandom(sprite\_width / 2));
    top = irandom(sprite\_height / 2);
    bottom = irandom((sprite\_height / 2) + irandom(sprite\_height / 2));
    sprite\_set\_bbox(sprite\_index, left, top, right, bottom);
}

The above code will check the bounding box mode of the sprite assigned to the sprite\_index, and if it is set to manual then it will have its bounding box changed.