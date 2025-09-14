---
title: "ds_priority_add"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Data_Structures/DS_Priority_Queues/ds_priority_add.htm"
converted: "2025-09-14T03:59:47.533Z"
---

# ds\_priority\_add

With this function you can add a value (either a real number or a string) to a priority queue, at the same time assigning it a priority value.

#### Syntax:

ds\_priority\_add(id, val, priority);

| Argument | Type | Description |
| --- | --- | --- |
| id | DS Priority | The handle of the priority queue to add to. |
| val | Any | The value to add to the priority queue. |
| priority | Real | The priority of the value to add. |

#### Returns:

N/A

#### Example:

ds\_priority\_add(ai\_priority, AI\_Search, 5);

The above code adds a script function to the priority queue indexed in the variable "ai\_priority" and assigns it a priority of 5.