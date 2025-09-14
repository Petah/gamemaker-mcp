---
title: "shader_set_uniform_matrix_array"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Shaders/shader_set_uniform_matrix_array.htm"
converted: "2025-09-14T03:59:40.239Z"
---

# shader\_set\_uniform\_matrix\_array

This function sets a shader constant to hold an array of matrix values.

You must previously have gotten the "handle" of the constant using the function [shader\_get\_uniform](shader_get_uniform.md), and you will have to have previously initialised the array as an array of floating point values, where each successive group of 16 floats holds the contents of a 4x4 matrix.

In the shader you'd define the uniform as follows:

uniform mat4 u\_mTransforms\[MAX\_TRANSFORMS\];

Every group of 16 floats in the array becomes directly accessible as an element of the uniform array, i.e. the first 16 array elements correspond to u\_mTransforms\[0\], the next 16 elements to u\_mTransforms\[1\], etc.

NOTE All uniforms must be set _after_ calling the function [shader\_set](shader_set.md) and _before_ calling [shader\_reset](shader_reset.md).

#### Syntax:

shader\_set\_uniform\_matrix\_array(handle, array);

| Argument | Type | Description |
| --- | --- | --- |
| handle | Shader Uniform Handle | The handle of the shader constant to set. |
| array | Array | A previously initialised array of floating point values. Its length should be a multiple of 16, i.e. number_of_matrices * 16. |

#### Returns:

N/A

#### Example:

max\_transforms = 32;
arr\_transform\_matrices = array\_create(max\_transforms \* 16);
var \_arr\_matrix = matrix\_build\_identity();
var i = 0;
repeat(max\_transforms)
{
    array\_copy(arr\_transform\_matrices, i \* 16, \_arr\_matrix, 0, 16);
    i++;
}

shader\_set(sh\_dynamic\_batch);
shader\_params = shader\_get\_uniform(sh\_dynamic\_batch, "u\_mTransforms");
shader\_set\_uniform\_matrix\_array(shader\_params, arr\_transform\_matrices);
vertex\_submit(vb\_batch, pr\_trianglelist, texture);
shader\_reset();

The above code example shows how to initialise an array of matrices and send it to a shader.

First the maximum number of transforms is defined and an array is created to hold that number of transforms. An identity matrix is then copied to the array to initialise each individual matrix. A shader sh\_dynamic\_batch that defines a mat4 array uniform named "u\_mTransforms" is then set as the current shader and the handle to the uniform is retrieved with [shader\_get\_uniform](shader_get_uniform.md). shader\_set\_uniform\_matrix\_array is then called to set the value of that uniform to the given array. Finally, a vertex buffer stored in the variable vb\_batch is then submitted.