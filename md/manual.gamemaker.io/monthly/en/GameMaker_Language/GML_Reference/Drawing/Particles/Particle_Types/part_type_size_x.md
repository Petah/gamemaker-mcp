---
title: "part_type_size_x"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Particles/Particle_Types/part_type_size_x.htm"
converted: "2025-09-14T03:59:52.545Z"
---

# part\_type\_size\_x

This function sets a range for the starting size of the given particle type on the X axis, and how it changes over its lifetime.

NOTE If the size must be the same on both axes, use [part\_type\_size](part_type_size.md) instead.

#### Syntax:

part\_type\_size\_x(ind, size\_min\_x, size\_max\_x, size\_incr\_x, size\_wiggle\_x);

| Argument | Type | Description |
| --- | --- | --- |
| ind | Particle Type | The particle type index |
| size_min_x | Real | The minimum size along the x axis that particles of this type can be created with |
| size_max_x | Real | The maximum size along the x axis that particles of this type can be created with |
| size_incr_x | Real | The size along the x axis to add every step |
| size_wiggle_x | Real | The "wiggle" value; the maximum random value that can be added every step |

#### Returns:

N/A

#### Example:

Create Event

ps = part\_system\_create();
pt = part\_type\_create();
part\_type\_shape(pt, pt\_shape\_pixel);
part\_type\_size\_x(pt, 1, 2, 0.2, 0.1);

Step Event

part\_particles\_create(ps, mouse\_x, mouse\_y, pt, 3);

Clean Up Event

part\_system\_destroy(ps);
part\_type\_destroy(pt);

The above code first creates a new particle system in the Create event, as well as a particle type using [part\_type\_create](part_type_create.md). The index is stored in an instance variable pt. It then sets the size on the x axis for particles of the newly created type using part\_type\_size\_x: when they're created, particles of this type will get a random size on the x axis that is at least 1 and at most 2. For every step of their lifetime, 0.2 will be added to the size on the x axis of each of them, along with a random value of at most 0.1.

In the Step event, 3 particles of this new type are created in the particle system ps at the mouse position using [part\_particles\_create](../Particle_Systems/part_particles_create.md).

Finally, in the Clean Up event, both the particle system and particle type are destroyed.