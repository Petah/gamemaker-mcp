---
title: "shader_set_uniform_matrix"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Shaders/shader_set_uniform_matrix.htm"
converted: "2025-09-14T03:59:40.222Z"
---

# shader\_set\_uniform\_matrix

This function sets the value (or values) of a shader constant to the current transform matrix (as set using the [Matrix Functions](../../Maths_And_Numbers/Matrix_Functions/Matrix_Functions.md)).

You must previously have gotten the "handle" of the constant using the function [shader\_get\_uniform](shader_get_uniform.md).

NOTE All uniforms must be set _after_ calling the function [shader\_set](shader_set.md) and _before_ calling [shader\_reset](shader_reset.md).

#### Syntax:

shader\_set\_uniform\_matrix(handle);

| Argument | Type | Description |
| --- | --- | --- |
| handle | Shader Uniform Handle | The handle of the shader constant to set. |

#### Returns:

N/A

#### Example:

shader\_set(sh\_glass);
shader\_matrix = shader\_get\_uniform(sh\_glass, "u\_vMatrix");
shader\_set\_uniform\_matrix(shader\_matrix);
draw\_self();
shader\_reset();

The above code will get the handle of the shader constant u\_vMatrix then set that constant to the current transform matrix.