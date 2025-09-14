---
title: "ds_queue_write"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Data_Structures/DS_Queues/ds_queue_write.htm"
converted: "2025-09-14T03:59:47.957Z"
---

# ds\_queue\_write

This function returns a string which can then be stored or transferred to another data structure using the [ds\_queue\_read()](../../../../../../../GameMaker_Language/GML_Reference/Data_Structures/DS_Queues/ds_queue_read.md) function.

NOTE The returned string is not a human readable string, but rather a dump of the contents of the data structure.

#### Syntax:

ds\_queue\_write(id);

| Argument | Type | Description |
| --- | --- | --- |
| id | DS Queue | The handle of the data structure to write. |

#### Returns:

[String](../../../GML_Overview/Data_Types.md)

#### Example:

ini\_open("save.ini");
var str =ds\_queue\_write(queue);
ini\_write\_string("Queues", "0", str);
ds\_queue\_clear(queue);
ini\_close();

The above code opens an ini file and then writes a string containing the information stored in the DS queue indexed in the variable "queue". The queue is then cleared and the ini file closed.