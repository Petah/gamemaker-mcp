---
title: "ds_grid_multiply_disk"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Data_Structures/DS_Grids/ds_grid_multiply_disk.htm"
converted: "2025-09-14T03:59:46.316Z"
---

# ds\_grid\_multiply\_disk

This function will take all the values in a given disc-shaped region of the DS grid, and multiply each one by the given amount.

**NOTE** This function will only work with real numbers, not strings.

#### Syntax:

ds\_grid\_multiply\_disk(index, xm, ym, r, val);

| Argument | Type | Description |
| --- | --- | --- |
| index | DS Grid | The handle of the grid. |
| xm | Real | The x position of the disk on the grid. |
| ym | Real | The y position of the disk on the grid. |
| r | Real | The radius of the disk on the grid. |
| val | Real | The value to multiply the cells within the disk with. |

#### Returns:

N/A

#### Example:

ds\_grid\_multiply\_disk(mygrid, 5, 5, 5, 2)

The above code will take all the values found within the circular grid area and multiply each one by 2.