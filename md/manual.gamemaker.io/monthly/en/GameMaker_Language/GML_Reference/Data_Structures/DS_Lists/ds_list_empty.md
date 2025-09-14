---
title: "ds_list_empty"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Data_Structures/DS_Lists/ds_list_empty.htm"
converted: "2025-09-14T03:59:46.773Z"
---

# ds\_list\_empty

With this function you can check the given DS list to see if it is empty (returns true) or not (returns false).

#### Syntax:

ds\_list\_empty(id);

| Argument | Type | Description |
| --- | --- | --- |
| id | DS List id | The handle of the data structure to check. |

#### Returns:

[Boolean](../../../GML_Overview/Data_Types.md)

#### Example:

if (count == 15( && (!ds\_list\_empty(command\_list))
{
    ds\_list\_clear(command\_list);
    alarm\[0\] = game\_get\_speed(gamespeed\_fps);
    count = 0;
}

The above code checks a variable to see if it has reached a specific value and if it has it clears the DS list indexed in the variable "command\_list", sets an alarm, and resets the variable to 0.