---
title: "matrix_get"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Maths_And_Numbers/Matrix_Functions/matrix_get.htm"
converted: "2025-09-14T04:00:01.969Z"
---

# matrix\_get

This function gets the currently used matrix of the given type.

The matrix is returned as an [array](../../../GML_Overview/Arrays.md) of 16 values, corresponding to the given 4x4 matrix type, where column 1 is stored in elements \[0 - 3\], column 2 is stored in elements \[4 -7\], etc. (see the images on the [main page](Matrix_Functions.md)).

The available matrices are _view_, _projection_ and _world_, for which you would use one of the following constants:

| Matrix Type Constant |
| --- |
| Constant | Description |
| matrix_view | The current view matrix |
| matrix_projection | The current projection matrix |
| matrix_world | The current world matrix |

#### Syntax:

matrix\_get(type);

| Argument | Type | Description |
| --- | --- | --- |
| type | Matrix Type Constant | The type of matrix to get (see the constants listed above) |

#### Returns:

[Matrix](Matrix_Functions.md)

#### Example:

v\_array = matrix\_get(matrix\_view);

The above code will get the values of the current view matrix and store them in a variable v\_array.