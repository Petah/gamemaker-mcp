---
title: "matrix_build"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Maths_And_Numbers/Matrix_Functions/matrix_build.htm"
converted: "2025-09-14T04:00:01.804Z"
---

# matrix\_build

This function creates a custom transformation matrix from 3-dimensional (x, y, z) translation, rotation and scale values and returns it.

The array that stores the matrix contains 16 values in total, with the elements stored in **[column-major order](https://en.wikipedia.org/wiki/Row-_and_column-major_order)**, i.e. the initial 4 elements are **column 1**, the next 4 elements are **column 2** and so on, as part of a [4x4 matrix](Matrix_Functions.md). The following image shows the array indices mapped to their corresponding matrix element in this ordering:

![](../../../../assets/Images/Scripting_Reference/GML/Reference/Maths/matrix_array_indices_column_major.png)

NOTE When you set this matrix in a shader using [shader\_set\_uniform\_f\_array](../../Asset_Management/Shaders/shader_set_uniform_f_array.md), [shader\_set\_uniform\_matrix](../../Asset_Management/Shaders/shader_set_uniform_matrix.md) or [shader\_set\_uniform\_matrix\_array](../../Asset_Management/Shaders/shader_set_uniform_matrix_array.md), depending on the shader type and the target platform, you may receive the matrix transposed in the shader.

NOTE When you build a new matrix in this way, the order of operation is YXZ.

#### Syntax:

matrix\_build(x, y, z, xrotation, yrotation, zrotation, xscale, yscale, zscale);

| Argument | Type | Description |
| --- | --- | --- |
| x | Real | The x component of the translation vector. |
| y | Real | The y component of the translation vector. |
| z | Real | The z component of the translation vector. |
| xrotation | Real | The angle to rotate around the x-axis (in degrees). |
| yrotation | Real | The angle to rotate around the y-axis (in degrees). |
| zrotation | Real | The angle to rotate around the z-axis (in degrees). |
| xscale | Real | The x scale amount. |
| yscale | Real | The y scale amount. |
| zscale | Real | The z scale amount. |

#### Returns:

[Matrix](Matrix_Functions.md)

#### Example:

t\_matrix = matrix\_build(x, y, 0, 0, 90, 0, 1, 2, 1);

The above code builds a new matrix transform and stores the resulting matrix index in a variable t\_matrix.