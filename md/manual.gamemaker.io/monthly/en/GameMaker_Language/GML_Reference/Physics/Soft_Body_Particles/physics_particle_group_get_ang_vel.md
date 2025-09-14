---
title: "physics_particle_group_get_ang_vel"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Physics/Soft_Body_Particles/physics_particle_group_get_ang_vel.htm"
converted: "2025-09-14T04:00:06.636Z"
---

# physics\_particle\_group\_get\_ang\_vel

With this function you can retrieve the angular velocity of a group of particles. The group value is that which was returned when you created the group of particles using the function [physics\_particle\_group\_end()](physics_particle_group_end.md), and the function will return a value which is the combined value of the currently set flags.

#### Syntax:

physics\_particle\_group\_get\_ang\_vel(group)

| Argument | Type | Description |
| --- | --- | --- |
| group | Physics Particle Group ID | The particle group to get. |

#### Returns:

[Real](../../../GML_Overview/Data_Types.md)

#### Example:

ang\_v = physics\_particle\_group\_get\_ang\_vel(group1);

The above code will get the angular velocity of the particle group indexed in the variable "group1" and store it in a variable.