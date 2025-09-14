---
title: "part_type_alpha1"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Particles/Particle_Types/part_type_alpha1.htm"
converted: "2025-09-14T03:59:52.175Z"
---

# part\_type\_alpha1

This function is used to set a particle type to have a single alpha value (transparency) for the total duration of the lifetime of each individual particle, and this can be from 0 (transparent) to 1 (opaque).

#### Syntax:

part\_type\_alpha1(ind, alpha1);

| Argument | Type | Description |
| --- | --- | --- |
| ind | Particle Type | The index of the particle type to change. |
| alpha1 | Real | The alpha of the particle. |

#### Returns:

N/A

#### Example:

part\_type\_alpha1(global.Snow\_Part, 0.5);

The above code will set all particles created of the particle type indexed in the global variable "Snow\_Part" to have an alpha value of 0.5 (semi-transparent).