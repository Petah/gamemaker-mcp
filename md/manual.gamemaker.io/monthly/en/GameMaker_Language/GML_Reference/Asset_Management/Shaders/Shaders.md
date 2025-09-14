---
title: "Shaders"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Shaders/Shaders.htm"
converted: "2025-09-14T03:59:39.985Z"
---

# Shaders

Shaders are an incredibly powerful tool for manipulating what and how things are rendered to the screen by the graphics card. Since these tiny programs are actually run on the graphics card itself, this means that they are extremely fast to process, freeing up valuable CPU cycles for more game logic.

To create a shader you will need to have written both a **Vertex Shader** and a **Fragment Shader** (also know as a **Pixel Shader**) using [The Shader Editor](../../../../The_Asset_Editors/Shaders.md), and even if (for example) you only wish to change the vertex positions for an instance being drawn, or if you only want to change the colour values for the pixels, you will still need **both** programs for a complete shader to work.

Note that shaders do **not** permit you to change the value of any variables that you pass into them, and so these will be called **shader constants** (or uniforms) in all the documentation that refers to them.

The default shader language is GLSL ES. For a complete overview of the language specification of GLSL ES that GameMaker currently uses, including the functions and variables that you can use to program the shaders themselves, please refer to the [GLSL ES Specification 1.00](https://registry.khronos.org/OpenGL/specs/es/2.0/GLSL_ES_Specification_1.00.pdf). If you're looking for a quick overview of these functions and variables, the following link is useful as well as it contains some quick reference cards for the OpenGL ES API on the last two cards: [OpenGL ES Reference Cards](https://www.khronos.org/opengles/sdk/docs/reference_cards/OpenGL-ES-2_0-Reference-card.pdf).

TIP If you are new to shaders or want a more complete guide to creating and using them in GameMaker, see [Guide To Using Shaders](../../../../Additional_Information/Guide_To_Using_Shaders.md).

## Using Shaders

Using a shader in your projects is very simple, and only requires a couple of lines of code to get the most basic of use from it:

shader\_set(myShader);
draw\_self();
shader\_reset();

As you can see, they are used in a similar manner to blend modes and surfaces, where you first select (set) the shader, draw what you want using it, then reset the shader again afterwards. If you wish to render the entire screen through a shader, and not just a single sprite or background, you will need to set up a surface to catch the current view, and then pass that through to the shader (see [Surfaces](../../Drawing/Surfaces/Surfaces.md) for more information).

NOTE Shaders, like anything related to drawing, can **only be used in the Draw events**. It is also worth noting that if you are trying to use a colour value in a shader and the object has no texture, the results will turn out black.

### Uniforms

If the shader you are using has input values, these are set using the _uniform_ functions. You would first get the uniform _handle_ (which is essentially an ID value for the uniform to be set) using the function [shader\_get\_uniform](shader_get_uniform.md) in the **Create Event** of the instance using the shader, and then store these handles in variables, something like this:

colour\_to\_find = shader\_get\_uniform(sShaderDemo5, "f\_Colour1");
colour\_to\_set = shader\_get\_uniform(sShaderDemo5, "f\_Colour2");

Once you have the uniform handles, they can then be set in the shader code for the **Draw Event** like this:

shader\_set(sShaderDemo5);
shader\_set\_uniform\_f(colour\_to\_find, 1, 1, 1);
shader\_set\_uniform\_f(colour\_to\_set, 1, 0, 0);
draw\_sprite(sprite\_index, image\_index, x + 24, y);
shader\_reset();

## Shader Compilation

Although shaders are accepted across all platforms, they are still device specific and if the hardware or software of the device cannot use shaders then you will get an error. To check this you can call the function [shaders\_are\_supported](shaders_are_supported.md), which returns whether the hardware supports shaders.

Even though your game runs fine, specific shaders may not have been compiled for a variety of reasons. Therefore, you are recommended to check that the shader is compiled before setting uniforms or using the shader itself by using [shader\_is\_compiled](shader_is_compiled.md), like this:

if (shader\_is\_compiled(myShader))
{
    shader\_set(myShader);
    draw\_self();
    shader\_reset();
}
else
{
    show\_debug\_message("Shader failed");
}

The reasons why a shader could not be compiled can vary, depending on the shader language used on the target platform and what that language supports or doesn't, according to its specification.

In general you'd do these checks on game start and store the results as a [global variable](../../../../../../../GameMaker_Language/GML_Overview/Variables/Global_Variables.md) to then check later.

### Compile Macros

GameMaker supports some conditional compile **macros** which can be used within GLSL ES shaders so they can perform alternative code on specific supported platforms. The macros and the platforms they will be generated on are shown in the table below:

| Shader Macro | Value | Target Platform |
| --- | --- | --- |
| _YY_GLSLES_ | 1 | All target platforms |
| _YY_GLSL_ | 2 | Mac and Ubuntu (Linux) |
| _YY_HLSL11_ | 3 | Windows, Xbox One |
| _YY_PSSL_ | 4 | PS4 |

When you compile your GameMaker project on any one of the listed platforms using a GLSL ES format shader, _one_ of the above macros will be generated which can then be used for checks in the shader code like this:

# ifdef \_YY\_HLSL11\_
// HLSL shader code here
# else
// GLSL shader code here
# endif

## Various

### Built-in Functions, Uniforms and Constants

While this manual will **not** cover any of the OpenGL shader functions and variables, it does contain a list of the ones that are unique to GameMaker. These constants are not part of the OpenGL specification for shaders and are supplied to simplify the integration of shaders within your projects.

-   [Built-In Shader Constants](Shader_Constants.md)

Also note that the following names are used for built-in functions and can therefore not be used:

-   CalcFogFactor
-   DoDirLight
-   DoPointLight
-   DoLighting
-   DoAlphaTest
-   DoFog

Note that these names are not highlighted in the Shader Editor.

### Precision

Shaders use a certain _precision_ to store variables. By default, this may not be the highest precision. You can add the following line of code:

precision highp float;

at the top of any pixel shader that requires a higher degree of mathematical precision. This can be useful on e.g. some Android devices that run their shaders in low precision mode.

## Function Reference

The following functions are available for drawing and setting shaders:

-   [shader\_get\_name](shader_get_name.md)
-   [shader\_get\_uniform](shader_get_uniform.md)
-   [shader\_get\_sampler\_index](shader_get_sampler_index.md)
-   [shader\_set](shader_set.md)
-   [shader\_set\_uniform\_f](shader_set_uniform_f.md)
-   [shader\_set\_uniform\_f\_array](shader_set_uniform_f_array.md)
-   [shader\_set\_uniform\_f\_buffer](shader_set_uniform_f_buffer.md)
-   [shader\_set\_uniform\_i](shader_set_uniform_i.md)
-   [shader\_set\_uniform\_i\_array](shader_set_uniform_i_array.md)
-   [shader\_set\_uniform\_matrix](shader_set_uniform_matrix.md)
-   [shader\_set\_uniform\_matrix\_array](shader_set_uniform_matrix_array.md)
-   [shader\_reset](shader_reset.md)
-   [shader\_is\_compiled](shader_is_compiled.md)
-   [shaders\_are\_supported](shaders_are_supported.md)
-   [shader\_current](shader_current.md)

We also have a special function which defines a global state for all built-in shaders:

-   [shader\_enable\_corner\_id](shader_enable_corner_id.md)

When working with texture samplers in shaders you will need information about the texture being used, in which case you can use the following functions:

-   [sprite\_get\_texture](../Sprites/Sprite_Information/sprite_get_texture.md)
-   [sprite\_get\_uvs](../Sprites/Sprite_Information/sprite_get_uvs.md)
-   [font\_get\_texture](../Fonts/font_get_texture.md)
-   [font\_get\_uvs](../Fonts/font_get_uvs.md)
-   [​texture\_get\_width](../../Drawing/Textures/texture_get_width.md)
-   [texture\_get\_height](../../Drawing/Textures/texture_get_height.md)
-   [texture\_get\_texel\_width](../../Drawing/Textures/texture_get_texel_width.md)
-   [texture\_get\_texel\_height](../../Drawing/Textures/texture_get_texel_height.md)
-   [texture\_set\_stage](../../Drawing/Textures/texture_set_stage.md)
-   [gpu\_set\_texfilter](../../Drawing/GPU_Control/gpu_set_texfilter.md)
-   [gpu\_set\_texfilter\_ext](../../Drawing/GPU_Control/gpu_set_texfilter_ext.md)
-   [gpu\_set\_texrepeat](../../Drawing/GPU_Control/gpu_set_texrepeat.md)
-   [gpu\_set\_texrepeat\_ext](../../Drawing/GPU_Control/gpu_set_texrepeat_ext.md)

Finally, GameMaker permits you to define your own **Vertex Formats** from which you can create your own custom primitives. This can greatly speed up shader operations or can be used to extend their capabilities and create surprising effects. You can find information on this in the following sections:

-   [Primitives And Vertex Formats](../../Drawing/Primitives/Primitives_And_Vertex_Formats.md)