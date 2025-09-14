---
title: "object_set_persistent"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Objects/object_set_persistent.htm"
converted: "2025-09-14T03:59:34.483Z"
---

# object\_set\_persistent

With this function you can set the persistence of a specific object. A persistent object is "carried over" from room to room and maintains its properties at all times (for more information on persistence see the section on the [Object Editor](../../../../The_Asset_Editors/Objects.md)). Setting the persistence of the object means that all instances of this object that are created _after the persistence has been changed_ will be created persistent, while instances that are already in the room may not be affected.

When you create an instance with persistence enabled in a room, it will be assigned a layer or a depth (depending on which function you used to create the instance of the object). When the room is changed, and if the following room does _not_ have a layer with the same name or depth as the one assigned, then a new layer will be created for the instance that is persisting across the rooms. If you gave a named layer when the instance was created, then the new layer will also be named the same as original layer, while if you assigned a depth to the instance then the new layer will be named "\_layer\_XXX", where "XXX" is a hex value used to give the layer a unique name. These layers will be removed from the room on Room End. Another thing to note about layers and persistent instances is that if you have assigned the instance a named layer on creation, and there is another layer in the following rooms with the same name, then the persisted instance will be assigned to the layer with the same name _regardless of the depth of the layer_. Finally, if a persisted instance moves to a room with a layer at the same depth as the instance was created on, it will _not_ be assigned to this layer, but instead a new layer will be created at the same depth (following the naming convention explained previously).

Please note that this is not an instance function! You can set the persistent flag of individual instances using the [persistent](../Instances/Instance_Variables/persistent.md) variable and so have ten instances all flagged as persistent even though the object in question has the flag set to false in the IDE, and even if you change the persistent flag of the object to true using this function, all instances that currently in the room will remain as they were, and only instances created after calling the function will start with persistent flagged as true.

#### Syntax:

object\_set\_persistent(index, pers);

| Argument | Type | Description |
| --- | --- | --- |
| index | Object Asset | The index of the object to change. |
| pers | Boolean | Whether the object should be flagged as persistent (true) or not (false). |

#### Returns:

N/A

#### Example:

if (room == rm\_final)
{
    object\_set\_persistent(obj\_Player, false);
}
instance\_create\_layer(32, 32, "Instances", obj\_Player);

The above code checks to see in which room the instance is currently in and if it is in the specified "rm\_final" then it sets the persistence of the object "obj\_Player" to false and then creates the instance.