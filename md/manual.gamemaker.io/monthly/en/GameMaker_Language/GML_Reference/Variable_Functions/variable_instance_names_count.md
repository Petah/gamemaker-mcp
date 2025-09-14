---
title: "variable_instance_names_count"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Variable_Functions/variable_instance_names_count.htm"
converted: "2025-09-14T04:00:11.216Z"
---

# variable\_instance\_names\_count

This function returns the total number of variables defined for an instance.

You supply the instance ID to check, and the function will return an integer value for the number of variables encountered, or (in case no instance of the given ID exists) -1.

#### Syntax:

variable\_instance\_names\_count(instance\_id);

| Argument | Type | Description |
| --- | --- | --- |
| instance_id | Object Instance | The unique ID value of the instance to check. |

#### Returns:

[Real](../../GML_Overview/Data_Types.md) (the number of variables or -1 if invalid instance ID)

#### Example:

ins\_player = instance\_create\_depth(0, 0, 0, obj\_player);
var \_num = variable\_instance\_names\_count(ins\_player);
show\_debug\_message($"The player instance has {\_num} variables.");

The above code will retrieve the number of variables in the given instance and show a debug message in the console output with that value.