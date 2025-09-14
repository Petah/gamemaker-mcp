---
title: "ds_stack_write"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Data_Structures/DS_Stacks/ds_stack_write.htm"
converted: "2025-09-14T03:59:48.146Z"
---

# ds\_stack\_write

This function returns a string which can then be stored or transferred to another data structure using the [ds\_stack\_read()](../../../../../../../GameMaker_Language/GML_Reference/Data_Structures/DS_Stacks/ds_stack_read.md) function.

NOTE The returned string is not a human readable string, but rather a dump of the contents of the data structure.

#### Syntax:

ds\_stack\_write(id);

| Argument | Type | Description |
| --- | --- | --- |
| id | DS Stack | The handle of the data structure to write. |

#### Returns:

[String](../../../GML_Overview/Data_Types.md)

#### Example:

ini\_open("save.ini");
var str = ds\_stack\_write(stack);
ini\_write\_string("Stacks", "0", str);
ds\_stack\_clear(stack);
ini\_close();

The above code opens an ini file and then writes a string containing the information stored in the DS stack indexed in the variable "stack". The stack is then cleared and the ini file closed.