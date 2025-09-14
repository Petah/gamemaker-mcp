---
title: "ds_grid_get_disk_max"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Data_Structures/DS_Grids/ds_grid_get_disk_max.htm"
converted: "2025-09-14T03:59:46.162Z"
---

# ds\_grid\_get\_disk\_max

This function can be used to find the maximum value for all the cells found within the defined disk area of a grid, as shown in the image below:

![DS grid get disk max](../../../../assets/Images/Scripting_Reference/GML/Reference/Data_Structures/ds_grid_get_disk_max.png)

#### Syntax:

ds\_grid\_get\_disk\_max(index, xm, ym, r);

| Argument | Type | Description |
| --- | --- | --- |
| index | DS Grid | The handle of the grid. |
| xm | Real | The x position of the disk center in the grid. |
| ym | Real | The y position of the disk center in the grid. |
| r | Real | The radius of the disk in the grid. |

#### Returns:

[Real](../../../../../../../GameMaker_Language/GML_Overview/Data_Types.md) or [String](../../../../../../../GameMaker_Language/GML_Overview/Data_Types.md)

#### Example:

val = ds\_grid\_get\_disk\_max(grid, 5, 5, 2)

The above code will set the variable "val" to the maximum value contained within the given disk of the DS grid indexed in the variable "grid".