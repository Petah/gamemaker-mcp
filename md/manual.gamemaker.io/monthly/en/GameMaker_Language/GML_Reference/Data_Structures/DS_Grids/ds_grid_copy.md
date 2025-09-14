---
title: "ds_grid_copy"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Data_Structures/DS_Grids/ds_grid_copy.htm"
converted: "2025-09-14T03:59:46.100Z"
---

# ds\_grid\_copy

With this function you can copy the contents of one grid into another one. Both grids must have been created previously using the [ds\_grid\_create()](ds_grid_create.md) function.

This will resize the destination grid to be the same size as the source grid.

#### Syntax:

ds\_grid\_copy(destination, source);

| Argument | Type | Description |
| --- | --- | --- |
| destination | DS Grid | This handle of the grid to copy to. |
| source | DS Grid | This handle of the grid to copy from. |

#### Returns:

N/A

#### Example:

n\_grid = ds\_grid\_create(1, 1);
ds\_grid\_copy(n\_grid, a\_grid);
ds\_grid\_clear(a\_grid, -1)

The above code creates a new DS grid, then copies information from the previous grid to the new one. The starting size of the destination DS grid does not matter as the size of the source grid will be applied to it before any data is copied.

Finally it clears the old grid so that all cells have a value of -1.