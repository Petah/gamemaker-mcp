---
title: "part_emitter_destroy"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Particles/Particle_Emitters/part_emitter_destroy.htm"
converted: "2025-09-14T03:59:51.581Z"
---

# part\_emitter\_destroy

This function removes the specified emitter from the given particle system and clears it from memory.

This will also stop any particles from being produced by the given emitter. Existing particles created by this emitter are _not_ removed from the particle system.

This function should always be called when the given emitter is no longer needed for the system to prevent memory leaks and errors.

NOTE To destroy a particle system including all existing emitters and particles in it use [part\_system\_destroy](../../../../../../../../GameMaker_Language/GML_Reference/Drawing/Particles/Particle_Systems/part_system_destroy.md).

#### Syntax:

part\_emitter\_destroy( ps, ind );

| Argument | Type | Description |
| --- | --- | --- |
| ps | Particle System Instance | The particle system to destroy the emitter from. |
| ind | Particle Emitter | The index of the emitter to destroy. |

#### Returns:

N/A

#### Example:

if (part\_emitter\_exists(global.Sname, p\_emit))
{
    part\_emitter\_destroy(global.Sname, p\_emit);
}

The above code will check to see if the particle emitter indexed in the variable p\_emit exists in the give particle system and if it does it is destroyed.