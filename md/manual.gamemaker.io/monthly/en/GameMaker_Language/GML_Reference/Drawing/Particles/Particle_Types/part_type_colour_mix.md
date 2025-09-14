---
title: "part_type_colour_mix"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Particles/Particle_Types/part_type_colour_mix.htm"
converted: "2025-09-14T03:59:52.315Z"
---

# part\_type\_colour\_mix

This function sets the colour of newly created particles of the given type to be a random blend of two colours.

NOTE Existing particles of the given type are unaffected.

#### Syntax:

part\_type\_colour\_mix(ind, colour1, colour2);

| Argument | Type | Description |
| --- | --- | --- |
| ind | Particle Type | The index of the particle type to change. |
| colour1 | Colour | The first colour the blend will take from. |
| colour2 | Colour | The second colour the blend will take from. |

#### Returns:

N/A

#### Example:

part\_type\_colour\_mix(global.P\_Damage, c\_red, c\_yellow);

The above code will set the colour for each particle emitted of the particle type indexed in the global variable P\_Damage to be a random mix between the colours red and yellow.