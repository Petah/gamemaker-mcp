---
title: "ds_map_write"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Data_Structures/DS_Maps/ds_map_write.htm"
converted: "2025-09-14T03:59:47.502Z"
---

# ds\_map\_write

This function will turn the data of the specified [DS Map](ds_map_create.md) into string format which can then be written to an \*.ini or a \*.txt file for easy storage. This string can then be read back later into a new DS map using [ds\_map\_read](ds_map_read.md).

Within the DS map any [Real](../../../GML_Overview/Data_Types.md), [String](../../../GML_Overview/Data_Types.md) and [Array](../../../GML_Overview/Arrays.md) values (including arrays nested within arrays) will be stored into the string properly, however structs are not supported.

NOTE The returned string is not a human readable string, but rather a dump of the contents of the data structure.

#### Syntax:

ds\_map\_write(id);

| Argument | Type | Description |
| --- | --- | --- |
| id | DS Map | The handle of the data structure to use |

#### Returns:

[String](../../../GML_Overview/Data_Types.md)

#### Example:

ini\_open("map.ini");
var \_t\_string = ds\_map\_write(inventory);
ini\_write\_string("Saved", "0", \_t\_string);
ini\_close();

The above code opens an INI file ready to be written to. It then uses ds\_map\_write to generate a string which is stored in the temporary variable \_t\_string. Finally, it writes that string to the INI file before closing it.