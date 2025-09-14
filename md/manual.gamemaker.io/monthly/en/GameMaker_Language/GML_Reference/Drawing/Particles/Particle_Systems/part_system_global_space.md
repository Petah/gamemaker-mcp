---
title: "part_system_global_space"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Particles/Particle_Systems/part_system_global_space.htm"
converted: "2025-09-14T03:59:52.087Z"
---

# part\_system\_global\_space

This function enables global space particles for the given particle system.

When global space particles are disabled (the default), the positions of the particles are _relative_ to the particle system's position. When you move such a particle system, its particles will move with it.

Enabling global space allows you to move a particle system without moving the particles in it. This can be used e.g. to create a trail of particles:

| Disabled | Enabled |
| --- | --- |
|  |  |

In the example above, individual particles are being created in the particle system at the same position, and the particle system itself is being moved to the ship's location every frame.

The first video shows global space disabled, so all particles stick to its system, however in the second video particles stay in the room position where they were created.

Once enabled, you can move and rotate your particle systems with [part\_system\_position](part_system_position.md) and [part\_system\_angle](../../../../../../../../GameMaker_Language/GML_Reference/Drawing/Particles/Particle_Systems/part_system_angle.md) respectively, without moving the individual particles inside them.

NOTE If you enable global space on a particle system that already has particles inside it, you may see those existing particles jump to new positions on the screen as they switch from being relative to the particle system to being relative to the room origin.

#### Syntax:

part\_system\_global\_space(ind, enable);

| Argument | Type | Description |
| --- | --- | --- |
| ind | Particle System Instance | The index of the particle system |
| enable | Boolean | Whether to enable or disable global space particles |

#### Returns:

N/A

#### Example: Particle System Following an Instance

Create Event

ps = part\_system\_create();
part\_system\_global\_space(ps, true);
pe = part\_emitter\_create(ps);

pt = part\_type\_create();
part\_type\_shape(pt, pt\_shape\_flare);
part\_type\_direction(pt, 0, 360, 0, 0.3);
part\_type\_speed(pt, 0.1, 0.2, 0, 0.01);
part\_type\_scale(pt, 0.3, 0.3);

part\_emitter\_stream(ps, pe, pt, 2);

Step Event

part\_system\_position(ps, x, y);
part\_system\_angle(ps, direction);

Clean Up Event

part\_emitter\_destroy(pe);
part\_system\_destroy(ps);
part\_type\_destroy(pt);

The above code shows how to add a particle system to an instance, so that it leaves a trail of particles behind when the instance is moved around.

In the Create event a basic particle system is set up, with a single emitter added to it. Using part\_system\_global\_space, it is configured to have its particles in global space. A basic particle type is also added, which is configured to have a flare shape (pt\_shape\_flare), a starting direction that can be any random value between 0 and 360, a starting speed anywhere between 0.1 and 0.2 pixels per step and a scale factor of 0.3.

In the Step event the particle system's position and angle are set to the instance's ([x](../../../Asset_Management/Instances/Instance_Variables/x.md), [y](../../../Asset_Management/Instances/Instance_Variables/y.md)) position and its [direction](../../../Asset_Management/Instances/Instance_Variables/direction.md), respectively.

Finally, in the Clean Up event, the particle emitter, system and type are destroyed in order to prevent memory leaks.