---
title: "particle_get_info"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Particles/particle_get_info.htm"
converted: "2025-09-14T03:59:52.871Z"
---

# particle\_get\_info

This function returns a [struct](../../../GML_Overview/Structs.htm#struct) with information about a [Particle System Asset](../../../../The_Asset_Editors/Particle_Systems.md) created using [The Particle System Editor](../../../../The_Asset_Editors/Particle_Systems.md).

The returned struct is a [Particle System Info Struct](particle_get_info.htm#particle_system_info_struct), which contains an [Array](../../../GML_Overview/Arrays.md) of [Particle Emitter Info Struct](particle_get_info.htm#particle_emitter_info_struct)s. Each of these emitter structs stores info on the particle type that the emitter uses in its parttype variable, which contains a [Particle Type Info Struct](particle_get_info.htm#particle_type_info_struct).

WARNING If no valid [Particle System Asset](../../../../The_Asset_Editors/Particle_Systems.md) is passed to the function, GameMaker will throw an error.

In a simplified way, the contents of the struct returned by this function look something like the following:

part\_sys\_info\_struct =
{
    emitters:
    \[
        {
            parttype:
            {
                // Particle type properties...
            }
            // All other particle emitter properties...
        }
        // More emitters...
    \]
    // All other particle system properties...
};

The tables below list all variables that are available in each of these three structs.

[Particle System InfoParticle System Info](particle_get_info.htm#)

| Variable Name | Data Type | Description |
| --- | --- | --- |
| name | String | The name of the particle system asset. |
| xorigin | Real | The X origin of the particle system. |
| yorigin | Real | The Y origin of the particle system. |
| global_space | Boolean | Whether this particle system has global space particles enabled (see part_system_global_space). |
| oldtonew | Boolean | Whether old particles should be drawn behind new ones (true) or not (false). |
| emitters | Array of Particle Emitter Info Struct | An array of emitter info structs, ordered the same as in The Particle System Editor. |

[Particle Emitter InfoParticle Emitter Info](particle_get_info.htm#)

| Variable Name | Data Type | Description |
| --- | --- | --- |
| ind | Particle Emitter | The particle emitter. |
| name | String | The name of the particle emitter. |
| mode | Particle Emitter Mode Constant | The mode in which to emit particles. Either ps_mode_stream or ps_mode_burst. |
| enabled | Boolean | Whether the particle emitter is enabled. |
| number | Real | The number of particles to create every frame if mode is ps_mode_stream or to create only once if mode is ps_mode_burst. Density (percent coverage) when in relative mode. |
| relative | Boolean | Whether the emitter is in relative mode, in which the number of particles created by the emitter is relative to the area of its region (see part_emitter_relative). |
| xmin | Real | The X coordinate of the left side of the emitter's region. |
| xmax | Real | The X coordinate of the right side of the emitter's region. |
| ymin | Real | The Y coordinate of the top of the emitter's region. |
| ymax | Real | The Y coordinate of the bottom of the emitter's region. |
| distribution | Particle Emitter Distribution Constant | The distribution style of the particles. One of the ps_distr_* constants. |
| shape | Particle Emitter Shape Constant | The shape of the emitter's region. One of the ps_shape_* constants. |
| parttype | Particle Type Info Struct | The particle type info struct containing information this emitter's particle type. |
| delay_min | Real | The minimum delay between particle bursts in stream mode, expressed in delay_unit. |
| delay_max | Real | The maximum delay between particle bursts in stream mode, expressed in delay_unit. |
| delay_unit | Time Source Unit Constant | The unit in which delay_min and delay_max are expressed |
| interval_min | Real | The minimum time between particle bursts in stream mode, expressed in interval_unit. |
| interval_max | Real | The maximum time between particle bursts in stream mode, expressed in interval_unit. |
| interval_unit | Time Source Unit Constant | The unit in which interval_min and interval_max are expressed. |

[Particle Type InfoParticle Type Info](particle_get_info.htm#)

| Variable Name | Data Type | Description |
| --- | --- | --- |
| General |
| ind | Particle Type | The particle type. This can be used e.g. with the function part_particles_create. |
| Shape / Sprite |
| sprite | Sprite Asset | The sprite that the particle type uses or an invalid sprite handle (-1). |
| frame | Real | The sprite subimage in case a sprite is used. |
| animate | Boolean | If true then the sprite is animated, starting from the frame subimage. |
| stretch | Boolean | If true then the animation is stretched over the particle's lifetime. |
| random | Boolean | If true then a random subimage is used instead of frame. |
| shape | Particle Shape Constant | The particle shape. One of the pt_shape_* constants. Used only if the particle type doesn't use a sprite. |
| Size |
| size_xmin | Real | The minimum size a particle of this type can have on the X axis when it is created (the size is determined randomly for each particle and can vary from size_xmin to size_xmax). |
| size_ymin | Real | The minimum size a particle of this type can have on the Y axis when it is created (the size is determined randomly for each particle and can vary from size_ymin to size_ymax). |
| size_xmax | Real | The maximum size a particle of this type can have on the X axis when it is created (the size is determined randomly for each particle and can vary from size_xmin to size_xmax). |
| size_ymax | Real | The maximum size a particle of this type can have on the Y axis when it is created (the size is determined randomly for each particle and can vary from size_ymin to size_ymax). |
| size_xincr | Real | The value to increase/decrease the particle size on the X axis by each frame. |
| size_yincr | Real | The value to increase/decrease the particle size on the Y axis by each frame. |
| size_xwiggle | Real | Value randomly added or subtracted from the particle's X size each frame. |
| size_ywiggle | Real | Value randomly added or subtracted from the particle's Y size each frame. |
| Scale |
| xscale | Real | The X scale of the particle image (sprite or shape). |
| yscale | Real | The Y scale of the particle image (sprite or shape). |
| Life |
| life_min | Real | The minimum life of particles of this type (in number of frames). |
| life_max | Real | The maximum life of particles of this type (in number of frames). |
| Secondary Particles |
| death_type | Particle Type | The type of particle spawned on death or -1. |
| death_number | Real | The number of particles spawned on death. |
| step_type | Particle Type | The type of particle spawned each step or -1. |
| step_number | Real | The number of particles spawned each step. |
| Speed |
| speed_min | Real | The minimum speed (in pixels per frame) of the particle when it's created (this starting speed is determined randomly for each particle and ranges from speed_min to speed_max). |
| speed_max | Real | The maximum speed (in pixels per frame) of the particle when it's created (this starting speed is determined randomly for each particle and ranges from speed_min to speed_max). |
| speed_incr | Real | The value to increase/decrease the particle speed by each frame. |
| speed_wiggle | Real | A value randomly added or subtracted from the particle speed each frame. |
| Direction |
| dir_min | Real | The minimum direction (in degrees) for a particle when it's created (this starting direction is determined randomly for each particle and ranges from dir_min to dir_max). |
| dir_max | Real | The maximum direction (in degrees) for a particle when it's created (this starting direction is determined randomly for each particle and ranges from dir_min to dir_max). |
| dir_incr | Real | The value to increase/decrease the particle direction by each frame. |
| dir_wiggle | Real | A value randomly added or subtracted from the particle direction each frame. |
| Gravity |
| grav_amount | Real | The amount of gravity applied to the particle each frame (in pixels per frame). |
| grav_dir | Real | The gravity direction. |
| Orientation |
| ang_min | Real | The minimum starting angle (in degrees) of the particle sprite when created (this starting angle is determined randomly for each particle and ranges from ang_min to ang_max). |
| ang_max | Real | The maximum starting angle (in degrees) of the particle sprite when created (this starting angle is determined randomly for each particle and ranges from ang_min to ang_max). |
| ang_incr | Real | The value to increase/decrease the particle angle by each frame. |
| ang_wiggle | Real | A value randomly added or subtracted from the particle angle each frame. |
| ang_relative | Boolean | If true then the particle angle is relative to its direction. |
| Color & Alpha |
| color1 | Colour | The color of the particle when created. |
| color2 | Colour | The color of the particle when halfway through its lifespan. |
| color3 | Colour | The color of the particle at the end of its lifespan. |
| alpha1 | Real | The alpha of the particle when created. |
| alpha2 | Real | The alpha of the particle when halfway through its lifespan. |
| alpha3 | Real | The alpha of the particle at the end of its lifespan. |
| additive | Boolean | If true then the particle is drawn with additive blending (i.e. using the Blend Mode Constant bm_add). |

Finally there is also a constant for the particle emitter mode:

| Constant | Description |
| --- | --- |
| ps_mode_stream | The particle emitter streams the given number of particles continuously (see part_emitter_stream) |
| ps_mode_burst | The particle emitter emits a single burst of the given number of particles (see part_emitter_burst) |

#### Syntax:

particle\_get\_info(partsys);

| Argument | Type | Description |
| --- | --- | --- |
| partsys | Particle System Asset | The particle system asset to get the info from. |

#### Returns:

[Particle System Info Struct](particle_get_info.htm#particle_system_info_struct)

#### Example 1: Particle Type Info

var \_particle\_info = particle\_get\_info(ps\_Clouds);
var \_asset\_name = \_particle\_info.name;

var \_arr\_emitters = \_particle\_info.emitters;
if (array\_length(\_arr\_emitters) > 0)
{
    var \_type\_info = \_arr\_emitters\[0\].parttype;

    if (\_type\_info.additive)
    {
        show\_debug\_message("The first emitter in {0} creates shiny particles!", \_asset\_name);
    }
}

The above code first gets information from an existing [Particle System Asset](../../../../The_Asset_Editors/Particle_Systems.md) ps\_Clouds using particle\_get\_info and assigns the returned struct to a temporary variable \_particle\_info. It then looks up the emitters in the particle system through the [Particle System Info Struct](particle_get_info.htm#particle_system_info_struct)'s emitters variable. If the particle system contains any emitters (i.e. the array's length is greater than 0), the first emitter's parttype variable is assigned to a temporary variable \_type\_info and checked for additive blending (bm\_add). Finally a debug message is shown if additive blending is used for the particle type.

#### Example 2: Listing Emitter Names

var \_particle\_info = particle\_get\_info(ps\_Environment);
var \_asset\_name = \_particle\_info.name;

var \_emitter\_names = array\_map(\_particle\_info.emitters, function(\_element, \_index) { return \_element.name; });
\_emitter\_names = string\_join\_ext(", ", \_emitter\_names);

show\_debug\_message("{0} contains the following particle emitters: {1}", \_asset\_name, \_emitter\_names);

The above code first calls particle\_get\_info to retrieve information about an existing [Particle System Asset](../../../../The_Asset_Editors/Particle_Systems.md) ps\_Environment. The asset's name is stored in a temporary variable \_asset\_name. After that, an array of emitter names is generated from the [Particle System Info Struct](particle_get_info.htm#particle_system_info_struct)'s emitters variable and converted to a string listing all names, separated by a comma, using [string\_join\_ext](../../Strings/string_join_ext.md). Finally a debug message displays the information in a readable form.