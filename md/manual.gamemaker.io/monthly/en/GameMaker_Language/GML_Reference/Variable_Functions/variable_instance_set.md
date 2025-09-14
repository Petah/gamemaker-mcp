---
title: "variable_instance_set"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Variable_Functions/variable_instance_set.htm"
converted: "2025-09-14T04:00:11.240Z"
---

# variable\_instance\_set

With this function you can set the value of a given variable in an instance. You supply the unique instance ID value (which can be found from the [Instance Properties](../../../The_Asset_Editors/Room_Properties/Layer_Properties.md) in the room editor, or is returned when you call the function [instance\_create\_layer()](../Asset_Management/Instances/instance_create_layer.md)) as well as the name of the variable to set the value of _as a string_ (see example code below), and then finally the value to set (can be any valid [data type](../../GML_Overview/Data_Types.md)). If the variable does not exist already in the instance it will be created and then assigned the value.

#### Syntax:

variable\_instance\_set(instance\_id, name, val);

| Argument | Type | Description |
| --- | --- | --- |
| instance_id | Object Instance | The unique ID value of the instance to use |
| name | String | The name of the variable to set (as a string) |
| val | Any | The value to set the variable to |

#### Returns:

N/A

#### Example:

if (!variable\_instance\_exists(id, "shields"))
{
    variable\_instance\_set(id, "shields", 0);
}

The above code will check to see if an instance variable exists in the calling instance and if it does not then it is created and set to 0.