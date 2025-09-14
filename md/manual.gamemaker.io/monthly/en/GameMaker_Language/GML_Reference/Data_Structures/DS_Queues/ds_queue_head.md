---
title: "ds_queue_head"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Data_Structures/DS_Queues/ds_queue_head.htm"
converted: "2025-09-14T03:59:47.897Z"
---

# ds\_queue\_head

This function will only _read_ the first value of the queue (that which is "at the head"). It will not _dequeue_ the value, meaning that it can still be read in the future by this function or [ds\_queue\_dequeue()](ds_queue_dequeue.md). If the queue is empty then the function will return the constant undefined, otherwise it will return the value contained in the queue.

#### Syntax:

ds\_queue\_head(id);

| Argument | Type | Description |
| --- | --- | --- |
| id | DS Queue | The handle of the data structure to read from. |

#### Returns:

[Any](../../../GML_Overview/Data_Types.htm#variable) (Data type value stored in the queue)

#### Example:

num = ds\_queue\_head(control\_queue);

The above code will read the head value from the queue indexed in the variable "control\_queue" and store the return value in the variable "num".