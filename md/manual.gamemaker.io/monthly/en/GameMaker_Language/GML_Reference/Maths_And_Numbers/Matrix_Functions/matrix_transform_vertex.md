---
title: "matrix_transform_vertex"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Maths_And_Numbers/Matrix_Functions/matrix_transform_vertex.htm"
converted: "2025-09-14T04:00:02.141Z"
---

# matrix\_transform\_vertex

This function transforms a vector by a matrix and returns the result as a new array.

It takes a transform matrix (as returned by the function [matrix\_build](matrix_build.md)) and the x, y and z values of the vector to transform. It can optionally take the value of the w component.

The function returns an [array](../../../GML_Overview/Arrays.md) of the same size as the number of components that you provide:

-   An array of 3 elements where array\[0\] = x, array\[1\] = y, array\[2\] = z if x, y and z are provided
-   An array of 4 elements where array\[0\] = x, array\[1\] = y, array\[2\] = z, array\[3\] = w if x, y, z _and_ w are provided

#### Syntax:

matrix\_transform\_vertex(matrix, x, y, z, \[w\]);

| Argument | Type | Description |
| --- | --- | --- |
| matrix | Matrix | The matrix to use |
| x | Real | The x component of the vector to transform |
| y | Real | The y component of the vector to transform |
| z | Real | The z component of the vector to transform |
| w | Real | OPTIONAL The w component of the vector to transform |

#### Returns:

[Array](../../../GML_Overview/Arrays.md) (3 elements (x, y and z are passed) or 4 elements (x, y, z and w are passed))

#### Example:

t\_matrix = matrix\_build(0, 0, 0, 0, 90, 0, 1, 2, 1);
new\_xyz = matrix\_transform\_vertex(t\_matrix, x, y, z);

The above code transforms the given values using the matrix stored in the variable t\_matrix and stores them in the array new\_xyz.