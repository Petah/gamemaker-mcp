---
title: "instance_create_layer"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Instances/instance_create_layer.htm"
converted: "2025-09-14T03:59:33.854Z"
---

# instance\_create\_layer

With this function you can create a new instance of the specified object at any given point within the room and on the layer specified. The layer can be identified using the layer handle (as returned by the function [layer\_create](../Rooms/General_Layer_Functions/layer_create.md)) or by the name of the layer (as a string, for example "instance\_layer") as defined in [The Room Editor](../../../../The_Asset_Editors/Rooms.md).

This function returns the [id](Instance_Variables/id.md) of the new instance which can then be stored in a variable and used to access that instance. Note that this function will also call the [Create Event](../../../../The_Asset_Editors/Object_Properties/Object_Events.md) of the instance being created _before_ continuing with the code or actions for the event that called the function.

IMPORTANT There is a minimum and maximum layer depth of \-16000 to 16000. Anything placed on a layer outside that range will not be drawn although all events will still run as normal for anything on the layer.

NOTE This function behaves differently when you call it after calling a room-changing function in the same event. See the note on [room\_goto](../Rooms/room_goto.md) for details.

## Optional Struct

The last argument, var\_struct, is optional and takes a struct containing additional variables for the new instance.

Variables from this struct are applied to the new instance _before_ its Create event runs, but _after_ its [Variable Definitions](../../../../The_Asset_Editors/Object_Properties/Object_Variables.md).

This means that the values from that struct are readable in the Create event of the new instance. See **Example 2** at the bottom.

Values applied to the new instance through this struct can be of any type, including [Method Variables](../../../GML_Overview/Method_Variables.md). [Built-in variables](Instance_Variables/Instance_Variables.md) can be changed as well.

NOTE Variables from the struct are "shallow-copied" to the new instance, meaning any arrays, structs, and other resources are copied by reference and not duplicated.

#### Syntax:

instance\_create\_layer(x, y, layer\_id, obj, \[var\_struct\]);

| Argument | Type | Description |
| --- | --- | --- |
| x | Real | The x position the object will be created at |
| y | Real | The y position the object will be created at |
| layer_id | Layer or String | The layer handle (or name) to assign the created instance to |
| obj | Object Asset | The object index of the object to create an instance of |
| var_struct | Struct | OPTIONAL A struct with variables to assign to the new instance |

#### Returns:

[Object Instance](Instance_Variables/id.md)

#### Example 1:

var inst = instance\_create\_layer(x, y, "Instances", obj\_bullet);
with (inst)
{
    speed = other.shoot\_speed;
    direction = other.image\_angle;
}

The above code creates a new instance of the object obj\_bullet in the "Instances" layer, and stores the instance ID in a variable. This variable is then used to assign speed and direction to the new instance.

This will first create the instance, run its Create event, and _then_ assign values to its variables.

If you want to assign some variables _before_ the Create event runs, see the example below.

#### Example 2:

var inst = instance\_create\_layer(x, y, "Instances", obj\_bullet,
{
    speed : shoot\_speed,
    direction : image\_angle
});

The above code creates an instance of obj\_bullet, and passes in a struct as the last argument.

That struct has variables for the speed and direction. It pulls its values from the calling instance, without the need to use other.

These variables are applied to the new instance before its Create event runs.

You're not limited to a struct literal, as you can also pass in a variable that stores an existing struct, or create a [new](../../../GML_Overview/Language_Features/new.md) struct from a [constructor](../../../GML_Overview/Structs.htm#constr).