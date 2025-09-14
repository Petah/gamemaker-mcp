---
title: "physics_particle_group_get_mass"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Physics/Soft_Body_Particles/physics_particle_group_get_mass.htm"
converted: "2025-09-14T04:00:06.727Z"
---

# physics\_particle\_group\_get\_mass

With this function you can retrieve the mass of an entire group of particles. The group value is that which was returned when you created the group of particles using the function [physics\_particle\_group\_end()](physics_particle_group_end.md).

#### Syntax:

physics\_particle\_group\_get\_mass(group)

| Argument | Type | Description |
| --- | --- | --- |
| group | Physics Particle Group ID | The particle group to get. |

#### Returns:

[Real](../../../GML_Overview/Data_Types.md)

#### Example:

var \_mass = physics\_particle\_group\_get\_mass(group1);

The above code will get the mass of the particle group indexed in the variable "group1" and store it in a variable.