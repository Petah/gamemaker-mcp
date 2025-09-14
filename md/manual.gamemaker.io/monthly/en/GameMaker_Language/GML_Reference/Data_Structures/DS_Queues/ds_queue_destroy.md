---
title: "ds_queue_destroy"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Data_Structures/DS_Queues/ds_queue_destroy.htm"
converted: "2025-09-14T03:59:47.850Z"
---

# ds\_queue\_destroy

This function will remove the given queue data structure from memory, freeing up the resources it was using and removing all values that it contained. This function should always be used when you are finished using the DS queue to prevent memory leaks that can slow down and crash your game.

NOTE You should always set the variable that held the data structure handle to \-1 after calling this function, as handle indices are recycled and the variable may unintentionally hold an active resource when the held index is eventually reused. See **Usage Notes** under **Handles** on [Data Types](../../../GML_Overview/Data_Types.md) for more information.

#### Syntax:

ds\_queue\_destroy(id);

| Argument | Type | Description |
| --- | --- | --- |
| id | DS Queue | The queue data structure to remove |

#### Returns:

N/A

#### Example:

if (lives == 0)
{
    ds\_queue\_destroy(AI\_queue);
    AI\_queue = -1;
    room\_goto(rm\_Menu);
}

The above code will check the value of the built-in global variable [lives](../../../../../../../GameMaker_Language/GML_Overview/Variables/Builtin_Global_Variables/lives.md) and if it is 0, it destroys the DS queue referenced in the variable AI\_queue and then changes rooms.