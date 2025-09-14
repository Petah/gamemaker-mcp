---
title: "part_emitter_enable"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Particles/Particle_Emitters/part_emitter_enable.htm"
converted: "2025-09-14T03:59:51.614Z"
---

# part\_emitter\_enable

This function enables or disables the given particle emitter.

### Usage Notes

-   The particles created by a disabled emitter become invisible and aren't updated.
-   Timers related to the emitter delay ([part\_emitter\_delay](part_emitter_delay.md)) or interval ([part\_emitter\_interval](part_emitter_interval.md)) are paused.
-   A disabled emitter doesn't create new particles when it is in stream mode. It will also not create any particles after calls to [part\_emitter\_burst](part_emitter_burst.md).
-   The function [part\_particles\_burst](../Particle_Systems/part_particles_burst.md) doesn't create particles for any disabled emitters in the [Particle System Asset](../../../../../../../../The_Asset_Editors/Particle_Systems.md).

#### Syntax:

part\_emitter\_enable(ps, ind, enable);

| Argument | Type | Description |
| --- | --- | --- |
| ps | Particle System Instance | The particle system the emitter's in |
| ind | Particle Emitter | The index of the emitter to change |
| enable | Boolean | Whether to enable the emitter or not |

#### Returns:

N/A

#### Example:

Create Event

ps = part\_system\_create();

pe1 = part\_emitter\_create(ps);
part\_emitter\_region(ps, pe1, 100, 200, 100, 200, ps\_shape\_rectangle, ps\_distr\_gaussian);
part\_emitter\_enable(ps, pe1, false);
pe2 = part\_emitter\_create(ps);
part\_emitter\_region(ps, pe2, 200, 300, 100, 200, ps\_shape\_rectangle, ps\_distr\_gaussian);

pt = part\_type\_create();
part\_type\_speed(pt, 2, 2, 0, 0);
part\_type\_direction(pt, 90, 90, 0, .2);

part\_emitter\_stream(ps, pe1, pt, 2);
part\_emitter\_stream(ps, pe2, pt, 2);

Cleanup Event

part\_emitter\_destroy(ps, pe1);
part\_emitter\_destroy(ps, pe2);
part\_system\_destroy(ps);
part\_type\_destroy(pt);

The above code creates a particle system ps in the Create event and adds two emitters to it: pe1 and pe2. The emitters are each configured to emit particles in a rectangular region of 100x100 pixels, using a gaussian distribution (i.e. more particles in the center). Emitter pe1 is set to disabled using part\_emitter\_enable

The two emitters are then "turned on" using [part\_emitter\_stream](part_emitter_stream.md): each of them is configured to create two particles per step. Since pe1 was set to disabled, it will not emit any particles. pe2 is enabled and emits particles normally.

Finally, since they're dynamic resources, the particle emitters, the system and the type are all destroyed in the Cleanup event.