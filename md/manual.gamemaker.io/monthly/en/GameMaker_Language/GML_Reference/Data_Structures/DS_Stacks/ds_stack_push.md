---
title: "ds_stack_push"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Data_Structures/DS_Stacks/ds_stack_push.htm"
converted: "2025-09-14T03:59:48.075Z"
---

# ds\_stack\_push

This function will _push_ (add) a value, which can be of any data type, onto the top of the stack. The function can take any number of additional arguments, permitting you to push multiple values consecutively to the stack in a single call.

#### Syntax:

ds\_stack\_push(id, val \[, val2, ...\]);

| Argument | Type | Description |
| --- | --- | --- |
| id | DS Stack | The handle of the data structure to push onto. |
| val | Any | The value to push onto the stack. |
| [val2, ...] | Any | Optional values to be added to the stack, each one a new argument. |

#### Returns:

N/A

#### Example:

move\_stack = ds\_stack\_create();
ds\_stack\_push(move\_stack, x, y, x, y + 200, x + 200, y + 200, x + 200, y);

The above code creates a new DS stack and stores its index in the variable "move\_stack". It then pushes a number of values onto the stack for future use.