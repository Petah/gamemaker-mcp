---
title: "physics_particle_set_max_count"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Physics/Soft_Body_Particles/physics_particle_set_max_count.htm"
converted: "2025-09-14T04:00:06.924Z"
---

# physics\_particle\_set\_max\_count

This function will set the total permitted number of particles in a physics simulation. If you set this value to 0, then there is no cap the particles created, and setting it to any other value will stop any further particles being created when the total number of particles is equal to the value. Note that the _minimum_ number of particles you can create in a simulation is 128, so setting this value any lower will have no effect (unless set to 0).

#### Syntax:

physics\_particle\_set\_max\_count(count)

| Argument | Type | Description |
| --- | --- | --- |
| count | Real | The maximum number of particles to permit. |

#### Returns:

N/A

#### Example:

physics\_particle\_set\_max\_count(500);

The above code will set the particle cap of the physics simulation to 500.