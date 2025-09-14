---
title: "part_emitter_interval"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Particles/Particle_Emitters/part_emitter_interval.htm"
converted: "2025-09-14T03:59:51.680Z"
---

# part\_emitter\_interval

This function sets the interval between two consecutive bursts for the given emitter in case it is working in stream mode.

Every time the interval timer times out, i.e. after every burst, a new value for the interval is chosen as a random value between interval\_min and interval\_max.

NOTE The countdown timer is paused when the emitter is disabled using [part\_emitter\_enable](part_emitter_enable.md).

#### Syntax:

part\_emitter\_interval(ps, ind, interval\_min, interval\_max, interval\_unit);

| Argument | Type | Description |
| --- | --- | --- |
| ps | Particle System Instance | The index of the particle system the emitter is in |
| ind | Particle Emitter | The index of the particle emitter |
| interval_min | Real | The minimum possible value for the interval, expressed in interval_unit |
| interval_max | Real | The maximum possible value for the interval, expressed in interval_unit |
| interval_unit | Time Source Unit Constant | The unit in which the interval values are expressed |

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

The code above sets up a particle system ps with a single emitter pe in the Create event. The emitter is configured to emit particles in a circle shape of 100x100 pixels and to wait for 1 second to start streaming (using [part\_emitter\_delay](part_emitter_delay.md)) after being "turned on" with [part\_emitter\_stream](part_emitter_stream.md). Using [part\_emitter\_interval](part_emitter_interval.md) it is configured to keep emitting particles every 0.4 to 1.1 seconds (i.e. the interval between two "bursts" in stream mode is at least 0.4 seconds and at most 1.1 seconds.

A new particle type pt is then created and the emitter set to create 20 of them at a time using [part\_emitter\_stream](part_emitter_stream.md).

Finally, since they're dynamic resources, the particle emitter, the system and the type are all destroyed in the Cleanup event.