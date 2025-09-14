---
title: "physics_particle_group_get_vel_y"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Physics/Soft_Body_Particles/physics_particle_group_get_vel_y.htm"
converted: "2025-09-14T04:00:06.757Z"
---

# physics\_particle\_group\_get\_vel\_y

With this function you can retrieve the vertical velocity of a group of particles. The group value is that which was returned when you created the group of particles using the function [physics\_particle\_group\_end()](physics_particle_group_end.md), and the function will return a value which is the combined value of the currently set flags.

#### Syntax:

physics\_particle\_group\_get\_vel\_y(group)

| Argument | Type | Description |
| --- | --- | --- |
| group | Physics Particle Group ID | The particle group to get. |

#### Returns:

[Real](../../../GML_Overview/Data_Types.md)

#### Example:

vx = physics\_particle\_group\_get\_vel\_x(group1);
vy = physics\_particle\_group\_get\_vel\_y(group1);

The above code will get the horizontal and vertical velocity of the particle group indexed in the variable "group1" and store them in variables.