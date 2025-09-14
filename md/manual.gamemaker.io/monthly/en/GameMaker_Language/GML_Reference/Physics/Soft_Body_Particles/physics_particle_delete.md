---
title: "physics_particle_delete"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Physics/Soft_Body_Particles/physics_particle_delete.htm"
converted: "2025-09-14T04:00:06.309Z"
---

# physics\_particle\_delete

With this function you can delete (remove) a particle from the physics simulation in the current room. The function takes the unique ID of the particle to delete, as returned by the function [physics\_particle\_create()](physics_particle_create.md).

#### Syntax:

physics\_particle\_group\_delete(ind)

| Argument | Type | Description |
| --- | --- | --- |
| ind | Physics Particle ID | The index (ID) of the particle to delete. |

#### Returns:

N/A

#### Example:

physics\_particle\_delete(part);

The above code will delete the particle with the ID stored in the variable "part" from the simulation.