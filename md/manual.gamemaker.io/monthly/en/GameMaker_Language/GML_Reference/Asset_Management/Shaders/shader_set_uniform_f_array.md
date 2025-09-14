---
title: "shader_set_uniform_f_array"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Shaders/shader_set_uniform_f_array.htm"
converted: "2025-09-14T03:59:40.148Z"
---

# shader\_set\_uniform\_f\_array

With this function you can set a shader constant to an array of floating-point values.

You must previously have gotten the "handle" of the constant using the function [shader\_get\_uniform](shader_get_uniform.md), and you will have to have previously initialised the array.

Note that the number of values in the array should correspond to the total number of values of the uniform that you're setting: the number of components of the data type times the array length (in case of an array uniform). For example: uniform vec2 u\_vUV; expects 2 values, uniform vec4 u\_vColours\[16\]; expects 4 \* 16 = 64 values, uniform float u\_fIntensity\[8\]; expects 1 \* 8 = 8 values and uniform mat4 u\_mMatrices\[4\]; expects (4x4) x 4 = 64 values.

NOTE All uniforms must be set _after_ calling the function [shader\_set](shader_set.md) and _before_ calling [shader\_reset](shader_reset.md).

#### Syntax:

shader\_set\_uniform\_f\_array(handle, array);

| Argument | Type | Description |
| --- | --- | --- |
| handle | Shader Uniform Handle | The handle of the shader constant to set. |
| array | Array | A previously initialised array of floating point values. |

#### Returns:

N/A

#### Example:

shader\_set(shader\_Glass);
tex\_array\[0\] = 0.5;
tex\_array\[1\] = 0.1;
tex\_array\[2\] = 0.25;
shader\_params = shader\_get\_uniform(shader\_glass, "u\_vParams");
shader\_set\_uniform\_f\_array(shader\_params, tex\_array);
draw\_self();
shader\_reset();

The above code gets the handle of the shader constant u\_vParams then set that constant to the given array.