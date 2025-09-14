---
title: "ds_grid_get_max"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Data_Structures/DS_Grids/ds_grid_get_max.htm"
converted: "2025-09-14T03:59:46.223Z"
---

# ds\_grid\_get\_max

This function can be used to find the maximum value for all the cells found within the defined region of a grid, as shown in the image below:

![DS grid get max](../../../../assets/Images/Scripting_Reference/GML/Reference/Data_Structures/ds_grid_get_max.png)

#### Syntax:

ds\_grid\_get\_max(index, x1, y1, x2, y2);

| Argument | Type | Description |
| --- | --- | --- |
| index | DS Grid | The handle of the grid. |
| x1 | Real | The left cell column of the region. |
| y1 | Real | The top cell row of the region. |
| x2 | Real | The right cell column of the region. |
| y2 | Real | The bottom cell row of the region. |

#### Returns:

[Real](../../../GML_Overview/Data_Types.md) or [String](../../../GML_Overview/Data_Types.md)

#### Example:

val = ds\_grid\_get\_max(grid, 0, 0, 5, 5)

The above code will set the variable "val" to the maximum value contained within the given region of the DS grid indexed in the variable "grid".