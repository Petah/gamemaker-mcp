---
title: "part_type_death"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Particles/Particle_Types/part_type_death.htm"
converted: "2025-09-14T03:59:52.363Z"
---

# part\_type\_death

This function can be used to make your particle burst another type of particle at the end of its lifetime.

WARNING **Never** use the same particle type as this will cause an infinite loop and can crash the game in seconds! Also, be very careful when using this as it can greatly increase the number of particles on-screen at a time and cause your games to slow down noticeably.

#### Syntax:

part\_type\_death(ind, death\_number, death\_type);

| Argument | Type | Description |
| --- | --- | --- |
| ind | Particle Type | The index of the particle type to change. |
| death_number | Real | The quantity of the new particle to create at the particle death. If a negative value, it will instead create a fraction chance one is created (eg -3 would mean that one is created every 3 or so steps). |
| death_type | Particle Type | The index of the particle type to create at death. |

#### Returns:

N/A

#### Example:

particle1 = part\_type\_create();
part\_type\_shape(particle1, pt\_shape\_flare);
part\_type\_size(particle1, 0.20, 0.30, 0.50, 0);
part\_type\_scale(particle1, 0.10, 0.20);
part\_type\_colour3(particle1, 33023, 8454143, 33023);
part\_type\_alpha3(particle1, 0.30, 0.50, 0);
part\_type\_speed(particle1, 0.40, 1, 0, 0);
part\_type\_direction(particle1, 0, 359, 0, 20);
part\_type\_gravity(particle1, 0.20, 90);
part\_type\_orientation(particle1, 90, 90, 0, 0, 1);
part\_type\_blend(particle1, 1);
part\_type\_life(particle1, 1, 40);
particle2 = part\_type\_create();
part\_type\_shape(particle2, pt\_shape\_smoke);
part\_type\_size(particle2, 1, 1, 0, 0);
part\_type\_scale(particle2, 0.50, 0.50);
part\_type\_colour1(particle2, 12632256);
part\_type\_alpha3(particle2, 0.10, 0.40, 0);
part\_type\_speed(particle2, 0.50, 0.50, 0, 0);
part\_type\_direction(particle2, 0, 359, 0, 0);
part\_type\_gravity(particle2, 0.20, 90);
part\_type\_orientation(particle2, 0, 359, 0, 1, 1);
part\_type\_blend(particle2, 0);
part\_type\_life(particle2, 60, 60);
part\_type\_death(particle1, 1, particle2);

The above code creates and defines two particles and sets the particle indexed in the variable particle1 to create 1 particle of particle2 at the end of its lifetime.