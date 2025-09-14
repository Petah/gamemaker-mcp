---
title: "id"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Instances/Instance_Variables/id.htm"
converted: "2025-09-14T03:59:33.550Z"
---

# id

This **read-only** variable holds the unique identifying handle for the instance. Every instance that you create - whether through code or by adding them to a room in the Room Editor - is given a handle that is used internally to identify this instance and the variable id is what you can use to reference it. The id is also returned (and can be stored in a variable) when an instance is created using [instance\_create\_layer](../instance_create_layer.md) or [instance\_create\_depth](../instance_create_depth.md), as well as other instance functions.

NOTE The value of this variable is _not_ the same as the identifier that the instance is given in the Room Editor and is also different to the [instance\_id](../instance_id.md) array which contains all the IDs of all the currently active instances.

#### Syntax:

id

#### Returns:

[Object Instance](id.md)

#### Example:

for (var i = 0; i < instance\_count; i++;)
{
    if (instance\_id\[i\] != id)
    {
        instance\_id\[i\].scr += 5;
    }
}

The above code adds 5 to the "scr" variable for every active instance in the room except the one running the code. It does this by looping through ALL the active instances (using the "instance\_id" array to return each active instances ID) and comparing them against the built-in "id" variable, which is the ID of the original instance running the code.