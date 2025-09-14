---
title: "physics_particle_get_group_flags"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Physics/Soft_Body_Particles/physics_particle_get_group_flags.htm"
converted: "2025-09-14T04:00:06.486Z"
---

# physics\_particle\_get\_group\_flags

With this function you can retrieve the group flags for a group of particles. The group value is that which was returned when you created the group of particles using the function [physics\_particle\_group\_end()](physics_particle_group_end.md), and the function will return a value which is the combined value of the currently set flags.

#### Syntax:

physics\_particle\_get\_group\_flags(group)

| Argument | Type | Description |
| --- | --- | --- |
| group | Physics Particle Group ID | The particle group to get. |

#### Returns:

[Real](../../../GML_Overview/Data_Types.md)

#### Example:

var flags = physics\_particle\_get\_group\_flags(group, flags);
if flags != (phy\_particle\_group\_flag\_solid | phy\_particle\_group\_flag\_rigid)
{
    flags = phy\_particle\_group\_flag\_solid | phy\_particle\_group\_flag\_rigid;
    physics\_particle\_set\_group\_flags(group, flags);
}

The above code will create a variable to store the flags value and then use it to check the flags of the group indexed in the variable "group". If they are not the same, the group is set with these flags.