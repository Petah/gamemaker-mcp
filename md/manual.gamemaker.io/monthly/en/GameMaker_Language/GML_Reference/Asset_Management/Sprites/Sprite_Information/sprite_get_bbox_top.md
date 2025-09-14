---
title: "sprite_get_bbox_top"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Sprites/Sprite_Information/sprite_get_bbox_top.htm"
converted: "2025-09-14T03:59:41.323Z"
---

# sprite\_get\_bbox\_top

This function returns the relative position of the top of the sprite bounding box.

This value is given as a relative value based on the upper left corner of the base sprite asset being (0, 0). it is the same value as can be found in the Sprite Editor for the [collision mask properties](../../../../../The_Asset_Editors/Sprites.md). The image below shows how it is calculated:

![BBox Example](../../../../../assets/Images/Scripting_Reference/GML/Reference/Sprites/spr_bbox.png)

#### Syntax:

sprite\_get\_bbox\_top(ind);

| Argument | Type | Description |
| --- | --- | --- |
| ind | Sprite Asset | The index of the sprite to check. |

#### Returns

[Real](../../../../GML_Overview/Data_Types.md)

#### Example:

var \_ww, \_hh;
\_ww = sprite\_get\_bbox\_right(sprite\_index) - sprite\_get\_bbox\_left(sprite\_index);
\_hh = sprite\_get\_bbox\_bottom(sprite\_index) - sprite\_get\_bbox\_top(sprite\_index);

The above code calculates the width and height of the collision mask based on the relative bounding box side positions.