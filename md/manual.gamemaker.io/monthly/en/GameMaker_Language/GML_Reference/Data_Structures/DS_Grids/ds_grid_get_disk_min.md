---
title: "ds_grid_get_disk_min"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Data_Structures/DS_Grids/ds_grid_get_disk_min.htm"
converted: "2025-09-14T03:59:46.193Z"
---

# ds\_grid\_get\_disk\_min

This function can be used to find the minimum value for all the cells found within the defined disk area of a grid, as shown in the image below:

![Ds grid get disk min](../../../../assets/Images/Scripting_Reference/GML/Reference/Data_Structures/ds_grid_get_disk_min.png)

#### Syntax:

ds\_grid\_get\_disk\_min(index, xm, ym, r);

| Argument | Type | Description |
| --- | --- | --- |
| index | DS Grid | The handle of the grid. |
| xm | Real | The x position of the disk on the grid. |
| ym | Real | The y position of the disk on the grid. |
| r | Real | The radius of the disk on the grid. |

#### Returns:

[Real](../../../../../../../GameMaker_Language/GML_Overview/Data_Types.md) or [String](../../../../../../../GameMaker_Language/GML_Overview/Data_Types.md)

#### Example:

val = ds\_grid\_get\_disk\_min(grid, 5, 5, 2)

The above code will set the variable "val" to the minimum value contained within the given disk of the DS grid indexed in the variable "grid".