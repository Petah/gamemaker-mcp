---
title: "part_type_speed"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Particles/Particle_Types/part_type_speed.htm"
converted: "2025-09-14T03:59:52.586Z"
---

# part\_type\_speed

This function is used to set the movement speed of the particle when it is created and can also be used to make the particle increase or decrease its speed over its lifetime. The minimum and maximum speed values default at 1, which means that the particle will move 1 pixel each step, and if they are set to the same value, the initial speed for all particles will be the same, but if set to different values, each particle will start with a random speed from within the given range. For example if you have a minimum of 3 and a maximum of 6, all particles will be created with a speed between three and six pixels per step.

You can also set an increment value that will make the particle move faster (if a positive number) or slower (if a negative number) over its lifetime, with the given amount being added to the particle speed each and every step. This value can be a minimum of (+/-)0.01.

Finally, you can set the "wiggle" factor. This is a value that will be added or subtracted randomly to the speed each step of the particles lifetime. Obviously larger values are more pronounced than smaller ones, and this value can even be a negative with the maximum range being between -20 and 20.

NOTE The \*\_incr and \*\_wiggle parameters of this particle type property affect existing particles of the given particle type.

#### Syntax:

part\_type\_speed(ind, speed\_min, speed\_max, speed\_incr, speed\_wiggle);

| Argument | Type | Description |
| --- | --- | --- |
| ind | Particle Type | The index of the particle type to change. |
| speed_min | Real | The minimum speed the particle can start at. |
| speed_max | Real | The maximum speed the particle can start at. |
| speed_incr | Real | How much the particle speed should increase or decrease per step. |
| speed_wiggle | Real | How much should randomly be added or subtracted from the particle's speed per step. |

#### Returns:

N/A

#### Example:

part\_type\_shape(particle2, pt\_shape\_flare);
part\_type\_size(particle2, 0.01, 0.50, 0.01, 20);
part\_type\_scale(particle2, 0.10, 0.10);
part\_type\_colour3(particle2, 4210816, 4227327, 8240895);
part\_type\_alpha3(particle2, 0.20, 0.80, 0);
part\_type\_speed(particle2, 5, 10, -0.20, 20);
part\_type\_direction(particle2, 0, 359, -1, 20);
part\_type\_gravity(particle2, 0, 270);
part\_type\_orientation(particle2, 0, 359, 0, 20, 1);
part\_type\_blend(particle2, 1);
part\_type\_life(particle2, 1, 20);

The above code will set various particle values including the speed which sets a minimum speed of five and a maximum speed of ten, with the speed slowing down by a value of -0.2 each step. The speed will also wiggle by a random value between 0 and 20 each step.