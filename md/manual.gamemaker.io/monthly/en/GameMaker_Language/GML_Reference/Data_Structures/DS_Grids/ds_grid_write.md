---
title: "ds_grid_write"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Data_Structures/DS_Grids/ds_grid_write.htm"
converted: "2025-09-14T03:59:46.650Z"
---

# ds\_grid\_write

This function can be used to convert the given ds\_grid into a string, which can then be stored in an external file (for example). You can read the returned string from this function back into a ds\_grid using the function [ds\_grid\_read()](ds_grid_read.md).

**NOTE** The returned string is not a human readable string, but rather a dump of the contents of the data-structure.

#### Syntax:

ds\_grid\_write(index);

| Argument | Type | Description |
| --- | --- | --- |
| index | DS Grid | The handle of the grid to write. |

#### Returns:

[String](../../../../../../../GameMaker_Language/GML_Overview/Data_Types.md)

#### Example:

ini\_open("Save.ini");
ini\_write\_string("Save", "0", ds\_grid\_write(mygrid));
ini\_close()

The above code will open an ini file (creating it if it doesn't already exist) and then write the given ds\_grid as a string to that file.