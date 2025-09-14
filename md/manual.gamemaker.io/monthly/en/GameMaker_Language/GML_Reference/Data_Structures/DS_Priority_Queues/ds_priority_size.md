---
title: "ds_priority_size"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Data_Structures/DS_Priority_Queues/ds_priority_size.htm"
converted: "2025-09-14T03:59:47.742Z"
---

# ds\_priority\_size

This function will return the "size" of the priority queue, ie: the number of items that have been prioritized in it.

#### Syntax:

ds\_priority\_size(id);

| Argument | Type | Description |
| --- | --- | --- |
| id | DS Priority | The handle of the data structure to check. |

#### Returns:

[Real](../../../../../../../GameMaker_Language/GML_Overview/Data_Types.md)

#### Example:

if (!ds\_priority\_empty(control\_priority))
{
    num = ds\_priority\_size(control\_priority);
}

The above code checks a DS priority queue to see if it is empty or not, and if it is not, it gets the number of items that it contains and stores the value in a variable.