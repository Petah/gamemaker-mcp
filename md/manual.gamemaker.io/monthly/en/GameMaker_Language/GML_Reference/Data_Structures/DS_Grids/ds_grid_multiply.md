---
title: "ds_grid_multiply"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Data_Structures/DS_Grids/ds_grid_multiply.htm"
converted: "2025-09-14T03:59:46.303Z"
---

# ds\_grid\_multiply

This function will multiply the value of the given grid cell by the specified amount.

**NOTE** This function will only work with real numbers, not strings.

#### Syntax:

ds\_grid\_multiply(index, x, y, val);

| Argument | Type | Description |
| --- | --- | --- |
| index | DS Grid | The handle of the grid. |
| x | Real | The x position of the cell in the grid. |
| y | Real | The y position of the cell in the grid. |
| val | Real | The value to multiply with the cell. |

#### Returns:

N/A

#### Example:

ds\_grid\_multiply(mygrid, 5, 5, 2)

The above code will multiply the value stored in the given DS grid cell by 2.