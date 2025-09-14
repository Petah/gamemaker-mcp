---
title: "ds_grid_multiply_grid_region"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Data_Structures/DS_Grids/ds_grid_multiply_grid_region.htm"
converted: "2025-09-14T03:59:46.339Z"
---

# ds\_grid\_multiply\_grid\_region

With this function you can define an area within a given DS grid, then take those values and multiply them with those found in a separate region of either the same DS grid, or another one (which has been previously created). The original region will remain unchanged, while the region that they have been multiplied with will now store the new values for each cell.

#### Syntax:

ds\_grid\_multiply\_grid\_region(index, source, x1, y1, x2, y2, xpos, ypos);

| Argument | Type | Description |
| --- | --- | --- |
| index | DS Grid | The handle of the destination grid. |
| source | DS Grid | The handle of the source grid. |
| x1 | Real | The left position of the region of cells to copy from the source grid. |
| y1 | Real | The top position of the region of cells to copy from the source grid. |
| x2 | Real | The right position of the region of cells to copy from the source grid. |
| y2 | Real | The bottom position of the region of cells to copy from the source grid. |
| xpos | Real | The x position on the destination grid to multiply the source region with. |
| ypos | Real | The y position on the destination grid to multiply the source region with. |

#### Returns:

N/A

#### Example:

ds\_grid\_multiply\_grid\_region(mygrid, mygrid, 0, 0, 5, 5, 0, 0)

This would take the region of cells from (0,0) to (5,5) of the DS grid "mygrid" and multiply them with the cells from position (0,0) of the same DS grid.