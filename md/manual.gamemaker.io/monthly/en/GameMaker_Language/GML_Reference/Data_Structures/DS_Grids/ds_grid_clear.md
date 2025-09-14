---
title: "ds_grid_clear"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Data_Structures/DS_Grids/ds_grid_clear.htm"
converted: "2025-09-14T03:59:46.087Z"
---

# ds\_grid\_clear

This function can be used to clear a given DS grid to a specific value. All cells within the grid will then contain this value, which can be a real number or a string. The image below illustrates how this works:

![DS grid clear](../../../../assets/Images/Scripting_Reference/GML/Reference/Data_Structures/ds_grid_clear.png)

#### Syntax:

ds\_grid\_clear(index, val);

| Argument | Type | Description |
| --- | --- | --- |
| index | DS Grid | This handle of the grid to clear. |
| val | Any | The new value for all grid cells. |

#### Returns:

N/A

#### Example:

ds\_grid\_resize(global.Grid, room\_width / 32, room\_height / 32);
ds\_grid\_clear(global.Grid, -1)

The above code will resize the DS grid indexed in the global variable "Grid" and then clear it so that each cell holds the value -1.