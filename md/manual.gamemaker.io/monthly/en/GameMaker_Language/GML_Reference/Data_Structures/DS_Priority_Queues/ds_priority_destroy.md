---
title: "ds_priority_destroy"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Data_Structures/DS_Priority_Queues/ds_priority_destroy.htm"
converted: "2025-09-14T03:59:47.649Z"
---

# ds\_priority\_destroy

This function will remove the given priority queue data structure from memory, freeing up the resources it was using and removing all values that it contained. This function should always be used when you are finished using the DS priority queue to prevent memory leaks that can slow down and crash your game.

NOTE You should always set the variable that held the data structure handle to \-1 after calling this function, as handle indices are recycled and the variable may unintentionally hold an active resource when the held index is eventually reused. See **Usage Notes** under **Handles** on [Data Types](../../../GML_Overview/Data_Types.md) for more information.

#### Syntax:

ds\_priority\_destroy(id);

| Argument | Type | Description |
| --- | --- | --- |
| id | DS Priority | The priority queue data structure to remove |

#### Returns:

N/A

#### Example:

if (lives == 0)
{
    ds\_priority\_destroy(AI\_queue);
    AI\_queue = -1;
    room\_goto(rm\_Menu);
}

The above code will check the value of the built-in global variable [lives](../../../../../../../GameMaker_Language/GML_Overview/Variables/Builtin_Global_Variables/lives.md) and if it is 0, it destroys the DS priority queue referenced in the variable AI\_queue and then changes rooms.