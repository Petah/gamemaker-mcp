---
title: "matrix_stack_set"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Maths_And_Numbers/Matrix_Functions/matrix_stack_set.htm"
converted: "2025-09-14T04:00:02.111Z"
---

# matrix\_stack\_set

This function overwrites the current top of the matrix stack with the specified matrix.

#### Syntax:

matrix\_stack\_set(matrix);

| Argument | Type | Description |
| --- | --- | --- |
| matrix | Matrix | The matrix index to use. |

#### Returns:

N/A

#### Example:

var m = matrix\_build(x, y, 0, 0, 0, 0, 1, 1, 1);
matrix\_stack\_set(m);

The above code will build a new matrix and store the resulting matrix index in the variable "m" before replacing the top of the matrix stack with it.