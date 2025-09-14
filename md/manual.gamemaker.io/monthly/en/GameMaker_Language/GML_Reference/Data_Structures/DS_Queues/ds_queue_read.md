---
title: "ds_queue_read"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Data_Structures/DS_Queues/ds_queue_read.htm"
converted: "2025-09-14T03:59:47.914Z"
---

# ds\_queue\_read

With this function you can recreate a saved DS queue (one that has previously been written as a string using [ds\_queue\_write()](ds_queue_write.md)). You must first create a new DS queue to read the string into, and if the DS queue already exists and has information stored in it, then this will be cleared before reading. This function is of vital importance when creating save/load mechanisms for your game.

### Format Notes

The underlying format written by this function changed a few times:

-   If the specified DS string was written by the GameMaker: Studio 1.2.x runtime (or older), you should specify the optional argument legacy, setting it to true as the string format changed after that.
-   GameMaker: Studio 2.3.1 introduced another format change.

#### Syntax:

ds\_queue\_read(id, str \[, legacy\]);

| Argument | Type | Description |
| --- | --- | --- |
| id | DS Queue | The handle of the data structure to read into. |
| str | String | The string to read from. |
| legacy | Boolean | OPTIONAL Can be either true or false or omitted completely. |

#### Returns:

N/A

#### Example:

queue = ds\_queue\_create();
ini\_open("save.ini");
var str = ini\_read\_string("Queues", "0", "");
if (str != "")
{
    ds\_queue\_read(queue, str);
}
ini\_close();

The above code creates a queue and stores the index in the variable "queue". It then opens an ini file and reads a string from that, checking to make sure that the string is not returned as empty first. This string is then read into the newly created DS queue.