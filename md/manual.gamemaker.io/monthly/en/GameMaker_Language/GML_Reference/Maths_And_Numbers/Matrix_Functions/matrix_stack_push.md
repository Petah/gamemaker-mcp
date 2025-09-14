---
title: "matrix_stack_push"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Maths_And_Numbers/Matrix_Functions/matrix_stack_push.htm"
converted: "2025-09-14T04:00:02.098Z"
---

# matrix\_stack\_push

This function is used to push a new matrix to the top of the current matrix stack. It will first multiply the given matrix with the matrix currently at the top of the stack, and then push the resulting matrix to the stack.

NOTE The matrix stack has a maximum size of 50 items.

This function is useful for applying multiple matrix transformations to your visuals without having to manually multiply various matrices together.

For example, you can have a base matrix pushed onto the stack that draws graphics into a certain rectangular area (say, a window). After drawing some graphics using that matrix, you can push another matrix onto the stack for drawing graphics inside a sub-area (like a button in the window). After drawing something in that sub-area, you can call [matrix\_stack\_pop()](../../../../../../../GameMaker_Language/GML_Reference/Maths_And_Numbers/Matrix_Functions/matrix_stack_pop.md) to remove its matrix from the stack and continue drawing visuals into the main window area.

#### Syntax:

matrix\_stack\_push(matrix);

| Argument | Type | Description |
| --- | --- | --- |
| matrix | Matrix | The matrix to push to the stack |

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