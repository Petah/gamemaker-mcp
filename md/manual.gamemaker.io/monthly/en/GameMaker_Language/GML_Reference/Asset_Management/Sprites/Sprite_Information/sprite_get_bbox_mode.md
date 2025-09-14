---
title: "sprite_get_bbox_mode"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Sprites/Sprite_Information/sprite_get_bbox_mode.htm"
converted: "2025-09-14T03:59:41.291Z"
---

# sprite\_get\_bbox\_mode

This function will return the current "mode" for the bounding box calculations. You supply the sprite index of the sprite to check, and the function will return one of the constants shown below.

#### Syntax:

sprite\_get\_bbox\_mode(ind);

| Argument | Type | Description |
| --- | --- | --- |
| ind | Sprite Asset | The index of the sprite to check. |

#### Returns

[Bounding Box Mode Constant](../Sprite_Manipulation/sprite_set_bbox_mode.md)

| Constant | Description |
| --- | --- |
| bboxmode_automatic | Automatic - The bounding box will be calculated automatically, based on the tolerance setting for the sprite |
| bboxmode_fullimage | Full Image - The bounding box will be set to use the full width and height of the sprite, regardless of the tolerance and "empty" pixels |
| bboxmode_manual | Manual - The bounding box has been set manually to user-defined values (either in the Sprite Editor, or using the function sprite_set_bbox) |

#### Example:

if (sprite\_get\_bbox\_mode(sprite\_index) != 0)
{
    sprite\_set\_bbox\_mode(sprite\_index, bboxmode\_automatic);
}

The above checks the bbox mode for the current sprite and, if it's not automatic, sets it to that value.