---
title: "instance_id_get"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Instances/instance_id_get.htm"
converted: "2025-09-14T03:59:33.949Z"
---

# instance\_id\_get

With this function you can get the unique handle of any instance from the currently active instance list. You give the index in the instance list to get the ID from and the function will return the value for storing in a variable.

#### Syntax:

instance\_id\_get(index);

| Argument | Type | Description |
| --- | --- | --- |
| index | Real | The index within the instance list from 0 to instance count - 1. |

#### Returns:

[Object Instance](Instance_Variables/id.md)

#### Example:

for (var i = 0; i < instance\_count; ++i;)
{
    var temp\_id = instance\_id\_get(i);
    with (temp\_id)
    {
        speed += 0.1;
    }
}

The above code will loop through all instances within the room and add 0.1 to their speed.