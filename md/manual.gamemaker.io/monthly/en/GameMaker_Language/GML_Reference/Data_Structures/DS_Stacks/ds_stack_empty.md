---
title: "ds_stack_empty"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Data_Structures/DS_Stacks/ds_stack_empty.htm"
converted: "2025-09-14T03:59:48.047Z"
---

# ds\_stack\_empty

With this function you can check the given DS stack to see if it is empty (returns true) or not (returns false).

#### Syntax:

ds\_stack\_empty(id);

| Argument | Type | Description |
| --- | --- | --- |
| id | DS Stack | The handle of the data structure to check. |

#### Returns:

[Boolean](../../../GML_Overview/Data_Types.md)

#### Example:

if (ai\_count == 15 && !ds\_stack\_empty(AI\_stack))
{
    ds\_stack\_clear(AI\_stack);
    alarm\[0\] = game\_get\_speed(gamespeed\_fps);
    ai\_count = 0;
}

The above code checks a variable to see if it has reached a specific value and if it has it clears the DS stack indexed in the variable "AI\_stack", sets an alarm, and resets the variable to 0.