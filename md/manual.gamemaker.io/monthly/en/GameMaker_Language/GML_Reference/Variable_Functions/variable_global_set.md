---
title: "variable_global_set"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Variable_Functions/variable_global_set.htm"
converted: "2025-09-14T04:00:11.132Z"
---

# variable\_global\_set

With this function you can set the value of a given global variable. You supply the name of the global variable to set the value of _as a string_ (see example code below), and then the value to set (can be any valid [data type](../../GML_Overview/Data_Types.md)). If the global variable does not exist already in the game it will be created and then assigned the value.

#### Syntax:

variable\_global\_set(name, val);

| Argument | Type | Description |
| --- | --- | --- |
| name | String | The name of the global variable to set (as a string) |
| val | Any | The value to set the global variable to |

#### Returns:

N/A

#### Example:

if (!variable\_global\_exists("enemy\_num"))
{
    variable\_global\_set("enemy\_num", 0);
}

The above code will check to see if a global variable exists and if it does not then it is created and set to 0.