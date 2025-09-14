---
title: "ds_queue_size"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Data_Structures/DS_Queues/ds_queue_size.htm"
converted: "2025-09-14T03:59:47.925Z"
---

# ds\_queue\_size

This function will return the "size" of the queue, ie: the number of items that have been queued onto it.

#### Syntax:

ds\_queue\_size(id);

| Argument | Type | Description |
| --- | --- | --- |
| id | DS Queue | The handle of the data structure to check. |

#### Returns:

[Real](../../../GML_Overview/Data_Types.md)

#### Example:

if (!ds\_queue\_empty(control\_queue))
{
    num = ds\_queue\_size(control\_queue);
}

The above code checks a DS queue to see if it is empty or not, and if it is not, it gets the number of items that it contains and stores the value in a variable.