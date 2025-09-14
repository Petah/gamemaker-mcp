---
title: "matrix_stack_is_empty"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Maths_And_Numbers/Matrix_Functions/matrix_stack_is_empty.htm"
converted: "2025-09-14T04:00:02.070Z"
---

# matrix\_stack\_is\_empty

This function can be used to check whether the matrix stack is empty (returns true) or not (returns false).

#### Syntax:

matrix\_stack\_is\_empty();

#### Returns:

[Boolean](../../../../../../../GameMaker_Language/GML_Overview/Data_Types.md)

#### Example:

if (!matrix\_stack\_is\_empty())
{
    matrix\_stack\_clear();
}

The above code checks the matrix stack to see if it is empty and if it is not it clears it.