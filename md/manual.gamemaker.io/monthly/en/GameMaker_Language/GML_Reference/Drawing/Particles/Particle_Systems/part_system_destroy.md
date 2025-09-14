---
title: "part_system_destroy"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Particles/Particle_Systems/part_system_destroy.htm"
converted: "2025-09-14T03:59:52.007Z"
---

# part\_system\_destroy

This function destroys a given particle system instance, including all particles and emitters in it, and removes it from memory.

The function should always be called when the system is no longer needed, like at the end of a room, or in the Clean Up event of an instance, otherwise you could end up with particles appearing in later rooms and have no way to remove them as well as a memory leak which will eventually crash your game.

NOTE This function does not destroy the particle types used by the particle system. Types created with [part\_type\_create](../Particle_Types/part_type_create.md) should be destroyed using [part\_type\_destroy](../Particle_Types/part_type_destroy.md).

#### Syntax:

part\_system\_destroy(ind);

| Argument | Type | Description |
| --- | --- | --- |
| ind | Particle System Instance | The particle system to destroy. |

#### Returns:

N/A

#### Example:

Create Event

part\_sys = part\_system\_create(ps\_effects);

Clean Up Event

part\_system\_destroy(part\_sys);

The above code shows how to create a particle system instance from an asset and destroy it.

In the Create event, a particle system instance is created using [part\_system\_create](part_system_create.md) from an existing asset ps\_effects created in [The Particle System Editor](../../../../../../../../The_Asset_Editors/Particle_Systems.md). The instance is stored in a variable part\_sys. In the Clean Up event, the particle system instance, including the emitters and particles in it, is destroyed using part\_system\_destroy.