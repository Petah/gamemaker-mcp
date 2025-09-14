---
title: "physics_particle_set_group_flags"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Physics/Soft_Body_Particles/physics_particle_set_group_flags.htm"
converted: "2025-09-14T04:00:06.912Z"
---

# physics\_particle\_set\_group\_flags

With this function you can change the group flags for a group of particles. The group value is that which was returned when you created the group of particles using the function [physics\_particle\_group\_end()](physics_particle_group_end.md), while the flags are the return value of a combination of the following **constants**:

| Constant | Description |
| --- | --- |
| phy_particle_group_flag_solid | A solid particle group prevents other fixtures from lodging inside of it. Should anything penetrate it, the solid particle group pushes the offending fixture back out to its surface, making a a solid particle group possess an especially strong repulsive force. |
| phy_particle_group_flag_rigid | Rigid particle groups are ones whose shape does not change, even when they collide with other fixtures. |

These group flags use bit-masking to create a final output value that is then checked to set the different basic properties of the group, apart from those set by the particle flags. You can use none, one or both of these constants by using the [bitwise _or_](../../../../Additional_Information/Bitwise_Operators.md) "|" to mask the appropriate bits (as shown in the example below).

#### Syntax:

physics\_particle\_set\_group\_flags(group, flags)

| Argument | Type | Description |
| --- | --- | --- |
| group | Physics Particle Group ID | The particle group to set. |
| flags | Physics Particle Group Flag Constant(s) | The flags to set on the particle group. |

#### Returns:

N/A

#### Example:

var flags = phy\_particle\_group\_flag\_solid | phy\_particle\_group\_flag\_rigid;
physics\_particle\_set\_group\_flags(group, flags);

The above code will create a variable to store the flags value and then use it to set the flags of all particles created in the group indexed by the variable "group".