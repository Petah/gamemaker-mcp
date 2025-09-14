---
title: "ds_grid_get_disk_sum"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Data_Structures/DS_Grids/ds_grid_get_disk_sum.htm"
converted: "2025-09-14T03:59:46.209Z"
---

# ds\_grid\_get\_disk\_sum

This function can be used to add all the values all the cells found within the defined disk area of a grid together, as shown in the image below:

![DS grid get disk sum](../../../../assets/Images/Scripting_Reference/GML/Reference/Data_Structures/ds_grid_get_disk_sum.png)

#### Syntax:

ds\_grid\_get\_disk\_sum(index, xm, ym, r);

| Argument | Type | Description |
| --- | --- | --- |
| index | DS Grid | The handle of the grid. |
| xm | Real | The x position of the disk on the grid. |
| ym | Real | The y position of the disk on the grid. |
| r | Real | The radius of the disk on the grid. |

#### Returns:

[Real](../../../../../../../GameMaker_Language/GML_Overview/Data_Types.md) or [String](../../../../../../../GameMaker_Language/GML_Overview/Data_Types.md)

#### Example:

val = ds\_grid\_get\_disk\_sum(grid, 5, 5, 2)

The above code will set the variable "val" to the sum of all values contained within the given disk of the DS grid indexed in the variable "grid".