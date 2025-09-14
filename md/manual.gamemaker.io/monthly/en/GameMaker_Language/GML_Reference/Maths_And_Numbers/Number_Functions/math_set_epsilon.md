---
title: "math_set_epsilon"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Maths_And_Numbers/Number_Functions/math_set_epsilon.htm"
converted: "2025-09-14T04:00:02.407Z"
---

# math\_set\_epsilon

This function sets the epsilon value for number comparisons.

The epsilon is used to determine whether two numbers subject to rounding errors are close enough to be considered "equal". The default epsilon is 0.00001.

This is useful when dealing with floating point maths as it can reduce the "rounding errors" that make certain operations return values that appear incorrect or contrary to what we expect. For example, we may have added a value to the image index of a sprite and expect the result to be a single integer (5), but due to the nature of floating point maths, the actual final value ends up being something like 5.000002, so when we have the following check:

if (image\_index == 5)
{
    //do something
}

The code does not behave as expected and returns false. However, with the epsilon set to 0.00001, the [image\_index](../../Asset_Management/Sprites/Sprite_Instance_Variables/image_index.md) value is rounded to the nearest real number that is +/- 0.00001 of the original value, making the above comparison return true.

Floating point calculations may behave differently depending on the platform your game is running on. The default epsilon of 0.00001 provides a safe range for rounding errors across different platforms.

The epsilon value will be used for all the following comparison [Operators](../../../../../../../GameMaker_Language/GML_Overview/Expressions_And_Operators.md):

-   < : Less than
-   \> : Greater than
-   \== : Equal to
-   <= : Less than or equal to
-   \>= : Greater than or equal to
-   != : Not equal to

It is also used by the [sqrt](sqrt.md) function.

NOTE Setting an epsilon value of 0 will disable all rounding, and using a value of 1 will give an error.

#### Syntax:

math\_set\_epsilon(epsilon);

| Argument | Type | Description |
| --- | --- | --- |
| epsilon | Real | The new epsilon value (from 0 to 0.999999999). |

#### Returns:

[Real](../../../../../../../GameMaker_Language/GML_Overview/Data_Types.md)

#### Example:

math\_set\_epsilon(0.0001);

This will set the epsilon value for all further floating point operations.