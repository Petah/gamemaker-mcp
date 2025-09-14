---
title: "ds_grid_get_disk_mean"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Data_Structures/DS_Grids/ds_grid_get_disk_mean.htm"
converted: "2025-09-14T03:59:46.176Z"
---

# ds\_grid\_get\_disk\_mean

This function can be used to find the mean value for all the cells found within the defined disk area of a grid (all cell values are added together and then divided by the total number of cells that make up the disk), as shown in the image below:

![DS grid get disk mean](../../../../assets/Images/Scripting_Reference/GML/Reference/Data_Structures/ds_grid_get_disk_mean.png)

#### Syntax:

ds\_grid\_get\_disk\_mean(index, xm, ym, r);

| Argument | Type | Description |
| --- | --- | --- |
| index | DS Grid | The handle of the grid. |
| xm | Real | The x position of the disk on the grid. |
| ym | Real | The y position of the disk on the grid. |
| r | Real | The radius of the disk on the grid. |

#### Returns:

[Real](../../../../../../../GameMaker_Language/GML_Overview/Data_Types.md) or [String](../../../../../../../GameMaker_Language/GML_Overview/Data_Types.md)

#### Example:

val = ds\_grid\_get\_disk\_mean(grid, 5, 5, 2)

The above code will set the variable "val" to the mean value contained within the given disk of the DS grid indexed in the variable "grid".