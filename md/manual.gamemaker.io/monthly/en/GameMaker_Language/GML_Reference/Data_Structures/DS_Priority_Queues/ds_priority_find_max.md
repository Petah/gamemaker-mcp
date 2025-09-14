---
title: "ds_priority_find_max"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Data_Structures/DS_Priority_Queues/ds_priority_find_max.htm"
converted: "2025-09-14T03:59:47.681Z"
---

# ds\_priority\_find\_max

With this function you can find the value stored in the priority queue with the highest priority, and if more than one value has the same priority then any one of them could be returned in any order. However, unlike [ds\_priority\_delete\_max()](ds_priority_delete_max.md), this function will not remove the value from the queue.

NOTE If the priority queue is empty, this function will return undefined.

#### Syntax:

ds\_priority\_find\_max(id);

| Argument | Type | Description |
| --- | --- | --- |
| id | DS Priority | The handle of the priority queue to use. |

#### Returns:

[Any](../../../../../../../GameMaker_Language/GML_Overview/Data_Types.md) (Data type stored in the priority)

#### Example:

if (ai\_move)
{
    script\_execute(ds\_priority\_find\_max(ai\_priority));
}

The above code checks an instance variable and if it returns true it will execute a script function indexed in the priority queue with the highest priority value.