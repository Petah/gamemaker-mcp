---
title: "ds_grid_value_y"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Data_Structures/DS_Grids/ds_grid_value_y.htm"
converted: "2025-09-14T03:59:46.623Z"
---

# ds\_grid\_value\_y

With this function you can get the y coordinate (within the given rectangular grid region) of the value being searched for. You give the DS grid index (as returned by [ds\_grid\_create()](ds_grid_create.md)) along with the x/y positions for the top left and bottom right corners of the grid region to search, before supplying the value to search for. If the value being searched for does not exist, then the function will return -1.

#### Syntax:

ds\_grid\_value\_y(index, x1, y1, x2, y2, val);

| Argument | Type | Description |
| --- | --- | --- |
| index | DS Grid | The handle of the grid. |
| x1 | Real | The x position of the left of the region in the grid, from 0 to (grid width - 1). |
| y1 | Real | The y position of the top of the region in the grid, from 0 to (grid height - 1). |
| x2 | Real | The x position of the right of the region in the grid, from 0 to (grid width - 1). |
| y2 | Real | The y position of the bottom of the region in the grid, from 0 to (grid height - 1) |
| val | Any | The value to find. |

#### Returns:

[Real](../../../../../../../GameMaker_Language/GML_Overview/Data_Types.md)

#### Example:

if (ds\_grid\_value\_exists(grid, 0, 1, 5, 6, val))
{
    xpos = ds\_grid\_value\_x(grid, 0, 1, 5, 6, val);
    ypos = ds\_grid\_value\_y(grid, 0, 1, 5, 6, val);
}

The above code checks a ds\_grid for a specific value within a rectangular region. if it is found, it then stores the x and y position of the value in two variables for later use.