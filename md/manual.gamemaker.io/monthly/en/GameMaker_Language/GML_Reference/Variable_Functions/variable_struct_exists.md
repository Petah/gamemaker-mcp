---
title: "struct_exists"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Variable_Functions/variable_struct_exists.htm"
converted: "2025-09-14T04:00:11.259Z"
---

# struct\_exists

This function checks whether a variable exists within the given struct or not. You supply the struct reference to use as well as the variable name to check for _as a string_ (see example code below). The function will return true if a variable with the given name exists for the struct and false otherwise.

#### Syntax:

struct\_exists(struct, name);

| Argument | Type | Description |
| --- | --- | --- |
| struct | Struct | The struct reference to check |
| name | String | The name of the struct variable to check for (as a string) |

#### Returns:

[Boolean](../../GML_Overview/Data_Types.md)

#### Example:

if !struct\_exists(mystruct, "shields")
{
    mystruct.shields = 0;
}

The above code will check to see if the variable called "shields" exists in the given struct and if it does not then it is created and initialised to 0.