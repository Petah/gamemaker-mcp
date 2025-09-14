---
title: "ds_priority_copy"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Data_Structures/DS_Priority_Queues/ds_priority_copy.htm"
converted: "2025-09-14T03:59:47.580Z"
---

# ds\_priority\_copy

This function can be used to copy the contents of one priority queue (source) into another (destination). Note that this does _NOT_ remove the contents from the source priority queue, nor does it destroy the source priority queue. When using this function the priority queue being copied to must have been previously created and if it contained any items before the copy, then these will be cleared first (meaning this information will be lost).

#### Syntax:

ds\_priority\_copy(destination, source);

| Argument | Type | Description |
| --- | --- | --- |
| destination | DS Priority | The handle of the priority queue to copy to. |
| source | DS Priority | The handle of the priority queue to copy from. |

#### Returns:

N/A

#### Example:

with (instance\_create\_layer(x, y, "Enemies", obj\_Enemy))
{
    p\_queue = ds\_priority\_create();
    ds\_priority\_copy(p\_queue, other.p\_queue);
}

The above function creates a new instance and then in that instance it creates a new DS priority queue and copies the contents of the priority queue in the instance running the code block, into the newly created instance priority queue.