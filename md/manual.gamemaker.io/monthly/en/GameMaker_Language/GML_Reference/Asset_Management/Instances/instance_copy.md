---
title: "instance_copy"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Instances/instance_copy.htm"
converted: "2025-09-14T03:59:33.801Z"
---

# instance\_copy

This function "clones" an instance as this will create a new version of the instance running the code at its same position.

The perf argument is used to instruct this new instance to perform the Create event or not. This function returns the [id](Instance_Variables/id.md) of the new instance which can then be stored in a variable or used to access that instance.

**NOTE** If you choose not to perform the Create event, you may encounter errors if the instance depends on any variables initialised in this event.

#### Syntax:

instance\_copy(perf);

| Argument | Type | Description |
| --- | --- | --- |
| perf | Boolean | Whether to perform the new instance's Create event (true) or not (false). |

#### Returns:

[Object Instance](Instance_Variables/id.md)

#### Example:

var \_inst = instance\_number(object\_index);
if (\_inst < 10)
{
    instance\_copy(true);
}

The above code creates a local variable and uses it to store the number of instances of the object running the code in the room. If the number is less than 10, the instance then makes a copy of itself.