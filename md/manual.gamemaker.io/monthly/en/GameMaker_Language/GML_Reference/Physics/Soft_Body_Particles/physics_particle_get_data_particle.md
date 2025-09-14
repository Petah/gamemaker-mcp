---
title: "physics_particle_get_data_particle"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Physics/Soft_Body_Particles/physics_particle_get_data_particle.htm"
converted: "2025-09-14T04:00:06.451Z"
---

# physics\_particle\_get\_data\_particle

This function returns various pieces of information about a single particle in the physics simulation using the given flags checked.

The particle index (its ID) is that which was returned by the function [physics\_particle\_create](physics_particle_create.md), and the buffer used must have been created previously using the function [buffer\_create](../../Buffers/buffer_create.md). It should be of the "grow" type, with the size being approximately that of the expected return data. The flags themselves are set using the constants given below, and you would use the bitwise _or_ "|" to create a single flag value to get the desired information.

| Constant | Description | Data Type |
| --- | --- | --- |
| phy_particle_data_flag_typeflags | The flags value for the particle. | buffer_u32 |
| phy_particle_data_flag_position | The x and y position of the particle. | 2 x buffer_f32 |
| phy_particle_data_flag_velocity | The horizontal and vertical speed. | 2 x buffer_f32 |
| phy_particle_data_flag_colour | The colour and alpha value (hexadecimal). | buffer_u32 |
| phy_particle_data_flag_category | The particle category (as defined when you created the particle). | buffer_u32 |

#### Syntax:

physics\_particle\_get\_data\_particle(ind, buffer, flags)

| Argument | Type | Description |
| --- | --- | --- |
| ind | Physics Particle ID | The index (ID) of the particle to get the data from. |
| buffer | Buffer | The (previously created) buffer to store the data. |
| flags | Physics Particle Data Flag Constant(s) | The flags to use to extract data about specific particle types. |

#### Returns:

N/A

#### Example:

var part = physics\_particle\_create(flags, x, y, x\_vel, y\_vel, c\_white, 1, 1)
var flags = phy\_particle\_data\_flag\_position | phy\_particle\_data\_flag\_velocity;
var buffer = buffer\_create(16, buffer\_grow, 4);
physics\_particle\_get\_data\_particle(part, buffer, flags);
px = buffer\_read(buffer, buffer\_f32);
py = buffer\_read(buffer, buffer\_f32);
pvelx = buffer\_read(buffer, buffer\_f32);
pvely = buffer\_read(buffer, buffer\_f32);
buffer\_delete(buffer);

The above code gets the position and velocity of the particle indexed by the variable part and stores the data in a number of variables.