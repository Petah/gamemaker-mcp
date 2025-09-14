---
title: "ds_priority_find_priority"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Data_Structures/DS_Priority_Queues/ds_priority_find_priority.htm"
converted: "2025-09-14T03:59:47.712Z"
---

# ds\_priority\_find\_priority

With this function you can retrieve the priority of any given value. If the value does not exist in the priority queue then undefined will be returned.

#### Syntax:

ds\_priority\_find\_priority(id, val);

| Argument | Type | Description |
| --- | --- | --- |
| id | DS Priority | The handle of the priority queue to use. |
| val | Any | The value to find the priority of. |

#### Returns:

[Real](../../../../../../../GameMaker_Language/GML_Overview/Data_Types.md) or [undefined](../../../../../../../GameMaker_Language/GML_Overview/Data_Types.md)

#### Example:

p = ds\_priority\_find\_priority(ai\_priority, "intelligence");

The above code will store the returned priority for the given value in the instance variable "p".