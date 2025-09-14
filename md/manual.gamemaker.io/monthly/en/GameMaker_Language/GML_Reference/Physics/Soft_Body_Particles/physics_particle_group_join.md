---
title: "physics_particle_group_join"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Physics/Soft_Body_Particles/physics_particle_group_join.htm"
converted: "2025-09-14T04:00:06.801Z"
---

# physics\_particle\_group\_join

With this function you can join two particle groups together, and the joined groups will then behave as if they were both part of a single entity. The groups should have been created with over-lapping edges, as, if they are not already touching, they will not be joined. The function takes the unique group IDs of the groups to join, as returned by the function [physics\_particle\_group\_end()](physics_particle_group_end.md), and you can use the function any number of times for a single group to join various soft bodies together.

#### Syntax:

physics\_particle\_group\_join(to, from)

| Argument | Type | Description |
| --- | --- | --- |
| to | Physics Particle Group ID | The first particle group to join. |
| from | Physics Particle Group ID | The second particle group to join. |

#### Returns:

N/A

#### Example:

var flags = phy\_particle\_flag\_water | phy\_particle\_flag\_viscous | phy\_particle\_flag\_tensile;
var groupflags = phy\_particle\_group\_flag\_solid;
physics\_particle\_group\_begin(flags, groupflags, mouse\_x- 45, mouse\_y, 0, 0, 0, 0, c\_white, 1, 1, 2);
physics\_particle\_group\_circle(50);
var g1 = physics\_particle\_group\_end();
physics\_particle\_group\_begin(flags, groupflags, mouse\_x + 45, mouse\_y, 0, 0, 0, 0, c\_white, 1, 1, 2);
physics\_particle\_group\_circle(50);
var g2 = physics\_particle\_group\_end();
physics\_particle\_group\_join(g1, g2);

The above code creates two circular particle groups and joins them together.