---
title: "part_type_colour_rgb"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Particles/Particle_Types/part_type_colour_rgb.htm"
converted: "2025-09-14T03:59:52.332Z"
---

# part\_type\_colour\_rgb

This function sets the mix of red, green and blue colours for all newly created particles of the given type.

You supply a minimum value and a maximum value for each of the three components and the particles created will have a random colour based on the given range of parameters. All values must be between 0 and 255.

NOTE Existing particles of the given type are unaffected.

#### Syntax:

part\_type\_colour\_rgb(ind, rmin, rmax, gmin, gmax, bmin, bmax)

| Argument | Type | Description |
| --- | --- | --- |
| ind | Particle Type | The index of the particle type to change. |
| rmin | Real | The minimum value the final colour's red component can have. |
| rmax | Real | The maximum value the final colour's red component can have. |
| gmin | Real | The minimum value the final colour's green component can have. |
| gmax | Real | The maximum value the final colour's green component can have. |
| bmin | Real | The minimum value the final colour's blue component can have. |
| bmax | Real | The maximum value the final colour's blue component can have. |

#### Returns:

N/A

#### Example:

part\_type\_colour\_rgb(global.Blood\_Part, 0, 255, 0, 0, 0, 0);

The above code sets each particle emitted of the particle type indexed in the global variable Blood\_Part to be only different shades of red.