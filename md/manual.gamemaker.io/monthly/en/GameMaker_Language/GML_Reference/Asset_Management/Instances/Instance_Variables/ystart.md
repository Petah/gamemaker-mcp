---
title: "ystart"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Instances/Instance_Variables/ystart.htm"
converted: "2025-09-14T03:59:33.721Z"
---

# ystart

This variable stores the initial y position of the instance when it is first created in the room. This is not a read-only variable and can be set as well as read.

#### Syntax:

ystart;

#### Returns:

[Real](../../../../GML_Overview/Data_Types.md) (single precision floating point value)

#### Example:

if (place\_meeting(x, y, obj\_spike))
{
    score -= 100;
    x = xstart;
    y = ystart;
}

The above code will check for a collision with an instance of "obj\_spike" and if there is one, it deducts 100 from the score and moves the instance back to its starting position.