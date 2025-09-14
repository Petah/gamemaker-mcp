---
title: "shader_set_uniform_i_array"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Shaders/shader_set_uniform_i_array.htm"
converted: "2025-09-14T03:59:40.208Z"
---

# shader\_set\_uniform\_i\_array

This function sets a shader constant to hold an array of values.

You must previously have gotten the "handle" of the constant using the function [shader\_get\_uniform](shader_get_uniform.md), and you will have to have previously initialised the array.

Note that the number of values in the array should correspond to the total number of values of the uniform that you're setting: the number of components of the data type times the array length (in case of an array uniform). For example, uniform vec2 u\_vUV; expects 2 values, uniform vec4 u\_vColours\[16\]; expects 4 \* 16 = 64 values, uniform float u\_fIntensity\[8\]; expects 1 \* 8 = 8 values and uniform mat4 u\_mMatrices\[4\]; expects (4x4) x 4 = 64 values.

NOTE All uniforms must be set _after_ calling the function [shader\_set](shader_set.md) and _before_ calling [shader\_reset](shader_reset.md).

#### Syntax:

shader\_set\_uniform\_i\_array(handle, array);

| Argument | Type | Description |
| --- | --- | --- |
| handle | Shader Uniform Handle | The handle of the shader constant to set. |
| array | Array | A previously initialised array of integer values. |

#### Returns:

N/A

#### Example:

shader\_set(shader\_Glass);
col\_array\[0\] = 255;
col\_array\[2\] = 255;
col\_array\[3\] = 64;
col\_array\[4\] = 128;
shader\_params = shader\_get\_uniform(shader\_tint, "cColourArray");
shader\_set\_uniform\_i\_array(shader\_params, col\_array);
draw\_self();
shader\_reset();

The above code will get the handle of the shader constant cColourArray then set that constant to the given array.