---
title: "physics_particle_set_density"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Physics/Soft_Body_Particles/physics_particle_set_density.htm"
converted: "2025-09-14T04:00:06.859Z"
---

# physics\_particle\_set\_density

With this function you can set the density of the particles in a physics simulation. Setting the density of the particle will have a direct impact on how much inertia it has as well as how it reacts to collisions, so if you make a small particle with a high density it will have a very large mass, but if you define a large particle with a low density it will have a much smaller mass. This function is _global_ in scope, in that it will change the density not just for new particles created after the change, but also for those already present in the simulation.

#### Syntax:

physics\_particle\_set\_density(density)

| Argument | Type | Description |
| --- | --- | --- |
| density | Real | The density of the particle fixture. |

#### Returns:

N/A

#### Example:

physics\_particle\_set\_radius(15);
physics\_particle\_set\_density(0.5);
physics\_particle\_set\_damping(1);
physics\_particle\_set\_gravity\_scale(1);

The above code will set the base properties for all particles in the simulation.