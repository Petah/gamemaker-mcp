---
title: "ds_priority_change_priority"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Data_Structures/DS_Priority_Queues/ds_priority_change_priority.htm"
converted: "2025-09-14T03:59:47.547Z"
---

# ds\_priority\_change\_priority

This function will take a given value and change its priority within the referenced priority queue. The given value should already exist in the priority queue.

#### Syntax:

ds\_priority\_change\_priority(id, val, priority);

| Argument | Type | Description |
| --- | --- | --- |
| id | DS Priority | The handle of the priority queue to change. |
| val | Any | The value to change the priority of. |
| priority | Real | The new priority of the value. |

#### Returns:

N/A

#### Example:

if (global.Game\_Time < 1000)
{
    ds\_priority\_change(ai\_priority, AI\_Search, 1);
}

The above code checks a global variable and if it is below a certain value it will then change the priority of the script function index held in the priority queue.