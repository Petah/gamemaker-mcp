---
title: "variable_instance_get_names"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Variable_Functions/variable_instance_get_names.htm"
converted: "2025-09-14T04:00:11.190Z"
---

# variable\_instance\_get\_names

With this function you can retrieve an array populated with the **instance** variable names for an instance, or the **global** variables for a game. When you pass in an instance ID value, each entry in the array will be a string of the variable name that corresponds to an [instance scope](../../GML_Overview/Variables_And_Variable_Scope.md) variable that has been created in the instance. However if you pass in the keyword global, each entry in the array will be a string of the variable name that corresponds to an [global scope](../../GML_Overview/Variables_And_Variable_Scope.md) variable.

#### Syntax:

variable\_instance\_get\_names(instance\_id/global);

| Argument | Type | Description |
| --- | --- | --- |
| instance_id/global | Object Instance or global | The unique ID value of the instance to check or the keyword global |

#### Returns:

[Array](../../GML_Overview/Arrays.md) (each entry is a string)

#### Example:

var str = "";
var array = variable\_instance\_get\_names(id);
show\_debug\_message("Variables for " + object\_get\_name(object\_index) + string(id));
for (var i = 0; i < array\_length(array); i++;)
{
    str = array\[i\] + ":" + string(variable\_instance\_get(id, array\[i\]));
    show\_debug\_message(str);
}

The above code will retrieve an array of all instance scope variables for the instance running the code block and then display these along with their values in the debug output.