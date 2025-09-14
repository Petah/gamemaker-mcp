---
title: "physics_particle_group_get_data"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Physics/Soft_Body_Particles/physics_particle_group_get_data.htm"
converted: "2025-09-14T04:00:06.701Z"
---

# physics\_particle\_group\_get\_data

This function returns various pieces of information about a group of particles in the physics simulation using the given flags checked. The group index (its ID) is that which was returned by the function [physics\_particle\_group\_end](physics_particle_group_end.md), and the buffer used must have been created previously using the function [buffer\_create](../../Buffers/buffer_create.md). It should be of the "grow" type, with the size being approximately that of the expected return data. The flags themselves are set using the constants given below, and you would use the [bitwise _or_](../../../../Additional_Information/Bitwise_Operators.md) | to create a single flag value to get the desired information.

| Constant | Description | Data Type |
| --- | --- | --- |
| phy_particle_data_flag_typeflags | The flags value for the particle. | buffer_u32 |
| phy_particle_data_flag_position | The x and y position of the particle. | 2 x buffer_f32 |
| phy_particle_data_flag_velocity | The horizontal and vertical speed. | 2 x buffer_f32 |
| phy_particle_data_flag_colour | The colour and alpha value (hexadecimal). | buffer_f32 |
| phy_particle_data_flag_category | The particle category (as defined when you created the group to which it belongs). | buffer_u32 |

#### Syntax:

physics\_particle\_group\_get\_data(group, buffer, flags)

| Argument | Type | Description |
| --- | --- | --- |
| group | Physics Particle Group ID | The group index (ID) of the particle group to get the data from. |
| buffer | Buffer | The (previously created) buffer to store the data. |
| flags | Physics Particle Data Flag Constant(s) | The flags to use to extract data about specific particle types. |

#### Returns:

N/A

#### Example:

var count = physics\_particle\_group\_count(gp);
var flags = phy\_particle\_data\_flag\_position | phy\_particle\_data\_flag\_colour;
if (count > 0)
{
    var buffer = buffer\_create(count \* 12, buffer\_grow, 4);
    physics\_particle\_group\_get\_data(gp, buffer, flags);
    for (var n = 0; n < count; n++;)
    {
        var xx = buffer\_read(buffer, buffer\_f32);
        var yy = buffer\_read(buffer, buffer\_f32);
        var argb = buffer\_read(buffer, buffer\_u32);
        var alpha = (argb >> 24) & 255;
        draw\_sprite\_ext(sprBlob, 0, xx, yy, 1, 1, 0, c\_green, alpha);
    }
    buffer\_delete(buffer);
}

The above code gets the position and velocity of the every particle in the group indexed by the variable gp, stores the buffer data in a number of variables, and then uses that to draw a sprite at the position of each particle in the group.