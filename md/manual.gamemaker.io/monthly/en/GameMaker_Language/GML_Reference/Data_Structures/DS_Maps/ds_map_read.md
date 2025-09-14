---
title: "ds_map_read"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Data_Structures/DS_Maps/ds_map_read.htm"
converted: "2025-09-14T03:59:47.317Z"
---

# ds\_map\_read

This function will take a string that has previously been created by the function [ds\_map\_write](ds_map_write.md) and then read it into a previously created [DS Map](ds_map_create.md). If the map that the string is being read into contains any key/value pairs, these will be cleared first before the saved map is reconstructed.

### Format Notes

The underlying format written by this function changed a few times:

-   If the specified DS string was written by the GameMaker: Studio 1.2.x runtime (or older), you should specify the optional argument legacy, setting it to true as the string format changed after that.
-   GameMaker: Studio 2.3.1 introduced another format change.

#### Syntax:

ds\_map\_read(id, str, \[legacy\]);

| Argument | Type | Description |
| --- | --- | --- |
| id | DS Map | The handle of the data structure to read the string into |
| str | String | The string to read |
| legacy | Boolean | OPTIONAL Can be either true or false or omitted completely (defaulting to false) |

#### Returns:

N/A

#### Example:

inventory = ds\_map\_create();
ini\_open("map.ini");
var \_t\_string = ini\_read\_string("Saved", "0", "");
if (\_t\_string != "")
{
    ds\_map\_read(inventory, \_t\_string);
}
ini\_close();

The above code creates a new DS map and stores its handle in the variable inventory. It then opens an INI file and reads a string from that file into the temporary variable \_t\_string. Finally, it checks to make sure that the string is valid (not the default INI value of "") and if it is it then reads the string into the newly created DS map before closing the INI again.