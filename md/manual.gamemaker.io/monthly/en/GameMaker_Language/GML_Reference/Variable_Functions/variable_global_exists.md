---
title: "variable_global_exists"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Variable_Functions/variable_global_exists.htm"
converted: "2025-09-14T04:00:11.101Z"
---

# variable\_global\_exists

With this function you can check whether a global scope variable exists or not. You supply the global variable name to check for _as a string_ (see example code below) and the function will return true if a global variable with the given name exists or false otherwise.

#### Syntax:

variable\_global\_exists(name);

| Argument | Type | Description |
| --- | --- | --- |
| name | String | The name of the global variable to check for (as a string) |

#### Returns:

[Boolean](../../GML_Overview/Data_Types.md)

#### Example:

if (!variable\_global\_exists("enemy\_num"))
{
    global.enemy\_num = instance\_number(obj\_Enemey\_Parent);
}

The above code will check to see if the global variable called enemy\_num exists and if it does not it is created and set a value.