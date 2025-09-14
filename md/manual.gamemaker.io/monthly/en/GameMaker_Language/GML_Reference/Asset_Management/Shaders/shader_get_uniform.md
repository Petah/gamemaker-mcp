---
title: "shader_get_uniform"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Shaders/shader_get_uniform.htm"
converted: "2025-09-14T03:59:40.065Z"
---

# shader\_get\_uniform

Since you cannot change the value of a shader constant within the shader itself, you have to set it before calling the shader using one of the available **uniform set** functions. However, to be able to do that you must first call this function to get the "handle" of the shader constant that you will want to change.

**NOTE** Although a shader is made up of two discreet programs (vertex and fragment) this function will not differentiate between the two and will return the handle of the shader constant from either of them.

#### Syntax:

shader\_get\_uniform(shader, uniform);

| Argument | Type | Description |
| --- | --- | --- |
| shader | Shader Asset | The handle of the shader to use. |
| uniform | String | The shader constant to get the handle of (a string). |

#### Returns:

[Shader Uniform Handle](shader_get_uniform.md)

#### Example:

shader\_params = shader\_get\_uniform(shd\_glass, "u\_vRefractColour");

The above code will get the handle of the shader constant "u\_vRefractColour".