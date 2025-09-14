---
title: "part_type_step"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Particles/Particle_Types/part_type_step.htm"
converted: "2025-09-14T03:59:52.629Z"
---

# part\_type\_step

This function can be used to make your particle type stream another type each step until the end of its lifetime. You can set a negative value for the step number and a particle will be emitted at a random interval based on that, so that, for example, a value of -3 will have a 1:3 chance of emitting a particle each step.

WARNING **Never** use the same particle type as this will cause an infinite loop and can crash the game in seconds! Also, be very careful when using this as it can greatly increase the number of particles on-screen at a time and cause your games to slow down noticeably.

#### Syntax:

part\_type\_step(ind, step\_number, step\_type);

| Argument | Type | Description |
| --- | --- | --- |
| ind | Particle Type | The index of the particle type to change. |
| step_number | Real | The quantity of the new particle to create per step. |
| step_type | Particle Type | The index of the particle type to create per step. |

#### Returns:

N/A

#### Example:

particle2 = part\_type\_create();
part\_type\_shape(particle2, pt\_shape\_smoke);
part\_type\_size(particle2, 0.01, 0.01, 0.01, 0);
part\_type\_scale(particle2, 1, 1);
part\_type\_colour3(particle2, 4227327, 8454143, 4227327);
part\_type\_alpha3(particle2,1, 0.50, 0.80);
part\_type\_speed(particle2, 0, 0, 0, 0);
part\_type\_direction(particle2, 0, 359, 0, 0);
part\_type\_gravity(particle2, 0, 270);
part\_type\_orientation(particle2, 0, 0, -2, 0, 1);
part\_type\_blend(particle2, 1);
part\_type\_life(particle2, 160, 160);
particle3 = part\_type\_create();
part\_type\_shape(particle3, pt\_shape\_flare);
part\_type\_size(particle3, 0.20, 0.20, 0.02, 0);
part\_type\_scale(particle3, 1, 1);
part\_type\_colour3(particle3, 16777215, 8454143, 16777215);
part\_type\_alpha3(particle3, 0, 0.50, 0);
part\_type\_speed(particle3, 3, 3, -0.03, 0);
part\_type\_direction(particle3, 0, 359, 0, 0);
part\_type\_gravity(particle3, 0, 270);
part\_type\_orientation(particle3, 0, 0, 0, 0, 1);
part\_type\_blend(particle3, 1);
part\_type\_life(particle3, 40, 80);
part\_type\_step(particle2, 2, particle3);

The above code creates and defines two particles and sets the particle indexed in the variable particle2 to create 2 particles of particle3 every step of its lifetime.