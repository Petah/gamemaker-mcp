---
title: "physics_particle_get_data"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Physics/Soft_Body_Particles/physics_particle_get_data.htm"
converted: "2025-09-14T04:00:06.423Z"
---

# physics\_particle\_get\_data

This function returns various pieces of information about each particle in the physics simulation using the given flags checked.

The buffer used must have been created previously using the function [buffer\_create](../../Buffers/buffer_create.md), and should be of the "grow" type, with the size being approximately that of the expected return data. The flags are set using any of the constants given below, and you would use the [bitwise _or_](../../../../Additional_Information/Bitwise_Operators.md)  | to create a single flag value to get the desired information.

| Physics Particle Data Flag Constant |
| --- |
| Constant | Description | Data Type |
| phy_particle_data_flag_typeflags | The flags value for the particle. | buffer_u32 |
| phy_particle_data_flag_position | The x and y position of the particle. | 2 x buffer_f32 |
| phy_particle_data_flag_velocity | The horizontal and vertical speed. | 2 x buffer_f32 |
| phy_particle_data_flag_colour | The colour and alpha value (hexadecimal). | buffer_u32 |
| phy_particle_data_flag_category | The particle category (as defined when you created the particle or group to which it belongs). | buffer_u32 |

#### Syntax:

physics\_particle\_get\_data(buffer, flags)

| Argument | Type | Description |
| --- | --- | --- |
| buffer | Buffer | The (previously created) buffer to store the data. |
| flags | Physics Particle Data Flag Constant(s) | The flags to use to extract data about specific particle types. |

#### Returns:

N/A

#### Example:

var count = physics\_particle\_count();
var flags = phy\_particle\_data\_flag\_position | phy\_particle\_data\_flag\_colour;
if (count > 0)
{
    var buffer = buffer\_create(count \* 12, buffer\_grow, 4);
    physics\_particle\_get\_data(buffer, flags);
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

The above code gets the number of particles and creates a variable with the data flags to check, then checks to see if there are any particles in the room. If there are, a buffer is created and then filled with the particle data, which is checked and used to draw a sprite at the particle position.