---
title: "ds_grid_to_mp_grid"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Data_Structures/DS_Grids/ds_grid_to_mp_grid.htm"
converted: "2025-09-14T03:59:46.519Z"
---

# ds\_grid\_to\_mp\_grid

This function converts a DS grid into an MP grid, where all 0 values become "empty" and all others "occupied".

An optional mapping function can be provided to determine which values in the DS grid should be considered "empty" or "occupied".

NOTE To convert from MP grid to DS grid, see [mp\_grid\_to\_ds\_grid](../../Movement_And_Collisions/Motion_Planning/mp_grid_to_ds_grid.md).

WARNING The DS grid and MP grid **must** have the same width and height. If the grids' dimensions don't match, the conversion will fail and an error "Error, grid sizes do not match" is thrown.

### Usage Notes

-   Cells set to 0 in the DS grid become empty cells in the MP grid, all other values will be occupied.
-   By default, a DS grid created with [ds\_grid\_create](ds_grid_create.md) has all elements set to 0 so an MP grid created from it will be empty.
-   The grid can contain any value that can be converted to real using the function [real](../../Variable_Functions/real.md). If there are values that cannot be converted, e.g. a string that contains only letters, the function will fail and an error message is shown.

### [Mapping FunctionMapping Function](ds_grid_to_mp_grid.htm#)

The optional mapping function that you pass to this function should take the following parameters:

| Argument | Type | Description |
| --- | --- | --- |
| value | Real | The value in the current cell |
| x | Real | The x index/position of the grid cell |
| y | Real | The y index/position of the grid cell |

#### Syntax:

ds\_grid\_to\_mp\_grid(ds\_grid, mp\_grid\[, func\]);

| Argument | Type | Description |
| --- | --- | --- |
| ds_grid | DS Grid | The DS grid to convert |
| mp_grid | MP Grid ID | The MP grid to write the data to |
| func | Function | OPTIONAL The mapping function to use |

#### Returns:

[MP Grid ID](../../Movement_And_Collisions/Motion_Planning/mp_grid_create.md)

#### Example 1: Basic Usage

var \_size = 10;
grd\_data = ds\_grid\_create(\_size, \_size);
repeat(20)
{
    ds\_grid\_set(grd\_data, irandom(\_size-1), irandom(\_size-1), choose(0, false, true, "7", 47));
}

mpg\_data = mp\_grid\_create(0, 0, \_size, \_size, 16, 16);
ds\_grid\_to\_mp\_grid(grd\_data, mpg\_data);

The above code first creates a DS grid of 10 cells by 10 cells (initialised in the \_size variable) using [ds\_grid\_create](ds_grid_create.md). It then assigns one of 5 possible values, selected using the [choose](../../Maths_And_Numbers/Number_Functions/choose.md) function, to each of 20 randomly selected cells in the grid. After that, it creates an MP grid using [mp\_grid\_create](../../Movement_And_Collisions/Motion_Planning/mp_grid_create.md) and fills it using the contents of the DS grid by calling the ds\_grid\_to\_mp\_grid function. DS grid cells containing 0 or false will be marked as "empty" in the MP grid, cells containing true, "7" or 47 marked as "occupied".

#### Example 2: Using a Mapping Function

width = 128;
height = 128;
cellsize = 4;

function occupied(value, x, y)
{
    switch(value)
    {
        case "Mountains":
        case "Water":
        case "Forest":
            return true;
        case "Grass":
            return false;
        default:
            return false;
    }
}

grd\_level = ds\_grid\_create(width, height);
ds\_grid\_clear(grd\_level, "Grass");
ds\_grid\_set\_disk(grd\_level, 60, 60, 20, "Water");
ds\_grid\_set\_disk(grd\_level, 100, 60, 20, "Mountains");
ds\_grid\_set\_region(grd\_level, 60, 100, 110, 110, "Forest");

mpg\_level = mp\_grid\_create(0, 0, width, height, 4, 4);
ds\_grid\_to\_mp\_grid(grd\_level, mpg\_level, occupied);

The above code first shows an example of how to use a mapping function. First it defines width, height and cellsize as instance variables, as well as a mapping function occupied that returns true if the value is one of "Mountains", "Water" or "Forest" or false if it is either "Grass" or any other value. It then creates a [DS grid](../../../../../../../GameMaker_Language/GML_Reference/Data_Structures/DS_Grids/DS_Grids.md) grd\_level of the given width and height and fills it with a couple of terrain types. After that, an MP grid of the same width and height is created using [mp\_grid\_create](../../Movement_And_Collisions/Motion_Planning/mp_grid_create.md) and its ID stored in a variable mpg\_level. Finally the MP grid is initialized with the contents of the DS grid, using ds\_grid\_to\_mp\_grid.