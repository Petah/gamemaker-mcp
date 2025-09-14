---
title: "ds_grid_get"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Data_Structures/DS_Grids/ds_grid_get.htm"
converted: "2025-09-14T03:59:46.146Z"
---

# ds\_grid\_get

This function can be used to get the value from any cell within the given DS grid. If you pass invalid grid coordinates to the function, then the value returned will be undefined and an error will be shown in the output window.

#### Syntax:

ds\_grid\_get(index, x, y);

| Argument | Type | Description |
| --- | --- | --- |
| index | DS Grid | The handle of the grid. |
| x | Real | The x position of the cell you want to find the value of. |
| y | Real | The y position of the cell you want to find the value of. |

#### Returns:

[Any](../../../../../../../GameMaker_Language/GML_Overview/Data_Types.md)

#### Example:

var xx = irandom(ds\_grid\_width(grid) - 1);
var yy = irandom(ds\_grid\_height(grid) - 1);
val = ds\_grid\_get(grid, xx, yy)

The above code selects a random cell from the DS grid indexed in the variable "grid" and stores its value in the variable "val".