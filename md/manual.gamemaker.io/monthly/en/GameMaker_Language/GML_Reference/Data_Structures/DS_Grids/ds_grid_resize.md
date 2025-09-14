---
title: "ds_grid_resize"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Data_Structures/DS_Grids/ds_grid_resize.htm"
converted: "2025-09-14T03:59:46.389Z"
---

# ds\_grid\_resize

With this function you can resize the given DS grid to have a different width and/or height. If the grid size is larger than the current grid, the new cells will have a base value of 0, and if the size is smaller then the values held in the cells that are no longer within the new size will be lost. All other cells will be left untouched.

#### Syntax:

ds\_grid\_resize(index, w, h);

| Argument | Type | Description |
| --- | --- | --- |
| index | DS Grid | The grid to resize. |
| w | Real | The new width of the grid. |
| h | Real | The new height of the grid. |

#### Returns:

N/A

#### Example:

ds\_grid\_resize(global.Grid, room\_width / 32, room\_height / 32);
ds\_grid\_clear(global.Grid, -1)

The above code will resize the DS grid indexed in the global variable "Grid" and then clear it so that each cell holds the value -1.