---
title: "sprite_set_bbox_mode"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Sprites/Sprite_Manipulation/sprite_set_bbox_mode.htm"
converted: "2025-09-14T03:59:42.286Z"
---

# sprite\_set\_bbox\_mode

This function can be used to set the bounding box mode for a sprite. You supply the sprite index and the mode to use, which should be one of the following constants:

| Bounding Box Mode Constant |
| --- |
| Constant | Description |
| bboxmode_automatic | Automatic - The bounding box will be calculated automatically, based on the tolerance setting for the sprite |
| bboxmode_fullimage | Full Image - The bounding box will be set to use the full width and height of the sprite, regardless of the tolerance and "empty" pixels |
| bboxmode_manual | Manual - The bounding box is set manually to user defined values, specified either in sprite_collision_mask along with the mode, or separately in sprite_set_bbox |

NOTE This function affects the sprite **asset** so that all further instances with this sprite will have the same bounding box mode.

#### Syntax:

sprite\_set\_bbox\_mode(ind, mode);

| Argument | Type | Description |
| --- | --- | --- |
| ind | Sprite Asset | The index of the sprite to change the mode of. |
| mode | Bounding Box Mode Constant | The mode to set (a constant). |

#### Returns

N/A

#### Example:

if (sprite\_get\_bbox\_mode(sprite\_index) != bboxmode\_automatic)
{
    sprite\_set\_bbox\_mode(sprite\_index, bboxmode\_automatic);
}

The above code checks the bbox mode for the current sprite and if it's not automatic, then it is set to that value.