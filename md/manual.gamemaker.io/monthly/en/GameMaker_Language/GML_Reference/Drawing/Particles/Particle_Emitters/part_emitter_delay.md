---
title: "part_emitter_delay"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Particles/Particle_Emitters/part_emitter_delay.htm"
converted: "2025-09-14T03:59:51.567Z"
---

# part\_emitter\_delay

This function sets the delay before the particle emitter creates particles for the first time when it is in stream mode.

The value for the delay is chosen to be a random value between delay\_min and delay\_max.

NOTE The countdown timer is paused when the emitter is disabled using [part\_emitter\_enable](../../../../../../../../GameMaker_Language/GML_Reference/Drawing/Particles/Particle_Emitters/part_emitter_enable.md).

#### Syntax:

part\_emitter\_delay(ps, ind, delay\_min, delay\_max, delay\_unit);

| Argument | Type | Description |
| --- | --- | --- |
| ps | Particle System Instance | The index of the particle system containing the emitter |
| ind | Particle Emitter | The emitter index |
| delay_min | Real | The minimum possible value for the delay, expressed in delay_unit |
| delay_max | Real | The maximum possible value for the delay, expressed in delay_unit |
| delay_unit | Time Source Unit Constant | The unit in which delay_min and delay_max are expressed |

#### Returns:

N/A

#### Example:

Create Event

ps = part\_system\_create();
part\_system\_position(ps, x, y);


pe = part\_emitter\_create(ps);
part\_emitter\_region(ps, pe, 100, 200, 100, 200, ps\_shape\_ellipse, ps\_distr\_linear);
part\_emitter\_delay(ps, pe, 1, 1, time\_source\_units\_seconds);
part\_emitter\_interval(ps, pe, 0.4, 1.1, time\_source\_units\_seconds);

pt = part\_type\_create();

part\_emitter\_stream(ps, pe, pt, 20);

Cleanup Event

part\_emitter\_destroy(pe);
part\_system\_destroy(ps);
part\_type\_destroy(pt);

The code above sets up a particle system ps with a single emitter pe in the Create event. The emitter is configured to emit particles in a circle shape of 100x100 pixels and to wait for 1 second to start streaming (using [part\_emitter\_delay](part_emitter_delay.md)) after being "turned on" with [part\_emitter\_stream](part_emitter_stream.md). Using [part\_emitter\_interval](../../../../../../../../GameMaker_Language/GML_Reference/Drawing/Particles/Particle_Emitters/part_emitter_interval.md) it is configured to keep emitting particles every 0.4 to 1.1 seconds (i.e. the interval between two "bursts" in stream mode is at least 0.4 seconds and at most 1.1 seconds.

A new particle type pt is then created and the emitter set to create 20 of them at a time using [part\_emitter\_stream](part_emitter_stream.md).

Finally, since they're dynamic resources, the particle emitter, the system and the type are all destroyed in the Cleanup event.