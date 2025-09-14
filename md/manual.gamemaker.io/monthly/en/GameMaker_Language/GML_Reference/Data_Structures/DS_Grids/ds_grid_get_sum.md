---
title: "ds_grid_get_sum"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Data_Structures/DS_Grids/ds_grid_get_sum.htm"
converted: "2025-09-14T03:59:46.269Z"
---

# ds\_grid\_get\_sum

This function can be used to add all the values all the cells found within the defined region of a grid together, as shown in the image below:

![DS grid get sum](../../../../assets/Images/Scripting_Reference/GML/Reference/Data_Structures/ds_grid_get_sum.png)

#### Syntax:

ds\_grid\_get\_sum(index, x1, y1, x2, y2);

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

val = ds\_grid\_get\_sum(grid, 0, 0, 5, 5)

The above code will set the variable "val" to the sum of all values contained within the given region of the DS grid indexed in the variable "grid".