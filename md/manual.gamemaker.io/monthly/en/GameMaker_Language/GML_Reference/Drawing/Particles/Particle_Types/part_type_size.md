---
title: "part_type_size"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Particles/Particle_Types/part_type_size.htm"
converted: "2025-09-14T03:59:52.526Z"
---

# part\_type\_size

This function is used to determine the size of the particle when it is created and can also be used to make the particle increase or decrease in size over its lifetime. The minimum and maximum size values default at 1 (meaning that the size is the same ratio as the base particle after the [part\_type\_scale()](part_type_scale.md) scale has been set) and if they are set to the same value, the initial size for all particles will be the same, but if set to different values, each particle will start with a random size from within the range, for example if you have a minimum of 0.5 and a maximum of 2, all particles will be created with a size between half and double the base scale.

You can also set an increment value that will make the particle sprite grow (if a positive number) or shrink (if a negative number) over the lifetime of the particle, with the given amount being added to the particle size each step. This value can be a minimum of (+/-)0.01.

Finally, you can set the "wiggle" factor. This is a value that will be added or subtracted randomly to the size each step of the particles lifetime. Obviously larger values are more pronounced than smaller ones, and this value can even be a negative with the maximum range being between -20 and 20.

NOTE The \*\_incr and \*\_wiggle parameters of this particle type property affect existing particles of the given particle type.

TIP To change the size on the x and y axis separately you can use [part\_type\_size\_x](part_type_size_x.md) and [part\_type\_size\_y](../../../../../../../../GameMaker_Language/GML_Reference/Drawing/Particles/Particle_Types/part_type_size_y.md) instead.

#### Syntax:

part\_type\_size(ind, size\_min, size\_max, size\_incr, size\_wiggle);

| Argument | Type | Description |
| --- | --- | --- |
| ind | Particle Type | The index of the particle type to change. |
| size_min | Real | The minimum size the particle can start at. |
| size_max | Real | The maximum size the particle can start at. |
| size_incr | Real | How much the particle should increase or decrease per step. |
| size_wiggle | Real | How much should randomly be added or subtracted from the particles size per step. |

#### Returns:

N/A

#### Example:

part\_type\_shape(particle1, pt\_shape\_explosion);
part\_type\_size(particle1, 2, 2, 0.10, 0.01);
part\_type\_scale(particle1, 1, 1);
part\_type\_colour2(particle1, 16777215, 12632256);
part\_type\_alpha3(particle1, 0, 0.20, 0);
part\_type\_speed(particle1, 0.20, 0.20, 0, 0);
part\_type\_direction(particle1, 0, 359, 0, 20);
part\_type\_orientation(particle1, 0, 359, 0, 0, 1);
part\_type\_blend(particle1, 0);
part\_type\_life(particle1, 40, 60);

The above code will set various particle values including the size which is set to double the size when each particle is created, and then increment the size by 0.01 each step with a wiggle of 0.1 too.