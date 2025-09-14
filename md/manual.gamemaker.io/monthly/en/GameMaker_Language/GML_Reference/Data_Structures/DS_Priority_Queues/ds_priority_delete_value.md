---
title: "ds_priority_delete_value"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Data_Structures/DS_Priority_Queues/ds_priority_delete_value.htm"
converted: "2025-09-14T03:59:47.636Z"
---

# ds\_priority\_delete\_value

This function will simply delete the given value, along with its priority, from the indexed priority queue.

#### Syntax:

ds\_priority\_delete\_value(id,val);

| Argument | Type | Description |
| --- | --- | --- |
| id | DS Priority | The handle of the priority queue to use. |
| val | Any | The value to delete from the priority queue. |

#### Returns:

N/A

#### Example:

if (ai\_move == false)
{
    ds\_priority\_delete\_value(ai\_priority, AI\_Move);
}

The above code checks an instance variable and if it returns false it will remove the indexed script function from the priority queue.