---
title: "ds_queue_enqueue"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Data_Structures/DS_Queues/ds_queue_enqueue.htm"
converted: "2025-09-14T03:59:47.879Z"
---

# ds\_queue\_enqueue

This function will add a value (real or string) onto the tail of the DS queue. The function can take a further 14 optional arguments (making a total of 15 possible additions), permitting you to add multiple values consecutively to the tail of the queue in a single call.

#### Syntax:

ds\_queue\_enqueue(id, val \[, val2, ... val15\]);

| Argument | Type | Description |
| --- | --- | --- |
| id | DS Queue | The handle of the queue to add to. |
| val | Any | The value to add to the queue. |
| [val2, ... val15] | Any | Optional values to be added to the queue. |

#### Returns:

N/A

#### Example:

move\_queue = ds\_queue\_create();
ds\_queue\_enqueue(move\_queue, x + 200);
ds\_queue\_enqueue(move\_queue, y);
ds\_queue\_enqueue(move\_queue, x + 200);
ds\_queue\_enqueue(move\_queue, y + 200);
ds\_queue\_enqueue(move\_queue, x);
ds\_queue\_enqueue(move\_queue, y + 200);
ds\_queue\_enqueue(move\_queue, x);
ds\_queue\_enqueue(move\_queue, y);

The above code creates a new DS queue and stores its index in the variable "move\_queue". It then pushes a number of values onto the queue for future use.