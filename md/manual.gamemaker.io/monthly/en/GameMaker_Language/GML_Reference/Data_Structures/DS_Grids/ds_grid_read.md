---
title: "ds_grid_read"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Data_Structures/DS_Grids/ds_grid_read.htm"
converted: "2025-09-14T03:59:46.369Z"
---

# ds\_grid\_read

This function can be used to convert a string which has been created previously by the function [ds\_grid\_write()](ds_grid_write.md) back into a DS grid. The DS grid must have been created previously (see the example below).

### Format Notes

The underlying format written by this function changed a few times:

-   If the specified DS string was written by the GameMaker: Studio 1.2.x runtime (or older), you should specify the optional argument legacy, setting it to true as the string format changed after that.
-   GameMaker: Studio 2.3.1 introduced another format change.

#### Syntax:

ds\_grid\_read(index, string \[, legacy\]);

| Argument | Type | Description |
| --- | --- | --- |
| index | DS Grid | The handle of the grid to read. |
| string | String | The string to read into the DS grid. |
| legacy | Boolean | OPTIONAL Can be either true or false or omitted completely. |

#### Returns:

N/A

#### Example:

grid = ds\_grid\_create(room\_width div 32, room\_height div 32);
ini\_open("Save.ini");
ds\_grid\_read(grid, ini\_read\_string("Save", "0", ""));
ini\_close();

The above code creates a DS grid based on the size of the room (each 32x32 square of pixels represents one grid cell) and then reads a previously saved set of grid data from an ini file into the new DS grid.