---
title: "part_type_orientation"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Particles/Particle_Types/part_type_orientation.htm"
converted: "2025-09-14T03:59:52.467Z"
---

# part\_type\_orientation

This function determines the orientation of the particle sprite when it is created and can also be used to make the particle orientation increase or decrease over its lifetime.

The minimum and maximum orientation values default at 0 but these values can be changed to randomise the orientation following the standard GameMaker directions of 0 degrees being right, 90 degrees being up, 180 degrees being left and 270 degrees being down. If you set them to the same value the particles will all be created with the same orientation.

You can also set an increment value which will add (if a positive number) or subtract (if a negative number) an amount of degrees to the orientation over its lifetime. This value can be a minimum of (+/-) 0.01.

You can set the "wiggle" factor too, the same as other particle functions. This is a value that will be added or subtracted randomly to the orientation each step of the particles lifetime. Obviously larger values are more pronounced than smaller ones, and this value can even be a negative with the maximum range being between -20 and 20.

Finally, you can choose to have the orientation relative or not, which means that while the particle has a direction (and speed) the particle sprite will be orientated around that vector. Bear in mind that if you have the particle speed set to reduce and it reaches 0, the lack of speed sets the direction to the default value of 0° and so a relative orientation will cause the particle sprite to "jump" to a different angle.

NOTE The \*\_incr and \*\_wiggle parameters of this particle type property affect existing particles of the given particle type.

#### Syntax:

part\_type\_orientation( ind, ang\_min, ang\_max, ang\_incr, ang\_wiggle, ang\_relative );

| Argument | Type | Description |
| --- | --- | --- |
| ind | Particle Type | The index of the particle type to change. |
| ang_min | Real | The minimum starting angle of the particles. |
| ang_max | Real | The maximum starting angle of the particles. |
| ang_incr | Real | The increase (or decrease if set negative) of the angle in degrees per step. |
| ang_wiggle | Real | The amount the angle wiggles clockwise/counterclockwise per step. |
| ang_relative | Real | Whether to set its angle relative to the direction of the particle's motion (true) or not (false). |

#### Returns:

N/A

#### Example:

part\_type\_shape(particle2, pt\_shape\_spark);
part\_type\_size(particle2, 0.10, 0.50, 0.01, 0);
part\_type\_scale(particle2, 0.30, 0.30);
part\_type\_colour1(particle2, 8454143);
part\_type\_alpha1(particle2, 0.50);
part\_type\_speed(particle2, 4, 4, -0.07, 1);
part\_type\_direction(particle2, 0, 359, 0, 20);
part\_type\_orientation(particle2, 0, 359, 0, 20, 1);
part\_type\_blend(particle2, 1);
part\_type\_life(particle2, 1, 5);

The above code will set various particle values including the orientation which will be random value between 0º and 359º. It will also have a random amount added to it of anywhere between 0 and 20 each step too, and the orientation is relative to the direction of motion.