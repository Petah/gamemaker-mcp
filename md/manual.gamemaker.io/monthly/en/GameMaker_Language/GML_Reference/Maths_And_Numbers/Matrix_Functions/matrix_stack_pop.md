---
title: "matrix_stack_pop"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Maths_And_Numbers/Matrix_Functions/matrix_stack_pop.htm"
converted: "2025-09-14T04:00:02.080Z"
---

# matrix\_stack\_pop

This function removes the matrix that is at the top of the current matrix stack.

#### Syntax:

matrix\_stack\_pop();

#### Returns:

N/A

#### Example:

var m1 = matrix\_build(66, 145, 0, 0, 0, 0, 1, 1, 1);
var m2 = matrix\_build(0, 0, 0, 0, 0, image\_angle \* 6, 1, 1, 1) ;
matrix\_stack\_push(m1);
matrix\_stack\_push(m2);
matrix\_set(matrix\_world, matrix\_stack\_top());
draw\_sprite(spr\_tyre, 0, 0, 0);
matrix\_stack\_pop();
matrix\_stack\_pop();

The above code will build two new matrices and then push them onto the matrix stack. The world matrix is then set to the top of the stack, a sprite is drawn and the transforms are then popped from the stack.