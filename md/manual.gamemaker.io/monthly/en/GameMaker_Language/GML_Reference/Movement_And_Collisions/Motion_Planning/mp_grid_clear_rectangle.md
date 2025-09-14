---
title: "mp_grid_clear_rectangle"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Movement_And_Collisions/Motion_Planning/mp_grid_clear_rectangle.htm"
converted: "2025-09-14T04:00:03.294Z"
---

# mp\_grid\_clear\_rectangle

With this function you can define an area _in room coordinates_ which will then clear the corresponding cells in the specified MP grid. Even if a cell partially falls within the defined rectangular region it will be cleared.

#### Syntax:

mp\_grid\_clear\_rectangle(id, x1, y1, x2, y2);

| Argument | Type | Description |
| --- | --- | --- |
| id | MP Grid ID | Index of the mp_grid that is to be used |
| x1 | Real | The x coordinate of the left side of the rectangle to check. |
| y1 | Real | The y coordinate of the top side of the rectangle to check. |
| x2 | Real | The x coordinate of the right side of the rectangle to check. |
| y2 | Real | The x coordinate of the bottom side of the rectangle to check. |

#### Returns:

[Boolean](../../../GML_Overview/Data_Types.md)

#### Example:

mp\_grid\_clear\_rectangle(grid, 0, 0, 100, 200);

The above code will mark as free all cells of the mp\_grid indexed in the variable "grid" that fall within the area 0,0 to 100,200.