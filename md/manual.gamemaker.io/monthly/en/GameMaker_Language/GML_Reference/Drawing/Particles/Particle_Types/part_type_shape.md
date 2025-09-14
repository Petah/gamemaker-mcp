---
title: "part_type_shape"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Particles/Particle_Types/part_type_shape.htm"
converted: "2025-09-14T03:59:52.509Z"
---

# part\_type\_shape

With this function you can set the sprite shape to use for the particle type.

NOTE Use [part\_type\_sprite](part_type_sprite.md) to use a custom sprite instead of a built-in shape.

NOTE This function can be used to change the shape of existing particles of a particle type.

The following constants are accepted for the particle type shape:

| Particle Shape Constant |
| --- |
| Constant | Description |
| pt_shape_pixel | A 1x1 pixel. (This is the default setting.) |
| pt_shape_disk | A filled circle. |
| pt_shape_square | A filled square. |
| pt_shape_line | An 8px wide horizontal line. |
| pt_shape_star | A five-point filled star. |
| pt_shape_circle | A 3px outlined circle. |
| pt_shape_ring | A circle with an inward glow (looks like a bubble). |
| pt_shape_sphere | A circle with an outward glow ' solid in the middle, glowing outwards. |
| pt_shape_flare | A harshly glowing point (looks like an actual star in the night). |
| pt_shape_spark | A spark effect ' like a star with multiple points fading out. |
| pt_shape_explosion | A squarish cloud of smoke ' requires multiple colours to resemble an explosion. |
| pt_shape_cloud | A thin cloud, requires up scaling and multiple particles to resemble a cloud. |
| pt_shape_smoke | A smooth version of the explosion effect. Use multiple to create a smoke cloud. |
| pt_shape_snow | A generic snowflake shape. |

![Particle Shapes](https://manual.gamemaker.io/monthly/en/assets/Images/Scripting_Reference/GML/Reference/Drawing/Particle_Sprites.png)

Overview of Particle Type Shapes

#### Syntax:

part\_type\_shape(ind, shape);

| Argument | Type | Description |
| --- | --- | --- |
| ind | Particle Type | The index of the particle type to set |
| shape | Particle Shape Constant | The shape to choose |

#### Returns:

N/A

#### Example:

global.p1 = part\_type\_create();
part\_type\_shape(global.p1, pt\_shape\_square);
part\_type\_size(global.p1, 1, 3, 0, 0);
part\_type\_scale(global.p1, 1, 1);
part\_type\_colour1(global.p1, c\_white);
part\_type\_alpha2(global.p1, 1, 0);
part\_type\_speed(global.p1, 2, 4, 0, 0);
part\_type\_direction(global.p1, 0, 180, 0, 0);
part\_type\_gravity(global.p1, 0.20, 270);
part\_type\_orientation(global.p1, 0, 0, 0, 0, 1);
part\_type\_blend(global.p1, 1);
part\_type\_life(global.p1, 15, 60);

The above code sets the particle type indexed in the global variable p1 to the shape of a square, then sets various other particle properties.