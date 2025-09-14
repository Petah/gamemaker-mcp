---
title: "part_emitter_clear"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Particles/Particle_Emitters/part_emitter_clear.htm"
converted: "2025-09-14T03:59:51.501Z"
---

# part\_emitter\_clear

With this function you can clear the given emitter from the specified particle system back to its default state. This will also stop any particles that are being streamed from the emitter at the time, and if you wish to use the emitter again you will need to set the region position and particle type using the [part\_emitter\_region()](part_emitter_region.md) function.

#### Syntax:

part\_emitter\_clear(ps, ind);

| Argument | Type | Description |
| --- | --- | --- |
| ps | Particle System Instance | The particle system that the emitter is in. |
| ind | Particle Emitter | The index of the emitter to clear. |

#### Returns:

N/A

#### Example:

part\_emitter\_clear(Sname, p\_emit1 );

The above code will clear the particle emitter indexed in the variable "p\_emit1".