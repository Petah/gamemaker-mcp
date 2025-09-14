---
title: "physics_particle_group_polygon"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Physics/Soft_Body_Particles/physics_particle_group_polygon.htm"
converted: "2025-09-14T04:00:06.813Z"
---

# physics\_particle\_group\_polygon

This function will set the shape of the particle group that is being created. You must first have begun the group definition using the function [physics\_particle\_group\_begin()](physics_particle_group_begin.md), and then you would use this function to tell GameMaker that you are going to add in the approximate points that will be used to define the polygon shape - approximate because the exact shape will depend on the size of the base particles, as defined by the [physics\_particle\_set\_radius()](physics_particle_set_radius.md) function, as the physics simulation tries to "fit" as many of the particles as possible into the defined shape.

You would then define the points of the polygon calling the function [physics\_particle\_group\_add\_point()](physics_particle_group_add_point.md), setting the x/y position in the room for each one (minimum of 3, maximum of 8, and they can be defined as concave but the points inside the shape will be ignored). Finally you need to call [physics\_particle\_group\_end()](physics_particle_group_end.md) to create the group of particles in the room.

#### Syntax:

physics\_particle\_group\_polygon()

#### Returns:

N/A

#### Example:

var flags = phy\_particle\_flag\_water | phy\_particle\_flag\_viscous | phy\_particle\_flag\_tensile;
var groupflags = phy\_particle\_group\_flag\_solid;
physics\_particle\_group\_begin(flags, groupflags, mouse\_x, mouse\_y, 0, 0, 0, 0, c\_white, 1, 1, 2);
physics\_particle\_group\_polygon();
physics\_particle\_group\_add\_point(200, 200);
physics\_particle\_group\_add\_point(300, 300);
physics\_particle\_group\_add\_point(100, 300);
mLastGroup = physics\_particle\_group\_end();

The above code stores the flags for the particle type and the particle group properties in variables then uses these to create a polygon particle group of three sides at the mouse position.