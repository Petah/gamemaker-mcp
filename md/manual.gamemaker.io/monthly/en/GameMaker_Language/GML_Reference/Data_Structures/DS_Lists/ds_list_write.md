---
title: "ds_list_write"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Data_Structures/DS_Lists/ds_list_write.htm"
converted: "2025-09-14T03:59:47.001Z"
---

# ds\_list\_write

This function returns a string which can then be stored or transferred to another data structure using the [ds\_list\_read()](../../../../../../../GameMaker_Language/GML_Reference/Data_Structures/DS_Lists/ds_list_read.md) function.

NOTE The returned string is not a human readable string, but rather a dump of the contents of the data-structure.

#### Syntax:

ds\_list\_write(id);

| Argument | Type | Description |
| --- | --- | --- |
| id | DS List | The handle of the data structure to write. |

#### Returns:

[String](../../../GML_Overview/Data_Types.md)

#### Example:

ini\_open("save.ini");
var str = ds\_list\_write(list);
ini\_write\_string("Lists", "0", str);
ds\_list\_clear(list);
ini\_close();

The above code opens an ini file and then writes a string containing the information stored in the DS list indexed in the variable "list". The list is then cleared and the ini file closed.