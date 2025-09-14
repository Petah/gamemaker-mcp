---
title: "point_in_circle"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Movement_And_Collisions/Collisions/point_in_circle.htm"
converted: "2025-09-14T04:00:02.962Z"
---

# point\_in\_circle

When using this function, you define a circular area and GameMaker will work out whether the given point falls within its bounds or not. If the point falls within the defined circle the function will return true otherwise the function will return false.

#### Syntax:

point\_in\_circle(px, py, x1, y1, rad);

| Argument | Type | Description |
| --- | --- | --- |
| px | Real | The x coordinate of the point to check. |
| py | Real | The y coordinate of the point to check. |
| x1 | Real | The x coordinate of the circle centre. |
| y1 | Real | The y coordinate of the circle centre. |
| rad | Real | The radius of the circle. |

#### Returns:

[Boolean](../../../GML_Overview/Data_Types.md)

#### Example:

if (point\_in\_circle(mouse\_x, mouse\_y, x, y, 16))
{
    over = true;
}
else
{
    over = false;
}

The above code uses the point\_in\_circle function to check if the mouse position falls within the defined circular area, setting the variable "over" to true if it does, or false otherwise.