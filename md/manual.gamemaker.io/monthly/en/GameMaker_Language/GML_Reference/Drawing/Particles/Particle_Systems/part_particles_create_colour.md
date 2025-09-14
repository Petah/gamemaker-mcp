---
title: "part_particles_create_colour"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Particles/Particle_Systems/part_particles_create_colour.htm"
converted: "2025-09-14T03:59:51.862Z"
---

# part\_particles\_create\_colour

This function permits you to quickly and easily create particles at any position in a particle system.

It is ideal for those effects that do not require any of the functionality offered by [Particle Emitters](../Particle_Emitters/Particle_Emitters.md) (for example, to create smoke from a missile, or a simple explosion effect).

You can also colour the particles "on the fly" as they are created with this function, and this colour will override the predefined colour of the particle, but it does not blend this colour over the particle's lifetime.

NOTE You must have created the particle system and the particle type previously for this function to be used.

#### Syntax:

part\_particles\_create\_colour(ind, x, y, parttype, colour, number);

| Argument | Type | Description |
| --- | --- | --- |
| ind | Particle System Instance | The particle system. |
| x | Real | The x coordinate of where to create the particles. |
| y | Real | The y coordinate of where to create the particles. |
| parttype | Particle Type | The index (type) of the particles to be created. |
| colour | Colour | The colour blending for the particles. |
| number | Real | The number of particles to create. |

#### Returns:

N/A

#### Example:

if (speed > 1)
{
    var \_c = choose(c\_aqua, c\_lime, c\_fuchsia, c\_orange);
    part\_particles\_create\_colour(sname, x, y, p\_Smoke, \_c, 1);
}

The above code will generate a single particle every step that the instance with the code has a speed greater than one. These particles will be of a random colour.