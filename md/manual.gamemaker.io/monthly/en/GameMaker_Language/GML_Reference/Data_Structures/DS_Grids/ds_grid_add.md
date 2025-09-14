---
title: "ds_grid_add"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Data_Structures/DS_Grids/ds_grid_add.htm"
converted: "2025-09-14T03:59:46.016Z"
---

# ds\_grid\_add

This function can be used to add a given value (real or string) to the value of the given cell within the grid. The value to be added must be the same type as that held within the grid cell, ie: you cannot add a string to a real or vice versa, and for strings this corresponds to concatenation.

#### Syntax:

ds\_grid\_add(index, x, y, val);

| Argument | Type | Description |
| --- | --- | --- |
| index | DS Grid | The handle of the grid. |
| x | Real | The x position of the cell in the grid. |
| y | Real | The y position of the cell in the grid. |
| val | Any | The value to add to the cell. |

#### Returns:

N/A

#### Example:

ds\_grid\_add(grid, 5, 5, 6)

This would add 6 to the given cell within the DS grid referenced by the variable "grid".