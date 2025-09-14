---
title: "physics_particle_draw_ext"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Physics/Soft_Body_Particles/physics_particle_draw_ext.htm"
converted: "2025-09-14T04:00:06.393Z"
---

# physics\_particle\_draw\_ext

This function will draw a sprite at the position of all the particles that share the same user defined category value, and that have flags which coincide with those set for the mask. The mask value is defined in the same way as you would define the flags when creating the particles (see the functions [physics\_particle\_create()](physics_particle_create.md) for an example), ie: using the [bitwise _or_](../../../../Additional_Information/Bitwise_Operators.md) "|" to mask off the appropriate bits for each flag.

**NOTE**: This function will draw **all** particles in the physics simulation with flags that coincide with those of the mask, whether they are individual particles or groups, if the user category is the same.

The drawn particle will ignore the colour and alpha values set when you created it, and will instead be drawn using the scale, angle, colour and alpha parameters given in this function. Note that this is purely for drawing a sprite at the particle position and in no way affects the behaviour of the particle.

#### Syntax:

physics\_particle\_draw\_ext(typemask, category, sprite, subimg, xscale, yscale, ang, col, alpha)

| Argument | Type | Description |
| --- | --- | --- |
| typemask | Physics Particle Flag Constant(s) | The mask to compare the particles flags with. |
| category | Real | The user defined category to draw (use 0 to draw all categories). |
| sprite | Sprite Asset | The sprite to use for each particle. |
| subimg | Real | The image_index of the sprite to draw. |
| xscale | Real | The scale factor to apply to the sprite along the x axis. |
| yscale | Real | The scale factor to apply to the sprite along the y axis. |
| ang | Real | The angle (in degrees) to draw the sprite at. |
| col | Colour | The colour to blend with the sprite (default is c_white). |
| alpha | Real | The alpha value to use when drawing (0 - 1). |

#### Returns:

N/A

#### Example:

var flags = phy\_particle\_flag\_water | phy\_particle\_flag\_viscous | phy\_particle\_flag\_tensile;
physics\_particle\_draw\_ext(flags, 2, sprBlob, 0, 2, 2, 0, c\_white, 0.5);

The above code will draw a sprite for all the particles in the user defined category "2" which have the same flags as the given mask, scaled by 2 along both axis and with an alpha of 0.5.