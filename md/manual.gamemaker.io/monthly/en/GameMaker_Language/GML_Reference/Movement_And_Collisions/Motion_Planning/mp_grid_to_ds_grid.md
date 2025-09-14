---
title: "mp_grid_to_ds_grid"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Movement_And_Collisions/Motion_Planning/mp_grid_to_ds_grid.htm"
converted: "2025-09-14T04:00:03.392Z"
---

# mp\_grid\_to\_ds\_grid

This function copies the given MP grid into a [DS grid](../../../../../../../GameMaker_Language/GML_Reference/Data_Structures/DS_Grids/DS_Grids.md).

A cell in the DS grid will contain the value \-1 if it's flagged as occupied in the MP grid, or 0 if it isn't.

NOTE To convert from MP grid to DS grid, see [ds\_grid\_to\_mp\_grid](../../Data_Structures/DS_Grids/ds_grid_to_mp_grid.md).

WARNING The DS grid and MP grid **must** have the same width and height. If the grids' dimensions don't match, the conversion will fail and an error "Error, grid sizes do not match" is thrown.

#### Syntax:

mp\_grid\_to\_ds\_grid(source, destination);

| Argument | Type | Description |
| --- | --- | --- |
| source | MP Grid ID | Index of the mp_grid that is to be used |
| destination | DS Grid | The ds_grid that is to be used to copy the grid data to. |

#### Returns:

[Boolean](../../../GML_Overview/Data_Types.md)

#### Example:

motion\_grid = ds\_grid\_create(room\_width / 32, room\_height / 32);
mp\_grid\_to\_ds\_grid(mp\_grid, motion\_grid);

The above code will create a new DS grid motion\_grid and then copy the MP grid data contained in the variable mp\_grid into the new DS grid.