---
title: "physics_particle_group_circle"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Physics/Soft_Body_Particles/physics_particle_group_circle.htm"
converted: "2025-09-14T04:00:06.581Z"
---

# physics\_particle\_group\_circle

This function will set the shape of the particle group that is being created. You must first have begun the group definition using the function [physics\_particle\_group\_begin()](physics_particle_group_begin.md), and then you would use this function to set the approximate radius of the group in pixels - approximate because the exact radius will depend on the size of the base particles, as defined by the [physics\_particle\_set\_radius()](physics_particle_set_radius.md) function, as the physics simulation tries to "fit" as many of the particles as possible into the defined shape. Finally you need to call [physics\_particle\_group\_end()](physics_particle_group_end.md) to create the group of particles in the room.

#### Syntax:

physics\_particle\_group\_circle(radius)

| Argument | Type | Description |
| --- | --- | --- |
| radius | Real | The radius (in pixels) of the circle to create. |

#### Returns:

N/A

#### Example:

var flags = phy\_particle\_flag\_water | phy\_particle\_flag\_viscous | phy\_particle\_flag\_tensile;
var groupflags = phy\_particle\_group\_flag\_solid;
physics\_particle\_group\_begin(flags, groupflags, mouse\_x, mouse\_y, 0, 0, 0, 0, c\_white, 1, 1, 2);
physics\_particle\_group\_circle(100);
mLastGroup = physics\_particle\_group\_end();

The above code stores the flags for the particle type and the particle group properties in variables then uses these to create a circular particle group with a 100px radius at the mouse position.