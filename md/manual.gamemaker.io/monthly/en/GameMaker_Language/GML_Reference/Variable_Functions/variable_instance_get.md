---
title: "variable_instance_get"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Variable_Functions/variable_instance_get.htm"
converted: "2025-09-14T04:00:11.162Z"
---

# variable\_instance\_get

With this function you can get the value from a given named variable. You supply the unique instance ID value (which can be found from the [Instance Properties](../../../The_Asset_Editors/Room_Properties/Layer_Properties.md) in the room editor, or is returned when you call the function [instance\_create\_layer()](../Asset_Management/Instances/instance_create_layer.md)) as well as the name of the variable to get the value of _as a string_ (see example code below). The function will return the value held by the variable, or undefined if the variable does not exist.

**IMPORTANT!** If the variable you are getting does not exist then the function will return the keyword undefined and you may get errors that will stop the game from functioning, so if in doubt use the function [variable\_instance\_exists](variable_instance_exists.md) first.

#### Syntax:

variable\_instance\_get(instance\_id, name);

| Argument | Type | Description |
| --- | --- | --- |
| instance_id | Object Instance | The unique ID value of the instance to use |
| name | String | The name of the variable to get (as a string) |

#### Returns:

[Any](../../GML_Overview/Data_Types.htm#variable) (any data type) or [undefined](../../GML_Overview/Data_Types.md) (if the named variable does not exist)

#### Example:

if (variable\_instance\_exists(id, "shields"))
{
    var ss = variable\_instance\_get(id, "shields");
}
else
{
    var ss = -1;
}

The above code will check to see if a variable exists and if it does then the value it holds is retrieved and stored in a local variable. If it does not exist, the local variable is set to -1.