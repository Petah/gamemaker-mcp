---
title: "ds_grid_height"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Data_Structures/DS_Grids/ds_grid_height.htm"
converted: "2025-09-14T03:59:46.286Z"
---

# ds\_grid\_height

This function will return the height of the given grid. This value is the number of cells the grid has along the y-axis and is always an integer, as shown in the image below:

![DS grid height](../../../../assets/Images/Scripting_Reference/GML/Reference/Data_Structures/ds_grid_height.png)

#### Syntax:

ds\_grid\_height(index);

| Argument | Type | Description |
| --- | --- | --- |
| index | DS Grid | This handle of the grid to find the height of. |

#### Returns:

[Real](../../../../../../../GameMaker_Language/GML_Overview/Data_Types.md)

#### Example:

for (var i = 0; i < ds\_grid\_width(grid); ++i)
{
    for (var j = 0; j < ds\_grid\_height(grid); ++j)
    {
        if (ds\_grid\_get(grid, i, j) == 1)
        {
            instance\_create\_Layer(i \* 32, j \* 32, "Walls", obj\_Wall);
        }
    }
}

The above code will loop through the DS grid indexed in the variable "grid" and if the value found in any specific cell is equal to 1, it will then create an instance of "obj\_Wall" at the appropriate position within the room.