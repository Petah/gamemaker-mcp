---
title: "ds_stack_top"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Data_Structures/DS_Stacks/ds_stack_top.htm"
converted: "2025-09-14T03:59:48.134Z"
---

# ds\_stack\_top

This function will _only_ read the first value of the stack (that which is "on top"). It will not _pop_ the value, meaning that it can still be read in the future by this function or the [ds\_stack\_pop()](ds_stack_pop.md). If the stack is empty then the function will return the constant undefined, otherwise it will return the real or string value contained in the stack.

#### Syntax:

ds\_stack\_top(id);

| Argument | Type | Description |
| --- | --- | --- |
| id | DS Stack | The handle of the data structure to read from. |

#### Returns:

[Any](../../../../../../../GameMaker_Language/GML_Overview/Data_Types.md) (Data type value that is stored in the stack) or [undefined](../../../../../../../GameMaker_Language/GML_Overview/Data_Types.md)

#### Example:

num = ds\_stack\_top(control\_stack);

The above code will read the value from the stack indexed in the variable "control\_stack" and store the return value in the variable "num".