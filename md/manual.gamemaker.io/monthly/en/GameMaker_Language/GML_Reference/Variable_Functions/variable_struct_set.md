---
title: "struct_set"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Variable_Functions/variable_struct_set.htm"
converted: "2025-09-14T04:00:11.334Z"
---

# struct\_set

With this function you can set the value of a given variable in a struct. You supply the struct reference as well as the name of the variable to set the value of _as a string_ (see example code below), and then finally the value to set (can be any valid [data type](../../GML_Overview/Data_Types.md)). If the variable does not exist already in the struct it will be created and then assigned the value.

#### Syntax:

struct\_set(struct, name, val);

| Argument | Type | Description |
| --- | --- | --- |
| struct | Struct | The struct reference to set (can be the global struct) |
| name | String | The name of the variable to set (as a string) |
| val | Any | The value to set the variable to |

#### Returns:

N/A

#### Example:

if (!struct\_exists(mystruct, "shields"))
{
    struct\_set(mystruct, "shields", 0);
}

The above code will check to see if the given variable exists in the given struct and if it does not then it is created and set to 0.