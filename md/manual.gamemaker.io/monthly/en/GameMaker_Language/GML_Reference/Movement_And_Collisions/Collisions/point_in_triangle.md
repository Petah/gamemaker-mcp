---
title: "point_in_triangle"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Movement_And_Collisions/Collisions/point_in_triangle.htm"
converted: "2025-09-14T04:00:02.999Z"
---

# point\_in\_triangle

When using this function, you define a triangular area and GameMaker will work out whether the given point falls within its bounds or not. If the point falls within the defined triangle the function will return true otherwise the function will return false.

#### Syntax:

point\_in\_triangle(px, py, x1, y1, x2, y2, x3, y3);

| Argument | Type | Description |
| --- | --- | --- |
| px | Real | The x coordinate of the point to check. |
| py | Real | The y coordinate of the point to check. |
| x1 | Real | The x coordinate of the first corner of the triangle to check. |
| y1 | Real | The y coordinate of the first corner of the triangle to check. |
| x2 | Real | The x coordinate of the second corner of the triangle to check. |
| y2 | Real | The y coordinate of the second corner of the triangle to check. |
| x3 | Real | The x coordinate of the third corner of the triangle to check. |
| y3 | Real | The y coordinate of the third corner of the triangle to check. |

#### Returns:

[Boolean](../../../GML_Overview/Data_Types.md)

#### Example:

var inst = instance\_nearest(x, y, obj\_Player);
if (instance\_exists(inst))
{
    var x1 = x + lengthdir\_x(100, image\_angle - 45);
    var y1 = y + lengthdir\_y(100, image\_angle - 45);
    var x2 = x + lengthdir\_x(100, image\_angle + 45);
    var y2 = y + lengthdir\_y(100, image\_angle + 45);
    if (point\_in\_triangle(inst.x, inst.y, x, y, x1, y1, x2, y2))
    {
        can\_see = true;
    }
}

The above code uses the point\_in\_triangle function as a "cone of vision" to check for an instance of "obj\_player", setting a variable to true should the objects x/y position fall within the defined triangle.