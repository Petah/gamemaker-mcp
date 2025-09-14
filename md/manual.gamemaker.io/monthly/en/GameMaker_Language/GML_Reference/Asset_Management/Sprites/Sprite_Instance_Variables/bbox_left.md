---
title: "bbox_left"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Sprites/Sprite_Instance_Variables/bbox_left.htm"
converted: "2025-09-14T03:59:41.642Z"
---

# bbox\_left

This **read only** variable returns the position (along the x-axis) within the room of the left hand bounding box for the instance, where the bounding box is defined by the maximum width and height of the mask for the instance (as set by the [sprite\_index](sprite_index.md) or by the [mask\_index](mask_index.md)). Even when a sprite has a precise collision mask, the bounding box exists and is used for certain things, and so you can use this variable to find it. Please note that when the instance has no sprite assigned the value returned will be the same as the instance X position.

See: [Bounding Boxes](../../../Movement_And_Collisions/Collisions/Collisions.htm#h)

#### Syntax:

bbox\_left;

#### Returns:

[Real](../../../../GML_Overview/Data_Types.md) (integer)

#### Example:

if (bbox\_left < 0)
{
    x = sprite\_xoffset;
}

The above code checks to see if the bounding box of the instance is outside the room and if it is it sets the instance to a new position.