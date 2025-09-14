---
title: "ds_grid_set_grid_region"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Data_Structures/DS_Grids/ds_grid_set_grid_region.htm"
converted: "2025-09-14T03:59:46.440Z"
---

# ds\_grid\_set\_grid\_region

This function can be used to copy the contents of a rectangular area of grid cells from one (previously defined) DS grid to another, _or_ it can be used to copy a region from within the same grid. The following images illustrate both ways that this function can be used:

![DS grid set grid region](../../../../assets/Images/Scripting_Reference/GML/Reference/Data_Structures/ds_grid_set_grid_region.png)

#### Syntax:

ds\_grid\_set\_grid\_region(index, source, x1, y1, x2, y2, xpos, ypos);

| Argument | Type | Description |
| --- | --- | --- |
| index | DS Grid | The handle of the destination grid. |
| source | DS Grid | The handle of the source grid. |
| x1 | Real | The left position of the region of cells to copy from the source grid. |
| y1 | Real | The top position of the region of cells to copy from the source grid. |
| x2 | Real | The right position of the region of cells to copy from the source grid. |
| y2 | Real | The bottom position of the region of cells to copy from the source grid. |
| xpos | Real | The x position on the destination grid to copy the source region to. |
| ypos | Real | The y position on the destination grid to copy the source region to. |

#### Returns:

N/A

#### Example:

ds\_grid\_set\_grid\_region(grid, t\_grid, 0, 0, 5, 5, 10, 10)

This would copy the region of cells from (0,0) to (5,5) of the grid indexed in the variable "t\_grid" and copy them to position (10,10) in the grid indexed in the variable "grid".