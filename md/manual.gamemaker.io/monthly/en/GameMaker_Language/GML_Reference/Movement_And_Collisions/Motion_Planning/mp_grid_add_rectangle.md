---
title: "mp_grid_add_rectangle"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Movement_And_Collisions/Motion_Planning/mp_grid_add_rectangle.htm"
converted: "2025-09-14T04:00:03.248Z"
---

# mp\_grid\_add\_rectangle

This function asks you to define a rectangle within the room, and then it marks all MP grid cells "touch" that rectangle as being forbidden, meaning that the path-finding functions cannot cross them. The image below illustrates how this works:

![Add rectangle example](https://manual.gamemaker.io/monthly/en/assets/Images/Scripting_Reference/GML/Reference/Movement_Collisions/mp_grid_add_rectangle_image.png)As you can see, the rectangle defined by (50, 90) to (200, 180) marks all the equivalent MP grid cells that it touches as being forbidden.

#### Syntax:

mp\_grid\_add\_rectangle(id, x1, y1, x2, y2);

| Argument | Type | Description |
| --- | --- | --- |
| id | MP Grid ID | Index of the mp_grid that is to be used |
| x1 | Real | The x coordinate of the left side of the rectangle to check. |
| y1 | Real | The y coordinate of the top side of the rectangle to check. |
| x2 | Real | The x coordinate of the right side of the rectangle to check. |
| y2 | Real | The x coordinate of the bottom side of the rectangle to check. |

#### Returns:

N/A

#### Example:

mp\_grid\_add\_rectangle(grid, 0, 0, 100, 200);

The above code will mark as forbidden all cells of the mp\_grid indexed in the variable "grid" that fall within the area 0,0 to 100,200.