---
title: "physics_particle_group_begin"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Physics/Soft_Body_Particles/physics_particle_group_begin.htm"
converted: "2025-09-14T04:00:06.554Z"
---

# physics\_particle\_group\_begin

With this function you can create a group of particles in a room. A group of particles is one where the particles necessary to create a specific form are created all at once as a group, permitting you to create simulated soft-bodies with various properties set by the flags used. The "flags" are the return value of a combination of the **particle constants** (see the function [physics\_particle\_create()](physics_particle_create.md) for details of these), while the "groupFlags" are a combination of the following **group constants** (or 0 for no flags):

| Physics Particle Group Flag Constant |
| --- |
| Constant | Description |
| phy_particle_group_flag_solid | A solid particle group prevents other fixtures from lodging inside of it. Should anything penetrate it, the solid particle group pushes the offending fixture back out to its surface, making a a solid particle group possess an especially strong repulsive force. |
| phy_particle_group_flag_rigid | Rigid particle groups are ones whose shape does not change, even when they collide with other fixtures. |

These group flags use bit-masking to create a final output value that is then checked to set the different basic properties of the group, apart from those set by the particle flags. You can use none, one or both of these constants by using the [bitwise _or_](../../../../Additional_Information/Bitwise_Operators.md) "|" to mask the appropriate bits (as shown in the example below).

Other than the flags, you can also set the position in the room to create the particle group at (the position given will be the center of mass of the finished group), the initial horizontal and vertical velocity, as well as the angular velocity of the group, permitting you to create moving, rotating groups.

You can also set initial colour and alpha of all particles in the group, with the values being used when drawing the particles using the function [physics\_particle\_draw()](physics_particle_draw.md). After that you set the cohesive strength of particles in the group, which is another way of saying how strongly they "stick" to each other. The strength can be a value between 0 and 1, where 0 is no cohesion, and 1 is maximum cohesion.

Finally you have to give the category for your particle group. This value is an arbitrary integer value that you give each particle group that you want to have similar properties, and it can be used to set flags later for that specific category as well as a number of other things.

**NOTE**: You can use any integer value for the category **except 0** which is reserved by the simulation and is used to select all categories in other functions (like for drawing).

It is important to note that calling this function does _not_ create the group in the physics room. This function simply begins the process and sets the base particle properties for the group. To actually create the particle group you need to give it a _form_ (see the example below) and then call the function [physics\_particle\_group\_end()](physics_particle_group_end.md), at which point it will be created.

**NOTE**: The particle type flags that you set will also influence the cohesion of the particle group, such that if you flag the particles as being of the water type (for example), when the group collides with another fixture it will break apart, while if you flag the particle as a spring type, then it will maintain its cohesion on collision.

#### Syntax:

physics\_particle\_group\_begin(flags, groupflags, x, y, ang, xv, yv, ang\_velocity, col, alpha, strength, category)

| Argument | Type | Description |
| --- | --- | --- |
| flags | Physics Particle Flag Constant(s) | The flags to set on the particle. |
| groupflags | Physics Particle Group Flag Constant(s) | The group flags to set on the particle group (see table at the top). |
| x | Real | The x position to create the particle group at. |
| y | Real | The y position to create the particle group at. |
| ang | Real | The angle (in degrees) to rotate the group to on create. |
| xv | Real | The initial horizontal velocity. |
| yv | Real | The initial vertical velocity. |
| ang_velocity | Real | The initial angular velocity. |
| col | Colour | The base colour to use for the particle group. |
| alpha | Real | The base alpha to use for the particle group. |
| strength | Real | Set the cohesion strength between particles in the group. |
| category | Real | The user defined category to which the group belongs. |

#### Returns:

N/A

#### Example:

var flags = phy\_particle\_flag\_water | phy\_particle\_flag\_viscous | phy\_particle\_flag\_tensile;
var groupflags = phy\_particle\_group\_flag\_solid | phy\_particle\_group\_flag\_rigid;
physics\_particle\_group\_begin(flags, groupflags, mouse\_x, mouse\_y, 0, 0, 0, 0, c\_white, 1, 1, 2);
physics\_particle\_group\_circle(100);
mLastGroup = physics\_particle\_group\_end();

The above code stores the flags for the particle type and the particle group properties in variables then uses these to create a circular particle group with a 100px radius at the mouse position.