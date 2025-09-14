---
title: "part_type_direction"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Particles/Particle_Types/part_type_direction.htm"
converted: "2025-09-14T03:59:52.392Z"
---

# part\_type\_direction

This function is used to determine the direction of the particle when it is created and can also be used to make the particle increase or decrease its direction over its lifetime. The minimum and maximum direction values default at 0, which means that the particle will move to the right with no variation, but these values can be changed to limit the direction of movement following the standard GameMaker directions of 0 being right, 90 being up, 180 being left and 270 being down. If you set them to the same value the particles will only move in one direction.

You can also set an increment value which will add (if a positive number) or subtract (if a negative number) an amount of degrees to the direction over its lifetime. This value can be a minimum of (+/-) 0.01.

Finally, you can set the "wiggle" factor. This is a value that will be added or subtracted randomly to the direction each step of the particles lifetime. Obviously larger values are more pronounced than smaller ones, and this value can even be a negative with the maximum range being between -20 and 20.

NOTE The \*\_incr and \*\_wiggle parameters of this particle type property affect existing particles of the given particle type.

#### Syntax:

part\_type\_direction(ind, dir\_min, dir\_max, dir\_incr, dir\_wiggle);

| Argument | Type | Description |
| --- | --- | --- |
| ind | Particle Type | The index of the particle type to change. |
| dir_min | Real | The minimum direction the particle can start at. |
| dir_max | Real | The maximum direction the particle can start at. |
| dir_incr | Real | How much the particle direction should increase or decrease per step. |
| dir_wiggle | Real | How much should randomly be added or subtracted from the particle's direction per step. |

#### Returns:

N/A

#### Example:

part\_type\_shape(particle1, pt\_shape\_pixel);
part\_type\_size(particle1, 0.19, 0.79, 0.01, 0);
part\_type\_scale(particle1, 5, 5);
part\_type\_colour3(particle1, 32768, 8454016, 8454016);
part\_type\_alpha3(particle1, 0, 0.80, 0);
part\_type\_speed(particle1, 8, 10, -0.50, 1);
part\_type\_direction(particle1, 0, 359, 1, 20);
part\_type\_gravity(particle1, 0, 270);
part\_type\_orientation(particle1, 0, 359, 0, 0, 1);
part\_type\_blend(particle1, 1);
part\_type\_life(particle1, 10, 50);

The above code will set various particle values including the direction which will be random value between 0 and 359 degrees. It will also go up by 1 degree each step and has a random amount added to it of anywhere between 0 and 20 each step too.