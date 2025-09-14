---
title: "persistent"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Instances/Instance_Variables/persistent.htm"
converted: "2025-09-14T03:59:33.591Z"
---

# persistent

This variable can be read to find out if the instance is flagged as persistent or not, or it can used to set persistence to true (persistent) or false (not persistent) for the instance. A persistent instance is one that will be "carried over" from room to room, meaning (for example) that it only has to be created once at the start of the game and it will be present in all further rooms. Care should be taken with persistence as it is easy to lose track of persistent instances which can lead to problems later in the development of the game.

When you create an instance with persistence enabled in a room, this variable will be set to true and it will be assigned a layer or a depth (depending on which function you used to create the instance of the object). When the room is changed, and if the following room does _not_ have a layer with the same name or depth as the one assigned, then a new layer will be created for the instance that is persisting across the rooms. If you gave a named layer when the instance was created, then the new layer will also be named the same as original layer, while if you assigned a depth to the instance then the new layer will be named "\_layer\_XXX", where "XXX" is a hex value used to give the layer a unique name. These layers will be removed from the room on Room End. Another thing to note about layers and persistent instances is that if you have assigned the instance a named layer on creation, and there is another layer in the following rooms with the same name, then the persisted instance will be assigned to the layer with the same name _regardless of the depth of the layer_. Finally, if a persisted instance moves to a room with a layer at the same depth as the instance was created on, it will _not_ be assigned to this layer, but instead a new layer will be created at the same depth (following the naming convention explained previously).

A persistent object will still have its **Game Start**, **Game End**, **Room Start** and **Room End** events triggered, however if you restart the game (with, for example, the game\_restart() function) all persistent objects will be removed and only exist when created again by the game. Also note that if you deactivate a persistent object, it will no longer pass from one room to another unless re-activated before the Room End event is triggered.

#### Syntax:

persistent;

#### Returns:

[Boolean](../../../../GML_Overview/Data_Types.md)

#### Example:

if (!persistent)
{
    persistent = true;
}

The above code will check the instance to see if persistence is flagged as false and if the instance is NOT persistent the persistence flag is set to true.