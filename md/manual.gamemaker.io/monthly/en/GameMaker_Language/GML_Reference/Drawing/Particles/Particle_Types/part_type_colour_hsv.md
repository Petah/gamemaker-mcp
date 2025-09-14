---
title: "part_type_colour_hsv"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Particles/Particle_Types/part_type_colour_hsv.htm"
converted: "2025-09-14T03:59:52.297Z"
---

# part\_type\_colour\_hsv

This function sets a hue, saturation and value range for all newly created particles of the given type.

You supply a minimum value and a maximum value for each of the three components and the particles created will have a random colour based on the given range of parameters. In this way you can create particles of the same hue but different saturations, or of different hues but the same value (luminosity), etc. All values must be between 0 and 255 (inclusive).

NOTE Existing particles of the given type are unaffected.

#### Syntax:

part\_type\_colour\_hsv(ind, hmin, hmax, smin, smax, vmin, vmax);

| Argument | Type | Description |
| --- | --- | --- |
| ind | Particle Type | The index of the particle type to change. |
| hmin | Real | The minimum the final colour's hue component can be. |
| hmax | Real | The maximum the final colour's hue component can be. |
| smin | Real | The minimum the final colour's saturation component can be. |
| smax | Real | The maximum the final colour's saturation component can be. |
| vmin | Real | The minimum the final colour's value component can be. |
| vmax | Real | The maximum the final colour's value component can be. |

#### Returns:

N/A

#### Example:

pt\_stars = part\_type\_create();
part\_type\_shape(pt\_stars, pt\_shape\_star);
part\_type\_colour\_hsv(pt\_stars, 0, 255, 0, 255, 255, 255);

The above code creates a new particle type, stores its index in a variable pt\_stars and gives it a star shape pt\_shape\_star. It then sets each particle emitted of this particle type to have different colours and saturations, but the same value (luminosity).