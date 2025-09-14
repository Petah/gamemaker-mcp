---
title: "part_emitter_exists"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Particles/Particle_Emitters/part_emitter_exists.htm"
converted: "2025-09-14T03:59:51.630Z"
---

# part\_emitter\_exists

With this function you can check to see if the given particle emitter indexed exists in the given system or not. Note that if the variable being checked is an uninitialised variable (that a particle emitter would otherwise have its index assigned to) this will throw an error.

#### Syntax:

part\_emitter\_exists(ps, ind);

| Argument | Type | Description |
| --- | --- | --- |
| ps | Particle System Instance | The particle system to check for an emitter. |
| ind | Particle Emitter | The index of the emitter to search for. |

#### Returns:

[Boolean](../../../../../../../../GameMaker_Language/GML_Overview/Data_Types.md)

#### Example:

if (part\_emitter\_exists(sname, p\_emit1))
{
    part\_emitter\_burst(sname, p\_emit1, part\_1, 30);
}

The above code will check for the emitter indexed in the variable "permit" and if it exists, it will burst 30 particles from it.