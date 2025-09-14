---
title: "ds_grid_set_region"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Data_Structures/DS_Grids/ds_grid_set_region.htm"
converted: "2025-09-14T03:59:46.455Z"
---

# ds\_grid\_set\_region

This function can be used to set a rectangular region of a given grid to a specified value (which can be either a real or a string) as illustrated by the image shown below:

![DS grid set region](../../../../assets/Images/Scripting_Reference/GML/Reference/Data_Structures/ds_grid_set_region.png)

#### Syntax:

ds\_grid\_set\_region(index, x1, y1, x2, y2, val);

| Argument | Type | Description |
| --- | --- | --- |
| index | DS Grid | The handle of the grid. |
| x1 | Real | The x position of the left of the region in the grid. |
| y1 | Real | The y position of the top of the region in the grid. |
| x2 | Real | The x position of the right of the region in the grid. |
| y2 | Real | The y position of the bottom of the region in the grid. |
| val | Any | The value to set the region cells to. |

#### Returns:

N/A

#### Example:

ds\_grid\_set\_region(grid, 5, 5, 10, 10, 99)

This would set all cells within the region of the grid indexed in the variable "grid" from (5,5) to (10,10) to 99.