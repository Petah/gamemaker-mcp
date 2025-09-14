---
title: "part_type_colour1"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Particles/Particle_Types/part_type_colour1.htm"
converted: "2025-09-14T03:59:52.249Z"
---

# part\_type\_colour1

This function sets the colour of newly created particles of the given type to be a single colour for the total duration of the lifetime of each individual particle.

NOTE Existing particles of the given type are unaffected.

#### Syntax:

part\_type\_colour1(ind, colour1);

| Argument | Type | Description |
| --- | --- | --- |
| ind | Particle Type | The index of the particle type to change. |
| colour1 | Colour | The single colour to make the particle type. |

#### Returns:

N/A

#### Example:

part\_type\_colour1(global.Snow\_Part, c\_white);

The above code will set all particles created of the particle type indexed in the global variable Snow\_Part to be white only.