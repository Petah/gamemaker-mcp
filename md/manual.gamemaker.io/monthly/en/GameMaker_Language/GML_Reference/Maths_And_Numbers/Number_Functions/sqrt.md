---
title: "sqrt"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Maths_And_Numbers/Number_Functions/sqrt.htm"
converted: "2025-09-14T04:00:02.610Z"
---

# sqrt

This function returns the square root of the given number.

If you multiply a number with itself, you get the square of that number, but sometimes you want to do the reverse and get the square root of a number. So to find what number has been multiplied with itself to get any given _positive_ value we use this function. For example: sqrt(9) will return 3 since 3 \* 3 = 9.

NOTE Negative values greater than or equal to negative epsilon are clamped to 0, i.e. they are considered 0. See [math\_set\_epsilon](math_set_epsilon.md).

#### Syntax:

sqrt(val);

| Argument | Type | Description |
| --- | --- | --- |
| val | Real | The number to get the square root of. |

#### Returns:

[Real](../../../../../../../GameMaker_Language/GML_Overview/Data_Types.md)

#### Example:

num = sqrt(val);

The above code will set the variable num to hold the square root of the value contained in val.