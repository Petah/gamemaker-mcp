---
title: "physics_particle_group_delete"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Physics/Soft_Body_Particles/physics_particle_group_delete.htm"
converted: "2025-09-14T04:00:06.612Z"
---

# physics\_particle\_group\_delete

With this function you can delete (remove) a particle group from the physics simulation in the current room. The function takes the unique group ID of the group to delete, as returned by the function [physics\_particle\_group\_end()](physics_particle_group_end.md).

#### Syntax:

physics\_particle\_group\_delete(ind)

| Argument | Type | Description |
| --- | --- | --- |
| ind | Physics Particle Group ID | The index (ID) of the particle group to delete. |

#### Returns:

N/A

#### Example:

physics\_particle\_group\_delete(gp1);

The above code will delete all the particles that comprise the group with the ID stored in the variable "gp1" from the simulation.