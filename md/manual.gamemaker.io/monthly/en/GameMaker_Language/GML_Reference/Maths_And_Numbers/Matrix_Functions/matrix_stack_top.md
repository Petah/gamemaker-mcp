---
title: "matrix_stack_top"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Maths_And_Numbers/Matrix_Functions/matrix_stack_top.htm"
converted: "2025-09-14T04:00:02.122Z"
---

# matrix\_stack\_top

This function returns the current top matrix of the stack, but does _not_ remove it (for that use [matrix\_stack\_pop()](../../../../../../../GameMaker_Language/GML_Reference/Maths_And_Numbers/Matrix_Functions/matrix_stack_pop.md)).

#### Syntax:

matrix\_stack\_top();

#### Returns:

[Matrix](Matrix_Functions.md)

#### Example:

var m1 = matrix\_build(66, 145, 0, 0, 0, 0, 1, 1, 1);
var m2 = matrix\_build(0, 0, 0, 0, 0, image\_angle \* 6, 1, 1, 1) ;
matrix\_stack\_push(m1);
matrix\_stack\_push(m2);
matrix\_set(matrix\_world, matrix\_stack\_top());
draw\_sprite(tyre, 0, 0, 0);
matrix\_stack\_pop();
matrix\_stack\_pop();

The above code will build two new matrices and then push them onto the matrix stack. The world matrix is then set to the top of the stack, a sprite is drawn and the transforms are then popped from the stack.