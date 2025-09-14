---
title: "physics_particle_set_radius"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Physics/Soft_Body_Particles/physics_particle_set_radius.htm"
converted: "2025-09-14T04:00:06.938Z"
---

# physics\_particle\_set\_radius

With this function you can set the radius (in pixels) for the particles in a physics simulation. This function is _global_ in scope, in that it will change the radius not just for new particles created after the change, but also for those already present in the simulation.

#### Syntax:

physics\_particle\_set\_radius(radius)

| Argument | Type | Description |
| --- | --- | --- |
| radius | Real | The radius (in pixels) of the particle fixture. |

#### Returns:

N/A

#### Example:

physics\_particle\_set\_radius(15);
physics\_particle\_set\_density(0.5);
physics\_particle\_set\_damping(1);
physics\_particle\_set\_gravity\_scale(1);

The above code will set the base properties for all particles in the simulation.