---
title: "point_in_rectangle"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Movement_And_Collisions/Collisions/point_in_rectangle.htm"
converted: "2025-09-14T04:00:02.978Z"
---

# point\_in\_rectangle

When using this function, you define a rectangular area and GameMaker will work out whether the given point falls within its bounds or not. If the point falls within the defined rectangle the function will return true otherwise the function will return false.

#### Syntax:

point\_in\_rectangle(px, py, x1, y1, x2, y2);

| Argument | Type | Description |
| --- | --- | --- |
| px | Real | The x coordinate of the point to check. |
| py | Real | The y coordinate of the point to check. |
| x1 | Real | The x coordinate of the left side of the rectangle to check. |
| y1 | Real | The y coordinate of the top side of the rectangle to check. |
| x2 | Real | The x coordinate of the right side of the rectangle to check. |
| y2 | Real | The y coordinate of the bottom side of the rectangle to check. |

#### Returns:

[Boolean](../../../GML_Overview/Data_Types.md)

#### Example:

if (point\_in\_rectangle(mouse\_x, mouse\_y, x -10, y - 10, x + 10, y + 10))
{
    audio\_play\_sound(snd\_click, 0, false);
}

This short code checks the mouse position against the defined rectangular area and plays a sound if it falls within the bounds.