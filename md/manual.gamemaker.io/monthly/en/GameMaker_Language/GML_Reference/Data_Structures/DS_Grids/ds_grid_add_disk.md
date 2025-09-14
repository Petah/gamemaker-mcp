---
title: "ds_grid_add_disk"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Data_Structures/DS_Grids/ds_grid_add_disk.htm"
converted: "2025-09-14T03:59:46.037Z"
---

# ds\_grid\_add\_disk

This function can be used to add a given value (real or string) to all the values of the cells found within the defined disk area of a grid. The value to be added must be of the same type as that held within the grid cells, ie: you cannot add a string to a real or vice versa, and for strings this corresponds to concatenation.

#### Syntax:

ds\_grid\_add\_disk(index, xm, ym, r, val);

| Argument | Type | Description |
| --- | --- | --- |
| index | DS Grid | The handle of the grid. |
| xm | Real | The x position of the disk on the grid. |
| ym | Real | The y position of the disk on the grid. |
| r | Real | The radius of the disk on the grid. |
| val | Any | The value to add to the cells within the disk. |

#### Returns:

N/A

#### Example:

ds\_grid\_add\_disk(grid, 7, 6, 5, 2)

This would add 2 to all the values held in the cells within the defined disk area of the DS grid referenced by the variable "grid".