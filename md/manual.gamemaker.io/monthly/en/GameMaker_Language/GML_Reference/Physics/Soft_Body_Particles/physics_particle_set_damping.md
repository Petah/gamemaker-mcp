---
title: "physics_particle_set_damping"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Physics/Soft_Body_Particles/physics_particle_set_damping.htm"
converted: "2025-09-14T04:00:06.847Z"
---

# physics\_particle\_set\_damping

With this function you can set the linear damping of particles in the simulation. Damping is used to reduce the physics simulation velocity of instances over time, much like air resistance in the real world. This function is _global_ in scope, in that it will change the damping not just for new particles created after the change, but also for those already present in the simulation.

#### Syntax:

physics\_particle\_set\_damping(damping)

| Argument | Type | Description |
| --- | --- | --- |
| damping | Real | The linear damping to be applied to the particle fixture. |

#### Returns:

N/A

#### Example:

physics\_particle\_set\_radius(15);
physics\_particle\_set\_density(0.5);
physics\_particle\_set\_damping(1);
physics\_particle\_set\_gravity\_scale(1);

The above code will set the base properties for all particles in the simulation.