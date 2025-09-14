---
title: "part_emitter_burst"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Particles/Particle_Emitters/part_emitter_burst.htm"
converted: "2025-09-14T03:59:51.486Z"
---

# part\_emitter\_burst

This function sets an emitter to burst a specific type of particle.

NOTE Should you need the particles to appear every step, you should be using the function [part\_emitter\_stream](part_emitter_stream.md) rather than calling this function every step.

### Usage Notes

-   This function is typically used in alarms and destroy events as it is a one-off code that creates the number of particles specified all at once following the distribution, shape and position set by the function [part\_emitter\_region](part_emitter_region.md).
-   If the emitter has relative mode enabled using [part\_emitter\_relative](part_emitter_relative.md), the number parameter does not refer to the actual number of particles created but indicates the percent coverage of the emitter region.

#### Syntax:

part\_emitter\_burst(ps, ind, parttype, number);

| Argument | Type | Description |
| --- | --- | --- |
| ps | Particle System Instance | The particle system that the emitter is in. |
| ind | Particle Emitter | The index of the emitter to burst from. |
| parttype | Particle Type | The index (type) of the particles to be created. |
| number | Real | The number of particles to create, or the density (i.e. percent coverage of the emitter region) with relative mode enabled (see part_emitter_relative) |

#### Returns:

N/A

#### Example:

part\_emitter\_burst(global.Sname, p\_emit1, p1, 30 + irandom(30));

The above code will burst a random number of particles between 30 and 60 from the chosen emitter.