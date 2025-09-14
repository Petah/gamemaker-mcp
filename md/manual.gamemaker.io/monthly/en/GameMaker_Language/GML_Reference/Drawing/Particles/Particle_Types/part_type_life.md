---
title: "part_type_life"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Particles/Particle_Types/part_type_life.htm"
converted: "2025-09-14T03:59:52.440Z"
---

# part\_type\_life

This is the function that governs how long each individual particle of the indicated type remains on the screen. As with other particle functions, you provide a minimum and a maximum value (in steps) and each particle lifespan will be a random number of steps from within the specified range. To have all particles with the same lifetime, set the two values to be the same.

#### Syntax:

part\_type\_life(ind, life\_min, life\_max);

| Argument | Type | Description |
| --- | --- | --- |
| ind | Particle Type | The index of the particle type to change. |
| life_min | Real | The minimum lifespan of the particles. |
| life_max | Real | The maximum lifespan of the particles. |

#### Returns:

N/A

#### Example:

var \_gamespeed = game\_get\_speed(gamespeed\_fps);
part\_type\_life(part\_Flare, \_gamespeed, \_gamespeed \* 2);

The above code will set all particles created of the particle type indexed in the variable part\_Flare to have a lifetime of between 1 and 2 seconds, based on the current game speed.