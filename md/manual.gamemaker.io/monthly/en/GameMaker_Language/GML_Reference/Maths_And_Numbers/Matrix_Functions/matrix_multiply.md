---
title: "matrix_multiply"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Maths_And_Numbers/Matrix_Functions/matrix_multiply.htm"
converted: "2025-09-14T04:00:02.013Z"
---

# matrix\_multiply

This function multiplies two matrices together to create a new matrix and returns the new matrix.

The order of the matrices in the multiplication affects the result. This function multiplies the two matrices you pass it in the following order:

result = matrix2 \* matrix1;

To know the order in which the transforms held by these matrices are applied this needs to be read from right to left, i.e. the result matrix _first_ applies the transform stored in matrix1 and _then_ the transform stored in matrix2.

NOTE You cannot use a matrix constant as an argument with this function, so if you wish to multiply the (for example) view matrix with a custom matrix that you have built, you must first call [matrix\_get](matrix_get.md) and assign the view matrix values to an array variable, then multiply it by your custom matrix, and then set the chosen matrix (view, projection or world).

#### Syntax:

matrix\_multiply(matrix1, matrix2);

| Argument | Type | Description |
| --- | --- | --- |
| matrix1 | Matrix | The first matrix to use (storing the first transformation to apply) |
| matrix2 | Matrix | The second matrix to use (storing the second transformation to apply) |

#### Returns:

[Matrix](Matrix_Functions.md)

#### Example 1: Basic Use

var v\_matrix = matrix\_get(matrix\_view);
var new\_matrix = matrix\_multiply(v\_matrix, my\_matrix);
matrix\_set(matrix\_view, new\_matrix);

The above code gets the current view matrix, multiplies that with a custom matrix and sets the view matrix to the resulting matrix.

#### Example 2: Drawing a Rectangle Relative to a Circle

Draw Event

var \_mat\_child\_local = matrix\_build(100, 100, 0, 0, 0, current\_time/2, 1, 1, 1);
var \_mat\_parent\_global = matrix\_build(x, y, 0, 0, 0, current\_time/12 + dsin(current\_time/4) \* 30, 1, 1, 1);
var \_mat\_child\_global = matrix\_multiply(\_mat\_child\_local, \_mat\_parent\_global);

matrix\_set(matrix\_world, \_mat\_parent\_global);
draw\_circle\_color(0, 0, 100, c\_blue, c\_blue, false);
matrix\_set(matrix\_world, \_mat\_child\_global);
draw\_rectangle\_color(-10, -10, 10, 10, c\_red, c\_red, c\_red, c\_red, false);
matrix\_set(matrix\_world, matrix\_build\_identity());

The code example above shows how matrix\_multiply can be used to draw a rectangle shape relative to a circle shape.

In the Draw event, two matrices are built using [matrix\_build](matrix_build.md) and stored in variables \_mat\_child\_local and \_mat\_parent\_global. The first matrix represents the transform of the rectangle relative to the circle, the second matrix that of the circle relative to the room. Using matrix\_multiply a third matrix is then created that is the product of the first two matrices. The rectangle's transform is the first argument passed to the function, the circle's transform the second, i.e. the transformation stored in the resulting matrix will _first_ apply the rectangle's transform, _then_ the circle's transform.

Next, the world matrix is set to \_mat\_parent\_global using [matrix\_set](matrix_set.md) and a blue circle with radius 100 is drawn. After that, the world matrix is set to \_mat\_child\_global and a red square with a side of 20 is drawn.

Finally, the world matrix is reset to an identity matrix to not affect further drawing.