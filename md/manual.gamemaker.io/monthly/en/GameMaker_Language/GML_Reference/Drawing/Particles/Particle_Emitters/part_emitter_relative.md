---
title: "part_emitter_relative"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Particles/Particle_Emitters/part_emitter_relative.htm"
converted: "2025-09-14T03:59:51.742Z"
---

# part\_emitter\_relative

This function sets relative mode for a particle emitter. With relative mode enabled, the number of particles created becomes relative to its area.

### Usage Notes

-   The larger the emitter area set using [part\_emitter\_region](part_emitter_region.md), the more particles that will be created.
-   The number parameter of the functions [part\_emitter\_stream](part_emitter_stream.md) and [part\_emitter\_burst](part_emitter_burst.md) changes: it becomes the percentage of the emitter area that should be covered with new particles.
-   By default, new particle emitters created using [part\_emitter\_create](part_emitter_create.md) don't have relative mode enabled.

#### Syntax:

part\_emitter\_relative(ps, ind, enable);

| Argument | Type | Description |
| --- | --- | --- |
| ps | Particle System Instance | The index of the particle system the emitter belongs to |
| ind | Particle Emitter | The index of the particle emitter |
| enable | Boolean | Whether to enable or disable relative mode for the emitter |

#### Returns:

N/A

#### Example:

Create Event

ps = part\_system\_create();
pe = part\_emitter\_create(ps);
part\_emitter\_region(ps, pe, 20, 120, 20, 120, ps\_shape\_rectangle, ps\_distr\_linear);
part\_emitter\_relative(ps, pe, true);
pt = part\_type\_create();
part\_type\_shape(pt, pt\_shape\_flare);

part\_emitter\_stream(ps, pe, pt, 2);

Cleanup Event

part\_emitter\_destroy(pe);
part\_system\_destroy(ps);
part\_type\_destroy(pt);

The above code creates a particle system ps and adds a single emitter pe to it. The emitter is set to emit particles in a rectangular region of 100x100 pixels, starting at (20, 20). It is then set to emit particles in relative mode. Next, a particle type is created and configured to draw a flare shape pt\_shape\_flare. Finally, the emitter is set to stream particles of the created type continuously. Since relative mode was enabled, the number of 2 means that the emitter will create the number of particles needed to cover 2% of the emitter area every step.