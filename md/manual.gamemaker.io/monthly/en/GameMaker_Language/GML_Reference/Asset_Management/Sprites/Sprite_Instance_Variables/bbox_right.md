---
title: "bbox_right"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Sprites/Sprite_Instance_Variables/bbox_right.htm"
converted: "2025-09-14T03:59:41.654Z"
---

# bbox\_right

This **read only** variable returns the position within the room (along the x-axis) of the right hand side of the bounding box for the instance, where the bounding box is defined by the maximum width and height of the mask for the instance (as set by the [sprite\_index](sprite_index.md) or by the [mask\_index](mask_index.md)). Even when a sprite has a precise collision mask, the bounding box exists and is used for certain things, and so you can use this variable to find it. Please note that when the instance has no sprite assigned the value returned will be the same as the instance X position.

See: [Bounding Boxes](../../../Movement_And_Collisions/Collisions/Collisions.htm#h)

#### Syntax:

bbox\_right;

#### Returns:

[Real](../../../../GML_Overview/Data_Types.md) (integer)

#### Example:

if (bbox\_right > room\_width)
{
    x = room\_width - sprite\_xoffset;
}

The above code checks to see if the bounding box of the instance is outside the room and if it is it sets the instance to a new position.