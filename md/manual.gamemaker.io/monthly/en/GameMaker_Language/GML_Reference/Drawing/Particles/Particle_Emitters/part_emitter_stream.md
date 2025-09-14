---
title: "part_emitter_stream"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Particles/Particle_Emitters/part_emitter_stream.htm"
converted: "2025-09-14T03:59:51.759Z"
---

# part\_emitter\_stream

This function sets an emitter to stream a specific type of particle.

NOTE Should you need the particles to appear all at once rather than every step, you should be using the function [part\_emitter\_burst](part_emitter_burst.md).

### Usage Notes

-   This function is typically used in the Create event as it is a one-off code that sets the emitter to generate the number of particles specified every step of the game thereafter.
-   The particles are emitted following the distribution, shape and position set by the function [part\_emitter\_region](part_emitter_region.md).
-   You can set the number of particles being streamed to zero and call this function again to "switch off" the particle streaming, and the function will also accept negative numbers for the amount, in which case the emitter will produce particles based on random chance. For example, if you have the particle number set to -5, there is a 1:5 chance that a particle will be produced every step.
-   If the emitter has relative mode enabled using [part\_emitter\_relative](part_emitter_relative.md), the number parameter does not refer to the actual number of particles created but indicates the percent coverage of the emitter region.

#### Syntax:

part\_emitter\_stream(ps, ind, parttype, number);

| Argument | Type | Description |
| --- | --- | --- |
| ps | Particle System Instance | The particle system that the emitter is in. |
| ind | Particle Emitter | The index of the emitter to stream from. |
| parttype | Particle Type | The index (type) of the particles to be created. |
| number | Real | The number of particles to create per step, or the density (i.e. percent coverage of the emitter region) with relative mode enabled (see part_emitter_relative) |

#### Returns:

N/A

#### Example:

part\_emitter\_stream(global.Sname, p\_emit1, p1, 1);

The above code will stream 1 particle every step of the game until the emitter is destroyed or the stream set to 0.