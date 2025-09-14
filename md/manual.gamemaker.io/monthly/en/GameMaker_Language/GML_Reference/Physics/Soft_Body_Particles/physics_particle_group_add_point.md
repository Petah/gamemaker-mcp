---
title: "physics_particle_group_add_point"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Physics/Soft_Body_Particles/physics_particle_group_add_point.htm"
converted: "2025-09-14T04:00:06.527Z"
---

# physics\_particle\_group\_add\_point

This function sets a point in the room to define the shape of a polygon which will be used to create a group of soft body particles. You must have previously signaled to GameMaker that you are going define a polygon shape using the function [physics\_particle\_group\_polygon()](physics_particle_group_polygon.md) and then use this function to define the individual points of the polygon. You must give at least three points when defining the polygon shape, but can give up to eight, and the function will permit the definition of concave polygons. However, if you generate a polygon with any cavities, the points within will be ignored and a convex shape will be created for the particle group.

#### Syntax:

physics\_particle\_group\_add\_point(x, y)

| Argument | Type | Description |
| --- | --- | --- |
| x | Real | The x position in the room for the point. |
| y | Real | The y position in the room for the point. |

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