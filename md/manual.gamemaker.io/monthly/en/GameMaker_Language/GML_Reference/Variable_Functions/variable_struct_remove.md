---
title: "struct_remove"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Variable_Functions/variable_struct_remove.htm"
converted: "2025-09-14T04:00:11.322Z"
---

# struct\_remove

This function removes a variable from a struct. You supply the struct ID to remove the variable from and the string name of the variable to be removed.

#### Syntax:

struct\_remove(struct, name);

| Argument | Type | Description |
| --- | --- | --- |
| struct | Struct | The struct reference to remove the variable from |
| name | String | The name of the variable to remove (as a string) |

#### Returns:

N/A

#### Example:

if (struct\_exists(mystruct, "shields"))
{
    struct\_remove(mystruct, "shields");
}

The above code will check to see if the given variable exists in the given struct and if it does then it is removed.