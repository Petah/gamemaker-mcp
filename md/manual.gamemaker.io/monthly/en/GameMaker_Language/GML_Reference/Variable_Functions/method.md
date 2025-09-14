---
title: "method"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Variable_Functions/method.htm"
converted: "2025-09-14T04:00:10.748Z"
---

# method

With this function you can bind an existing function (or method) to the given instance or struct, creating a new [method variable](../../GML_Overview/Method_Variables.md) that can be used later.

You supply the instance ID to use (an instance that is active in the room, and not an object index) or a struct reference, as well as the function ID (or method reference) that you want to bind. The function will return a new method which can be called from the variable it is assigned to (see the code example below).

The returned method will be "bound" to the given instance or struct, meaning it will always execute in the scope of that instance/struct.

You can bind built-in functions as well as user-defined functions/methods, and you can also supply undefined as the instance/struct argument meaning that the current [self](../../GML_Overview/Instance%20Keywords/self.md) scope will be used for the binding.

#### Syntax:

method(struct\_ref\_or\_instance\_id, func);

| Argument | Type | Description |
| --- | --- | --- |
| struct_ref_or_instance_id | Struct or Object Instance | The unique reference or ID value of the struct or instance to use (can be self or undefined) |
| func | Script Function or Method | The ID of the function (or method reference) to use |

#### Returns:

[Method](../../GML_Overview/Method_Variables.md)

#### Example:

var \_inst = instance\_position(mouse\_x, mouse\_y, obj\_enemy);
if (instance\_exists(\_inst))
{
    enemy\_func = method(\_inst, enemy\_ai);
}

The above code will check if an enemy instance exists at the mouse position. If it does then the enemy\_ai method is bound to the enemy instance and returned as a new method variable enemy\_func.