---
title: "mp_grid_clear_cell"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Movement_And_Collisions/Motion_Planning/mp_grid_clear_cell.htm"
converted: "2025-09-14T04:00:03.277Z"
---

# mp\_grid\_clear\_cell

This function can be used to clear a specific "cell" of an MP grid. Cells are _not_ calculated as room coordinates, but rather as grid coordinates, where (0,0) is the top let corner of the grid. this means that to clear a cell at a specific position in the room, we must change the x and y coordinates into cell coordinate dividing them by the resolution of the MP grid. The code example below shows how this works.

#### Syntax:

mp\_grid\_clear\_cell(id, h, v);

| Argument | Type | Description |
| --- | --- | --- |
| id | MP Grid ID | Index of the mp_grid that is to be used |
| h | Real | Horizontal position of the cell to clear |
| v | Real | vertical position of the cell to clear |

#### Returns:

[Boolean](../../../../../../../GameMaker_Language/GML_Overview/Data_Types.md)

#### Example:

with (obj\_Box)
{
    mp\_grid\_clear\_cell(grid, floor(x / 32), floor(y /32));
    instance\_destroy();
}

The above code will make all "obj\_Box" destroy themselves and have them mark the cells they occupied in the mp\_grid indexed in the variable "grid" as free. In this example, we find the appropriate cell by taking the x/y coordinate of the object and dividing them by the resolution of the grid (using floor to keep the values as integers).