---
title: "ds_priority_clear"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Data_Structures/DS_Priority_Queues/ds_priority_clear.htm"
converted: "2025-09-14T03:59:47.561Z"
---

# ds\_priority\_clear

With this function you can clear all data from the given priority queue data-structure. This does _NOT_ destroy the data-structure (for that you should use [ds\_priority\_destroy()](ds_priority_destroy.md)) it only wipes all data from it and returns an empty priority queue.

#### Syntax:

ds\_priority\_clear(id);

| Argument | Type | Description |
| --- | --- | --- |
| id | DS Priority | The handle of the data structure to clear. |

#### Returns:

N/A

#### Example:

if (count = 15) && (!ds\_priority\_empty(command\_queue))
{
    ds\_priority\_clear(command\_queue);
    alarm\[0\] = game\_get\_speed(gamespeed\_fps);
    ai\_count = 0;
}

The above code checks a variable to see if it has reached a specific value and if it has it clears the DS priority queue indexed in the variable "command\_queue", sets an alarm, and resets the variable to 0.