---
title: "part_type_size_y"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Particles/Particle_Types/part_type_size_y.htm"
converted: "2025-09-14T03:59:52.568Z"
---

# part\_type\_size\_y

This function sets a range for the starting size of the given particle type on the Y axis, and how it changes over its lifetime.

NOTE If the size must be the same on both axes, use [part\_type\_size](part_type_size.md) instead.

#### Syntax:

part\_type\_size\_y(ind, size\_min\_y, size\_max\_y, size\_incr\_y, size\_wiggle\_y);

| Argument | Type | Description |
| --- | --- | --- |
| ind | Particle Type | The particle type index |
| size_min_y | Real | The minimum size on the y axis that particles of this type can be created with |
| size_max_y | Real | The maximum size on the y axis that particles of this type can be created with |
| size_incr_y | Real | The size along the y axis to add every step |
| size_wiggle_y | Real | The "wiggle" value; the maximum random value that can be added every step |

#### Returns:

N/A

#### Example:

Create Event

ps = part\_system\_create();
pt = part\_type\_create();
part\_type\_shape(pt, pt\_shape\_pixel);
part\_type\_size\_y(pt, 1, 2, 0.2, 0.1);

Step Event

part\_particles\_create(ps, mouse\_x, mouse\_y, pt, 3);

Clean Up Event

part\_system\_destroy(ps);
part\_type\_destroy(pt);

The above code first creates a new particle system in the Create event, as well as a particle type using [part\_type\_create](part_type_create.md). The index is stored in an instance variable pt. It then sets the size on the y axis for particles of the newly created type using part\_type\_size\_y: when they're created, particles of this type will get a random size on the y axis that is at least 1 and at most 2. For every step of their lifetime, 0.2 will be added to the size on the y axis of each of them, along with a random value of at most 0.1.

In the Step event, 3 particles of this new type are created in the particle system ps at the mouse position using [part\_particles\_create](../Particle_Systems/part_particles_create.md).

Finally, in the Clean Up event, both the particle system and particle type are destroyed.