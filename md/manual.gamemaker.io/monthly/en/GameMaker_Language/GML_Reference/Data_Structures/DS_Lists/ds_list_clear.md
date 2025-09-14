---
title: "ds_list_clear"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Data_Structures/DS_Lists/ds_list_clear.htm"
converted: "2025-09-14T03:59:46.697Z"
---

# ds\_list\_clear

With this function you can clear all data from the given list data-structure. This does _NOT_ destroy the data-structure (for that you should use [ds\_list\_destroy()](../../../../../../../GameMaker_Language/GML_Reference/Data_Structures/DS_Lists/ds_list_destroy.md)) it only wipes all data from it and makes the list empty (zero in size). Note that clearing a list will de-reference any data structures stored in it giving a memory leak, so you would need to go through the list and destroy all data structure items manually before clearing it to prevent this. The only time this is not required is when you have flagged any items in the list as another [DS list](DS_Lists.md) or as a [DS map](../DS_Maps/DS_Maps.md), in which case these items will be destroyed (not cleared!) and their memory cleaned up automatically when the parent is cleared.

#### Syntax:

ds\_list\_clear(id);

| Argument | Type | Description |
| --- | --- | --- |
| id | DS List | The handle of the data structure to clear. |

#### Returns:

N/A

#### Example:

if (count == 15) && (!ds\_list\_empty(command\_list))
{
    ds\_list\_clear(command\_list);
    alarm\[0\] = game\_get\_speed(gamespeed\_fps);
    ai\_count = 0;
}

The above code checks a variable to see if it has reached a specific value and if it has it clears the DS list indexed in the variable "command\_list", sets an alarm, and resets the variable to 0.