---
title: "surface_get_texture_depth"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Surfaces/surface_get_texture_depth.htm"
converted: "2025-09-14T03:59:54.467Z"
---

# surface\_get\_texture\_depth

This function returns the depth texture of the given surface or -1 if no depth texture exists.

The texture can then be passed to [texture\_set\_stage](../Textures/texture_set_stage.md) for use in [Shaders](../../Asset_Management/Shaders/Shaders.md).

The depth value is stored in the red channel and can be accessed in a shader as follows:

float depth = texture2D(depth\_texture, v\_vTexcoord).r;

When you write to the depth buffer with a [perspective](../../Maths_And_Numbers/Matrix_Functions/matrix_build_projection_perspective.md "matrix_build_projection_perspective()") [projection](../../Maths_And_Numbers/Matrix_Functions/matrix_build_projection_perspective_fov.md "matrix_build_projection_perspective_fov()") set, the depth values stored in the texture will not be linear and you need to convert the values to linear ones in a custom shader, using the following shader function:

/// @param depth Non-linear depth.
/// @param zparam Equals (zfar / znear).
/// @return Linearized depth, in range 0..1.
float LinearizeDepth(float depth, float zparam)
{
# if !defined(\_YY\_HLSL11\_)
    depth = depth \* 2.0 - 1.0;
# endif
    return 1.0 / ((1.0 - zparam) \* depth + zparam);
}

In the shader you can then use this function as follows:

Vertex Shader

// Identical to passthrough vertex shader code

Fragment Shader

precision highp float; // This might be required on some platforms!

varying vec2 v\_vTexcoord;

uniform float u\_fZParam;

// Define the LinearizeDepth() function here
// ...

void main()
{
    float depth = texture2D(gm\_BaseTexture, v\_vTexcoord).r;
    depth = LinearizeDepth(depth, u\_fZParam);
    gl\_FragColor = vec4(vec3(depth), 1.0);
}

In the code above the calculated depth value is assigned to all three colour channels (R, G and B) to output a greyscale image.

#### Syntax:

surface\_get\_texture\_depth(surface)

| Argument | Type | Description |
| --- | --- | --- |
| surface | Surface | The surface of which to get the depth texture |

#### Returns:

[Texture](../../Asset_Management/Sprites/Sprite_Information/sprite_get_texture.md) (or -1 if no depth texture exists)

#### Example: Displaying a Depth Texture

Create Event

znear = 1;
zfar = 15000;
zparam = zfar / znear;
u\_zparam = shader\_get\_uniform(sh\_display\_depth, "u\_fZParam");

view\_enabled = true;
view\_visible\[0\] = true;
camera\_set\_proj\_mat(view\_camera\[0\], matrix\_build\_projection\_perspective\_fov(-45, room\_width/room\_height, znear, zfar));
camera\_set\_view\_mat(view\_camera\[0\], matrix\_build\_lookat(room\_width/2, room\_height/2, 0, room\_width/2, room\_height/2, 1, 0, -1, 0));

Draw Event

gpu\_set\_ztestenable(true);
gpu\_set\_depth(1000);
draw\_rectangle(100, 100, 200, 200, false);
gpu\_set\_depth(4000);
draw\_circle(150, 300, 50, false);
gpu\_set\_depth(2000 + dsin(current\_time \* .1) \* 1000);
draw\_triangle(50, 160, 350, 50, 170, 300, false);
gpu\_set\_depth(14000 + dsin(current\_time \* .2) \* 6000);
draw\_triangle(650, 500, 900, 700, 1200, 800, false);
gpu\_set\_ztestenable(false);

Draw GUI Event

var \_texture = surface\_get\_texture\_depth(application\_surface);

shader\_set(sh\_display\_depth);
shader\_set\_uniform\_f(u\_zparam, zparam);
draw\_primitive\_begin\_texture(pr\_trianglestrip, \_texture);
draw\_vertex\_texture(room\_width/2, 0, 0, 0);
draw\_vertex\_texture(room\_width, 0, 1, 0);
draw\_vertex\_texture(room\_width/2, room\_height/2, 0, 1);
draw\_vertex\_texture(room\_width, room\_height/2, 1, 1);
draw\_primitive\_end();
shader\_reset();

The above code shows an extended example on how to use the depth buffer with a perspective projection. A few shapes are drawn to the application surface, the application surface's depth texture is then retrieved and the depth texture drawn on top of the application surface.

In the Create event, the znear and zfar values of the perspective projection are initialised, as well as the ratio zfar / znear. The shader uniform is also retrieved. After that, views are enabled and view\[0\] is made visible. This view's camera is then assigned a projection and view matrix.

In the Draw event a few shapes are then drawn at various depth values. Depth testing is first enabled with a call to [gpu\_set\_ztestenable](../GPU_Control/gpu_set_ztestenable.md), then the shapes are drawn. Before each shape is drawn its depth is set with a call to the [gpu\_set\_depth](../GPU_Control/gpu_set_depth.md) function. Drawing is done on the [application\_surface](application_surface.md), since this is the draw target that GameMaker uses by default. At the end of the Draw event, z-testing is disabled again.

Finally, in the Draw GUI event the depth texture of the [application\_surface](application_surface.md) is retrieved with a call to surface\_get\_texture\_depth and stored in a temporary variable \_texture. The depth texture is then drawn in the top-right corner of the window on top of the application surface. It is displayed on a textured primitive drawn using the [Primitive Functions](../Primitives/Primitives_And_Vertex_Formats.htm#h), using a shader sh\_display\_depth that uses the fragment shader code and the LinearizeDepth() function provided on this page.