---
title: "part_particles_clear"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Particles/Particle_Systems/part_particles_clear.htm"
converted: "2025-09-14T03:59:51.814Z"
---

# part\_particles\_clear

This function clears all particles currently created by the system from the room.

It does _not_ reset or remove the particle types themselves, just their visual representation, and if you have any object streaming particles from an emitter, these particles disappear but will begin to appear again the next step after calling this code.

#### Syntax:

part\_particles\_clear(ind);

| Argument | Type | Description |
| --- | --- | --- |
| ind | Particle System Instance | The particle system. |

#### Returns:

N/A

#### Example:

if (lives <= 0)
{
    part\_particles\_clear(global.Sname);
    room\_goto(rm\_intro);
}

The above code will check the value of the variable [lives](../../../../../../../../GameMaker_Language/GML_Overview/Variables/Builtin_Global_Variables/lives.md) and if it is equal to 0, it clears all particles from the system and then changes room.