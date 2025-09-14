---
title: "physics_particle_group_end"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Physics/Soft_Body_Particles/physics_particle_group_end.htm"
converted: "2025-09-14T04:00:06.623Z"
---

# physics\_particle\_group\_end

This function is used to end the definition of a particle group shape. Calling this function will create the particles within the given shape parameters, and also return an ID value which can be stored and used in further functions for interactions with the particle group.

#### Syntax:

physics\_particle\_group\_end()

#### Returns:

[Physics Particle Group ID](physics_particle_group_end.md)

#### Example:

var flags = phy\_particle\_flag\_water | phy\_particle\_flag\_viscous | phy\_particle\_flag\_tensile;
var groupflags = phy\_particle\_group\_flag\_solid;
physics\_particle\_group\_begin(flags, groupflags, mouse\_x, mouse\_y, 0, 0, 0, 0, c\_white, 1, 1, 2);
physics\_particle\_group\_circle(100);
mLastGroup = physics\_particle\_group\_end();

The above code stores the flags for the particle type and the particle group properties in variables then uses these to create a circular particle group with a 100px radius at the mouse position. The ID for the group that has been created is stored in the variable "mLastGroup".