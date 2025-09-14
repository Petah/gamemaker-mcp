---
title: "variable_global_get"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Variable_Functions/variable_global_get.htm"
converted: "2025-09-14T04:00:11.113Z"
---

# variable\_global\_get

With this function you can get the value from a given named global variable. You supply the name of the global variable to get the value of _as a string_ (see example code below) and the function will return the value held by the global variable or undefined if the variable does not exist.

**IMPORTANT** If the global variable you are getting does not exist then the function will return the keyword undefined and you may get errors that will stop the game from functioning, so if in doubt use the function [variable\_global\_exists](variable_global_exists.md) first.

#### Syntax:

variable\_global\_get(name);

| Argument | Type | Description |
| --- | --- | --- |
| name | String | The name of the global variable to get (as a string) |

#### Returns:

[Any](../../GML_Overview/Data_Types.htm#variable) (any data type) or [undefined](../../GML_Overview/Data_Types.md) (if the named variable does not exist)

#### Example:

if (variable\_global\_exists("enemy\_num"))
{
    show\_debug\_message("enemy\_num = " + string(variable\_global\_get("enemy\_num"));)
}

The above code will check to see if a global variable exists and if it does then it is output to the console.