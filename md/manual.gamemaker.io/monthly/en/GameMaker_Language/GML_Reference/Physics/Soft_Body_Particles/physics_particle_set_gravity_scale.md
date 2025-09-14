---
title: "physics_particle_set_gravity_scale"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Physics/Soft_Body_Particles/physics_particle_set_gravity_scale.htm"
converted: "2025-09-14T04:00:06.894Z"
---

# physics\_particle\_set\_gravity\_scale

With this function you can set the gravity scale factor for particles in the physics simulation. The function is designed to help prevent instability in the physics simulation, especially when using very small particles which may behave unpredictably (i.e. break conservation of momentum) in scenarios such as explosions. Slowing these particles down by reducing gravity scale can stabilize their behaviour. This function is _global_ in scope, in that it will change the gravity scale not just for new particles created after the change, but also for those already present in the simulation.

**NOTE**: Adjusting the number of update iterations per step (using the function [physics\_world\_update\_iterations()](../The_Physics_World/physics_world_update_iterations.md) can also affect the effect of gravity on particles. Larger iteration sizes confer greater resistance to gravity.

#### Syntax:

physics\_particle\_set\_gravity\_scale(scale)

| Argument | Type | Description |
| --- | --- | --- |
| scale | Real | The scaling factor to be applied to gravity for all particles. |

#### Returns:

N/A

#### Example:

physics\_particle\_set\_radius(15);
physics\_particle\_set\_density(0.5);
physics\_particle\_set\_damping(1);
physics\_particle\_set\_gravity\_scale(1);

The above code will set the base properties for all particles in the simulation.