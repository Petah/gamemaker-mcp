---
title: "ds_grid_value_exists"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Data_Structures/DS_Grids/ds_grid_value_exists.htm"
converted: "2025-09-14T03:59:46.588Z"
---

# ds\_grid\_value\_exists

With this function you can check to see if a specific value (real or string) is present within a rectangular area of a given DS grid. If it is present the function will return true otherwise it will return false.

#### Syntax:

ds\_grid\_value\_exists(index, x1, y1, x2, y2, val);

| Argument | Type | Description |
| --- | --- | --- |
| index | DS Grid | The handle of the grid. |
| x1 | Real | The x position of the left of the region in the grid. |
| y1 | Real | The y position of the top of the region in the grid. |
| x2 | Real | The x position of the right of the region in the grid. |
| y2 | Real | The y position of the bottom of the region in the grid. |
| val | Any | The value to find. |

#### Returns:

[Boolean](../../../../../../../GameMaker_Language/GML_Overview/Data_Types.md)

#### Example:

if (ds\_grid\_value\_exists(grid, 0, 1, 5, 6, val))
{
    xpos = ds\_grid\_value\_x(grid, 0, 1, 5, 6, val);
    ypos = ds\_grid\_value\_y(grid, 0, 1, 5, 6, val);
}

The above code checks a DS grid for a specific value within a rectangular region. if it is found, it then stores the x and y position of the value in two variables for later use.