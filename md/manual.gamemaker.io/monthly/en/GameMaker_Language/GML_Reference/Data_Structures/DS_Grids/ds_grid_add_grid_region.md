---
title: "ds_grid_add_grid_region"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Data_Structures/DS_Grids/ds_grid_add_grid_region.htm"
converted: "2025-09-14T03:59:46.053Z"
---

# ds\_grid\_add\_grid\_region

This function can be used to add all the values of all the cells found within the source area of a grid to the values within the destination grid, as illustrated below:

![DS grid add grid region](../../../../assets/Images/Scripting_Reference/GML/Reference/Data_Structures/ds_grid_add_grid_region.png)

**NOTE** You can also use this function on the same grid to add values from one region of the grid to those stored in another (see code example below).

#### Syntax:

ds\_grid\_add\_grid\_region(index, source, x1, y1, x2, y2, xpos, ypos);

| Argument | Type | Description |
| --- | --- | --- |
| index | DS Grid | The handle of the destination grid. |
| source | DS Grid | The handle of the source grid. |
| x1 | Real | The left position of the region of cells to copy from the source grid. |
| y1 | Real | The top position of the region of cells to copy from the source grid. |
| x2 | Real | The right position of the region of cells to copy from the source grid. |
| y2 | Real | The bottom position of the region of cells to copy from the source grid. |
| xpos | Real | The x position on the destination grid to add the source region to. |
| ypos | Real | The y position on the destination grid to add the source region to. |

#### Returns:

N/A

#### Example:

ds\_grid\_add\_grid\_region(grid, grid, 0, 0, 1, 5, 2, 0)

The above code would copy the region of cells from (0,0) to (1,5) of the DS grid indexed in the variable "grid" and add them to the cells from position (2,0) of the same DS grid .