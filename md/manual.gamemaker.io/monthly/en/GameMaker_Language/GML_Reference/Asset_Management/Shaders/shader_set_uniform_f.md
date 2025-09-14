---
title: "shader_set_uniform_f"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Shaders/shader_set_uniform_f.htm"
converted: "2025-09-14T03:59:40.132Z"
---

# shader\_set\_uniform\_f

With this function you can set the value (or values) of a shader constant.

You must previously have gotten the "handle" of the constant using the function [shader\_get\_uniform](shader_get_uniform.md), and you will have to know what type of constant it is to pass the correct number of floating point values through to it, i.e.: if you have a vec2 you will need to pass two values to the function.

An exception to the above rule is when dealing with 32bit colour values. You can pass into the shader up to eight 32bit colour values and they will automatically be converted for you into vec4 values of 0 - 1. However for this you _must_ use the shader constant name in\_Colour, for a single colour, or in\_Colour0, in\_Colour1, etc. up to in\_Colour7 for multiple input values. The following to examples show how this would look in the shader itself:

    //Single colour
    attribute vec2 in\_Position;
    attribute vec4 in\_Colour;
    attribute vec2 in\_TextureCoord;

    //Multiple colours
    attribute vec2 in\_Position;
    attribute vec4 in\_Colour0;
    attribute vec4 in\_Colour1;
    attribute vec2 in\_TextureCoord;

Note too that if you want to do compressed normals, etc. using a 4 byte colour format, then you will also have to use the same in\_Colour format as shown above too.

Note that the number of values passed to this function should correspond to the total number of values of the uniform that you're setting: the number of components of the data type times the array length (in case of an array uniform). For example, uniform vec2 u\_vUV; expects 2 values, uniform vec4 u\_vColours\[16\]; expects 4 \* 16 = 64 values, uniform float u\_fIntensity\[8\]; expects 1 \* 8 = 8 values and uniform mat4 u\_mMatrices\[4\]; expects (4x4) x 4 = 64 values.

NOTE All uniforms must be set _after_ calling the function [shader\_set](shader_set.md) and _before_ calling [shader\_reset](shader_reset.md).

#### Syntax:

shader\_set\_uniform\_f(handle, value1 \[, value2, value3, value4\]);

| Argument | Type | Description |
| --- | --- | --- |
| handle | Shader Uniform Handle | The handle of the shader constant to set. |
| value1 ... value4 | Real | The floating point value (or values) to set the shader constant to. |

#### Returns:

N/A

#### Example:

shader\_set(shader\_Glass);
shader\_params = shader\_get\_uniform(shader\_Glass, "u\_vParams");
shader\_set\_uniform\_f(shader\_params, 0.1, 0.8, 0.25);
draw\_self();
shader\_reset();

The above code gets the handle of the shader constant u\_vParams ( a vec3), then sets that constant to the given values.