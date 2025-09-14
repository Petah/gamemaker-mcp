---
title: "ds_grid_sort"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Data_Structures/DS_Grids/ds_grid_sort.htm"
converted: "2025-09-14T03:59:46.487Z"
---

# ds\_grid\_sort

This function can be used to sort a DS grid based on the values from a given column (much as you would sort files by date, size etc... in the OS file explorer). The following image shows an example:

![DS grid sort](../../../../assets/Images/Scripting_Reference/GML/Reference/Data_Structures/ds_grid_sort.png)

#### Syntax:

ds\_grid\_sort(index, column, ascending);

| Argument | Type | Description |
| --- | --- | --- |
| index | DS Grid | The handle of the grid to sort. |
| column | Real | The column to use for sorting the rows |
| ascending | Boolean | Whether to sort lowest to highest (true), or highest to lowest (false). |

#### Returns:

N/A

#### Example:

ds\_grid\_sort(grid, 3, false)

This would take all the values in the DS grid indexed in the variable "grid" and sort them according to the values found in the 3rd column of the grid (as shown in the above image).