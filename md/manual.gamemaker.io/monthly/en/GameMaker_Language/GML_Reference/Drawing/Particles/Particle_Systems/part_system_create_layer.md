---
title: "part_system_create_layer"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Particles/Particle_Systems/part_system_create_layer.htm"
converted: "2025-09-14T03:59:51.979Z"
---

# part\_system\_create\_layer

This function creates a new particle system on the given layer and returns its handle.

You give the unique layer ID as returned by the function [layer\_create](../../../Asset_Management/Rooms/General_Layer_Functions/layer_create.md) or the name of the layer to use as a string - for example "instance\_layer" - and then flag the system as being persistent or not.

Optionally you can provide a [Particle System Asset](../../../../../The_Asset_Editors/Particle_Systems.md) created using [The Particle System Editor](../../../../../The_Asset_Editors/Particle_Systems.md). Doing so will create the system defined in that asset, with all of its emitters.

A system not flagged as persistent is automatically destroyed at the end of the room it was created in (this is the same as if you had called the function [part\_system\_destroy](../../../../../../../../GameMaker_Language/GML_Reference/Drawing/Particles/Particle_Systems/part_system_destroy.md) and will also destroy any emitters associated with the system). However, when flagged as persistent, the system will be carried to the next room when the room is changed, and if the following room does _not_ have a layer with the same name or depth as the one assigned, then a new layer will be created for the system that is persisting across the rooms, and it will be named the same as the original layer. When changing rooms, if there is another layer in the following rooms with the same name, then the persisted instance will be assigned to the layer with that name _regardless of the depth of the layer_. Finally, if a persisted system moves to a room with a layer at the same depth as the layer the system was created on, it will _not_ be assigned to this layer, but instead a new layer will be created at the same depth (with the same name as the original layer).

IMPORTANT A particle system created using this function flagged as _persistent_ needs to be cleaned up manually using [part\_system\_destroy](../../../../../../../../GameMaker_Language/GML_Reference/Drawing/Particles/Particle_Systems/part_system_destroy.md) when no longer used, otherwise you risk a memory leak that will negatively impact your final game.

#### Syntax:

part\_system\_create\_layer(layer\_id, persistent, \[partsys\]);

| Argument | Type | Description |
| --- | --- | --- |
| layer | String or Layer | The layer ID (or name) to assign the particle system to (can be any layer type) |
| persistent | Boolean | Flag the particle system as persistent (set to true) or not (set to false) |
| partsys | Particle System Asset | OPTIONAL The particle system asset to create an instance of |

#### Returns:

[Particle System Instance](part_system_create.md)

#### Example:

global.part\_sys = part\_system\_create\_layer("effects\_layer", true, ps\_explosion);

The above code creates a new particle system on the given layer from the ps\_explosion asset, and flags it as persisting over subsequent rooms. The ID of the particle system is stored in a global scope variable part\_sys for future reference.