---
title: "physics_particle_group_count"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Physics/Soft_Body_Particles/physics_particle_group_count.htm"
converted: "2025-09-14T04:00:06.599Z"
---

# physics\_particle\_group\_count

This function will return the number of particles that are active in a single group. The group index (ID) is the value that is returned when you call the function [physics\_particle\_group\_end()](physics_particle_group_end.md).

#### Syntax:

physics\_particle\_group\_count(group)

| Argument | Type | Description |
| --- | --- | --- |
| group | Physics Particle Group ID | The group index (ID) of the particle group to count. |

#### Returns:

[Real](../../../GML_Overview/Data_Types.md)

#### Example:

gp\_num = physics\_particle\_group\_count(group1);

The above code will get the number of particles used to make the group indexed in the variable "group1" and store the value in a variable.