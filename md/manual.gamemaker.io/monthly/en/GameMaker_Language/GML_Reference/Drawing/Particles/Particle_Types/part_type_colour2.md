---
title: "part_type_colour2"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Particles/Particle_Types/part_type_colour2.htm"
converted: "2025-09-14T03:59:52.268Z"
---

# part\_type\_colour2

This function sets a two colour gradient for each newly created particle of the given type.

The first colour is that which all particles will start with, and the second colour is the one on which the particle will end with, and a smooth gradient change will occur to the colour over the particle's lifetime from one colour to the other.

NOTE Existing particles of the given type are unaffected.

#### Syntax:

part\_type\_colour2(ind, colour1, colour2);

| Argument | Type | Description |
| --- | --- | --- |
| ind | Particle Type | The index of the particle type to change. |
| colour1 | Colour | The colour the particle will start at. |
| colour2 | Colour | The colour the particle will end at. |

#### Returns:

N/A

#### Example:

part\_type\_colour2(part\_Health, c\_red, c\_white);

The above code will make all particles created of the type indexed in the variable "part\_Health" have a colour blend from red to white over their lifetime.