---
title: "part_type_gravity"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Particles/Particle_Types/part_type_gravity.htm"
converted: "2025-09-14T03:59:52.427Z"
---

# part\_type\_gravity

This function sets the gravity that is to affect each particle of the given type that is created.

The gravity strength value is added to the particle speed every step and is usually a small value like 0.5, while the direction is the direction of the gravity "pull" and follows the standard GameMaker directions of 0° being right, 90° being up, 180° being left and 270° being down.

#### Syntax:

part\_type\_gravity(ind, grav\_amount, grav\_direction);

| Argument | Type | Description |
| --- | --- | --- |
| ind | Particle Type | The index of the particle type to change. |
| grav_amount | Real | Strength of the gravity. |
| grav_direction | Real | The direction of the gravity. |

#### Returns:

N/A

#### Example:

part\_type\_shape(global.p1, pt\_shape\_pixel);
part\_type\_size(global.p1, 1, 3, 0, 0);
part\_type\_scale(global.p1, 1, 1);
part\_type\_colour1(global.p1, c\_white);
part\_type\_alpha2(global.p1, 1, 0);
part\_type\_speed(global.p1, 2, 4, 0, 0);
part\_type\_direction(global.p1, 0, 180, 0, 0);
part\_type\_gravity(global.p1, 0.20, 270);
part\_type\_orientation(global.p1, 0, 0, 0, 0, 1);
part\_type\_blend(global.p1, 1);
part\_type\_life(global.p1, 15, 60);

The above code will set various particle values including the gravity which will add 0.2 to the speed each step with a direction of 270º, so will pull the particle "down" towards the bottom of the screen.