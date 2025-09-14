---
title: "ds_stack_destroy"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Data_Structures/DS_Stacks/ds_stack_destroy.htm"
converted: "2025-09-14T03:59:48.034Z"
---

# ds\_stack\_destroy

This function will remove the given stack data structure from memory, freeing up the resources it was using and removing all values that it contained. This function should always be used when you are finished using the DS stack to prevent memory leaks that can slow down and crash your game.

NOTE You should always set the variable that held the data structure handle to \-1 after calling this function, as handle indices are recycled and the variable may unintentionally hold an active resource when the held index is eventually reused. See **Usage Notes** under **Handles** on [Data Types](../../../../../../../GameMaker_Language/GML_Overview/Data_Types.md) for more information.

#### Syntax:

ds\_stack\_destroy(id);

| Argument | Type | Description |
| --- | --- | --- |
| id | DS Stack | The stack data structure to remove |

#### Returns:

N/A

#### Example:

if (lives == 0)
{
    ds\_stack\_destroy(AI\_stack);
    AI\_stack = -1;
    room\_goto(rm\_Menu);
}

The above code will check the value of the built-in global variable [lives](../../../../../../../GameMaker_Language/GML_Overview/Variables/Builtin_Global_Variables/lives.md) and if it is 0, it destroys the DS stack referenced in the variable AI\_stack and then changes rooms.