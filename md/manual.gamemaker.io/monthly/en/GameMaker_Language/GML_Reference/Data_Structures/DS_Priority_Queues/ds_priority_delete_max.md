---
title: "ds_priority_delete_max"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Data_Structures/DS_Priority_Queues/ds_priority_delete_max.htm"
converted: "2025-09-14T03:59:47.605Z"
---

# ds\_priority\_delete\_max

This function will return the value that has the highest priority in the queue and then remove the value (and priority) from the data structure. If more than one value has the same priority, then any one of them could be returned in any order, but all other values with the same priority will still be in the queue.

NOTE If the priority queue is empty, this function will return 0.

#### Syntax:

ds\_priority\_delete\_max(id);

| Argument | Type | Description |
| --- | --- | --- |
| id | DS Priority | The handle of the priority queue to use. |

#### Returns:

[Any](../../../../../../../GameMaker_Language/GML_Overview/Data_Types.md) (Data type stored in the priority)

#### Example:

if (ai\_move)
{
    script\_execute(ds\_priority\_delete\_max(ai\_priority));
}

The above code checks an instance variable and if it returns true it will execute a script indexed in the priority queue with the highest priority value and then remove that script from the queue.