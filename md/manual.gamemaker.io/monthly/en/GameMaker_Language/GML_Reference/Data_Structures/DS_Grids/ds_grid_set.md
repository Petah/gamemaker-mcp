---
title: "ds_grid_set"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Data_Structures/DS_Grids/ds_grid_set.htm"
converted: "2025-09-14T03:59:46.403Z"
---

# ds\_grid\_set

This function can be used to set a given cell within the given DS grid to any value, which can be a real number or a string. The image below illustrates this:

![DS grid set](../../../../assets/Images/Scripting_Reference/GML/Reference/Data_Structures/ds_grid_set.png)

#### Syntax:

ds\_grid\_set(index, x, y, value);

| Argument | Type | Description |
| --- | --- | --- |
| index | DS Grid | This handle of the grid. |
| x | Real | The x position of the cell to set. |
| y | Real | The y position of the cell to set. |
| value | Any | The value with which to set the cell. |

#### Returns:

N/A

#### Example:

grid = ds\_grid\_create(5, 5);
var i = 0;
var j = 0;

repeat (ds\_grid\_width(grid))
{
    repeat (ds\_grid\_height(grid))
    {
        ds\_grid\_set(grid, i, j, irandom(9));
        j += 1;
    }

    j = 0;
    i += 1;
}

The above code creates a grid and stores its index in the variable "grid". It then populates this grid with random integers from 0 to 9.