---
title: "distance_to_point"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Maths_And_Numbers/Angles_And_Distance/distance_to_point.htm"
converted: "2025-09-14T04:00:00.741Z"
---

# distance\_to\_point

This function calculates the distance from the edge of the bounding box of the calling instance to the specified x/y position in the room, with the return value being in pixels. Note that if the calling object have no sprite or no mask defined, the results will be incorrect.

#### **Syntax:**

distance\_to\_point(x, y);

| Argument | Type | Description |
| --- | --- | --- |
| x | Real | The x position to check. |
| y | Real | The y position to check. |

#### Returns:

[Real](../../../../../../../GameMaker_Language/GML_Overview/Data_Types.md)

#### Example:

if (distance\_to\_point(obj\_Player.x, obj\_Player.y) < range)
{
    canshoot = true;
}

The above code will check for the distance to the player object x/y position and if it is less than the value stored in the variable "range" the variable "canshoot" is set to true.