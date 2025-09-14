---
title: "ds_grid_multiply_region"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Data_Structures/DS_Grids/ds_grid_multiply_region.htm"
converted: "2025-09-14T03:59:46.355Z"
---

# ds\_grid\_multiply\_region

With this function you can specify a region of the grid in which to multiply each cell value by a given amount.

**NOTE** This function will only work with real numbers, not strings.

#### Syntax:

ds\_grid\_multiply\_region(index, x1, y1, x2, y2, val);

| Argument | Type | Description |
| --- | --- | --- |
| index | DS Grid | The handle of the grid. |
| x1 | Real | The x position of the left of the region in the grid. |
| y1 | Real | The y position of the top of the region in the grid. |
| x2 | Real | The x position of the right of the region in the grid. |
| y2 | Real | The y position of the bottom of the region in the grid. |
| val | Real | The value to multiply with the region cells. |

#### Returns:

N/A

#### Example:

ds\_grid\_multiply\_region(mygrid, 5, 5, 10, 10, 2);

The above code will take all the values found within the defined rectangular grid area and multiply each one by 2.