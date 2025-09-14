---
title: "ds_priority_empty"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Data_Structures/DS_Priority_Queues/ds_priority_empty.htm"
converted: "2025-09-14T03:59:47.668Z"
---

# ds\_priority\_empty

With this function you can check the given DS priority queue to see if it is empty (returns true) or not (returns false).

#### Syntax:

ds\_priority\_empty(id);

| Argument | Type | Description |
| --- | --- | --- |
| id | DS Priority | The handle of the data structure to check. |

#### Returns:

[Boolean](../../../../../../../GameMaker_Language/GML_Overview/Data_Types.md)

#### Example:

if (count == 15) && (!ds\_priority\_empty(command\_queue))
{
    ds\_priority\_clear(command\_queue);
    alarm\[0\] = game\_get\_speed(gamespeed\_fps);
    ai\_count = 0;
}

The above code checks a variable to see if it has reached a specific value and if it has it clears the DS priority queue indexed in the variable "command\_queue", sets an alarm, and resets the variable to 0.