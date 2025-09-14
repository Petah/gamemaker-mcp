---
title: "shader_set_uniform_i"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Shaders/shader_set_uniform_i.htm"
converted: "2025-09-14T03:59:40.187Z"
---

# shader\_set\_uniform\_i

This function sets the value (or values) of a shader constant.

You must previously have gotten the "handle" of the constant using the function [shader\_get\_uniform](shader_get_uniform.md), and you will have to know what type of constant it is to pass the correct number of integer values through to it, i.e.: if you have a vec2 you will need to pass two values to the function.

Note that the number of values passed to this function should correspond to the total number of values of the uniform that you're setting: the number of components of the data type times the array length (in case of an array uniform). For example, uniform vec2 u\_vUV; expects 2 values, uniform vec4 u\_vColours\[16\]; expects 4 \* 16 = 64 values, uniform float u\_fIntensity\[8\]; expects 1 \* 8 = 8 values and uniform mat4 u\_mMatrices\[4\]; expects (4x4) x 4 = 64 values.

NOTE All uniforms must be set _after_ calling the function [shader\_set](shader_set.md) and _before_ calling [shader\_reset](shader_reset.md).

#### Syntax:

shader\_set\_uniform\_i(handle, value1 \[, value2, value3, value4\]);

| Argument | Type | Description |
| --- | --- | --- |
| handle | Shader Uniform Handle | The handle of the shader constant to set. |
| value1 ... value4 | Real | The integer value (or values) to set the shader constant to. |

#### Returns:

N/A

#### Example:

shader\_set(shader\_Glass);
shader\_params = shader\_get\_uniform(shader\_glass, "u\_vParams");
shader\_set\_uniform\_i(shader\_params, 0, 65, 255);
draw\_self();
shader\_reset();

The above code will get the handle of the shader constant u\_vParams ( a vec3), then set that constant to the given integer values.