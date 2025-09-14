---
title: "struct_get"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Variable_Functions/variable_struct_get.htm"
converted: "2025-09-14T04:00:11.275Z"
---

# struct\_get

This function gets the value from a given named variable within a struct.

You supply the struct reference as well as the name of the variable to get the value of _as a string_ (see example code below). The function will return the value held by the variable or undefined if the named variable does not exist.

IMPORTANT If the variable you are getting does not exist then the function will return the keyword undefined and you may get errors that will stop the game from functioning, so if in doubt use the function [struct\_exists](variable_struct_exists.md) first.

#### Syntax:

struct\_get(struct, name);

| Argument | Type | Description |
| --- | --- | --- |
| struct | Struct | The struct reference to use (can be the global struct) |
| name | String | The name of the variable to get (as a string) |

#### Returns:

[Any](../../GML_Overview/Data_Types.htm#variable) (any data type) or [undefined](../../GML_Overview/Data_Types.md) (if the named variable does not exist)

#### Example:

if (struct\_exists(mystruct, "shields"))
{
    var ss = struct\_get(mystruct, "shields");
}
else
{
    var ss = -1;
}

The above code will check to see if a variable exists in the given struct and if it does then the value it holds is retrieved and stored in a local variable. If it does not exist, the local variable is set to -1.