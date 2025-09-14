---
title: "physics_particle_draw"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Physics/Soft_Body_Particles/physics_particle_draw.htm"
converted: "2025-09-14T04:00:06.369Z"
---

# physics\_particle\_draw

This function will draw a sprite at the position of all the particles that share the same user defined category value, and that have flags which coincide with those set for the mask. The mask value is defined in the same way as you would define the flags when creating the particle (see the function [physics\_particle\_create()](physics_particle_create.md) for an example), ie: using the [bitwise _or_](../../../../Additional_Information/Bitwise_Operators.md) "|" to mask off the appropriate bits for each flag.

**NOTE**: This function will draw **all** particles in the physics simulation with flags that coincide with those of the mask, whether they are individual particles or groups, if the user category is the same.

The drawn particle will use the colour and alpha values set when you created it, and will rotate with the angular momentum of the particle. However should you wish to scale the sprite or change any other of its drawn properties you should use the function [physics\_particle\_draw\_ext()](physics_particle_draw_ext.md).

#### Syntax:

physics\_particle\_draw(typemask, category, sprite, subimg)

| Argument | Type | Description |
| --- | --- | --- |
| typemask | Physics Particle Flag Constant(s) | The mask to compare the particles flags with. |
| category | Real | The user defined category to draw (use 0 to draw all categories). |
| sprite | Sprite Asset | The sprite to use for each particle. |
| subimg | Real | The image_index of the sprite to draw. |

#### Returns:

N/A

#### Example:

var flags = phy\_particle\_flag\_water | phy\_particle\_flag\_viscous | phy\_particle\_flag\_tensile;
physics\_particle\_draw(flags, 2, sprBlob, 0);

The above code will draw a sprite for all the particles in the user defined category "2" which have the same flags as the given mask.