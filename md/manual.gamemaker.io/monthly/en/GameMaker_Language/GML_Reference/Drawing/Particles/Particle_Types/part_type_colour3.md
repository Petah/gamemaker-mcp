---
title: "part_type_colour3"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Particles/Particle_Types/part_type_colour3.htm"
converted: "2025-09-14T03:59:52.281Z"
---

# part\_type\_colour3

This function sets a three colour gradient for each newly created particle of the given type.

The first colour is that which all particles will start with, and the second colour is the one that will be blended to half way through its lifetime and the third colour is the one with which the particle will end with. A smooth gradient change will occur through the colours over the particle's lifetime from one colour to the other.

NOTE Existing particles of the given type are unaffected.

#### Syntax:

part\_type\_colour3( ind, colour1, colour2, colour3 );

| Argument | Type | Description |
| --- | --- | --- |
| ind | Particle Type | The index of the particle type to change. |
| colour1 | Colour | The colour the particle will start at. |
| colour2 | Colour | The colour the particle will be halfway through its lifespan. |
| colour3 | Colour | The colour the particle will end at. |

#### Returns:

N/A

#### Example:

part\_type\_colour3(part\_Health, c\_red, c\_white, c\_maroon);

The above code will make all particles created of the type indexed in the variable "part\_Health" have a colour blend from red to white to maroon over their lifetime.