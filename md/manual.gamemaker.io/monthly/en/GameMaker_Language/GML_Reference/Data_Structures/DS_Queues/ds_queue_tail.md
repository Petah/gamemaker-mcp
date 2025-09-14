---
title: "ds_queue_tail"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Data_Structures/DS_Queues/ds_queue_tail.htm"
converted: "2025-09-14T03:59:47.944Z"
---

# ds\_queue\_tail

This function will only _read_ the last value of the queue (that which is "at the tail"). It will not _remove_ the value from the structure, meaning that it can be read again by calling this function. If the queue is empty then the function will return the constant undefined, otherwise it will return the value contained in the queue.

#### Syntax:

ds\_queue\_tail(id);

| Argument | Type | Description |
| --- | --- | --- |
| id | DS Queue | The handle of the data structure to read from. |

#### Returns:

[Any](../../../GML_Overview/Data_Types.htm#variable) (Data type value stored in the queue)

#### Example:

num = ds\_queue\_tail(control\_queue);

The above code will read the tail value from the queue indexed in the variable "control\_queue" and store the return value in the variable "num".