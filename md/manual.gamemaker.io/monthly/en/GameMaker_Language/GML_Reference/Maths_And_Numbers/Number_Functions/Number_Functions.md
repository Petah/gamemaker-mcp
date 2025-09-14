---
title: "Number Functions"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Maths_And_Numbers/Number_Functions/Number_Functions.htm"
converted: "2025-09-14T04:00:02.162Z"
---

# Number Functions

Real numbers in GameMaker are considered _double-precision floating-point numbers_ - that is to say that they have a decimal point in them with no fixed number of digits either before or after the point - or _integers_ - that is to say they are whole numbers with no decimal point value. 2, for example, is an integer but 2.01 is a floating point real.

NOTE On the **HTML5** target, all real numbers are doubles.

This distinction between integers and floats is very important when dealing with cross-platform development as the precision of calculations made on a Windows PC is _not_ the same as the precision of those same calculations when made on a mobile device. This means that you should pay particular attention when making comparisons, for example:

if (image\_index == 1)
{
    // Do something...
}

In the example above, if we have been setting the [image\_speed](../../Asset_Management/Sprites/Sprite_Instance_Variables/image_speed.md) to 0.25 - for example - then after four steps you may assume that the [image\_index](../../Asset_Management/Sprites/Sprite_Instance_Variables/image_index.md) value would be 1, but it _may_ be a value like 1.0000002 due to the way floating point maths works and so the evaluation will not be true. These types of errors can be quite hard to debug and so it is always good to be aware of them and to plan ahead and use other means of checking values or to use the appropriate flooring or rounding functions (listed below) to convert the number to check into an integer (for more information on floating point maths and why this is an issue, please [see here](https://floating-point-gui.de/)). For example the above code could be written as:

if (floor(image\_index) == 1)
{
    // Do something...
}

It is also worth noting that when using the **YoYo Compiler** targets, all expressions and functions are _evaluated from left to right_, while on all other target platforms they are evaluated _from right to left_, meaning that this - for example - will give different results depending on the platform:

val = max(num, ++num, num++);

NOTE For more information, see the section on [Evaluation Order](../../../GML_Overview/Evaluation_Order.md).

You can also use a special function available in GameMaker to set the **epsilon** value for floating point maths. When a real number is rounded to the nearest floating point number, the epsilon (also know as "machine epsilon") forms an upper bound on the relative error, and you can set and get the epsilon value using the following functions:

-   [math\_set\_epsilon](../../../../../../../GameMaker_Language/GML_Reference/Maths_And_Numbers/Number_Functions/math_set_epsilon.md)
-   [math\_get\_epsilon](math_get_epsilon.md)

## Function Reference

### Random Numbers and Values

**NOTE** When using the random functions, GameMaker maintains the same random seed every time you start the game. This makes debugging much easier as you are guaranteed that the random functions will always initially return the same value, however should you not wish this to happen, you must first set a new random seed at the very start of the game, either using [randomise](randomise.md) or [random\_set\_seed](random_set_seed.md).

-   [choose](choose.md)
-   [random](random.md)
-   [random\_range](random_range.md)
-   [irandom](../../../../../../../GameMaker_Language/GML_Reference/Maths_And_Numbers/Number_Functions/irandom.md)
-   [irandom\_range](irandom_range.md)
-   [random\_set\_seed](random_set_seed.md)
-   [random\_get\_seed](random_get_seed.md)
-   [randomise](randomise.md)

### Rounding and Truncating

These are all functions that will round values in some way, or select a single value from various given values.

-   [round](round.md)
-   [frac](frac.md)
-   [abs](../../../../../../../GameMaker_Language/GML_Reference/Maths_And_Numbers/Number_Functions/abs.md)
-   [sign](sign.md)
-   [floor](floor.md)
-   [ceil](ceil.md)
-   [min](min.md)
-   [max](../../../../../../../GameMaker_Language/GML_Reference/Maths_And_Numbers/Number_Functions/max.md)
-   [mean](mean.md)
-   [median](median.md)
-   [lerp](../../../../../../../GameMaker_Language/GML_Reference/Maths_And_Numbers/Number_Functions/lerp.md)
-   [clamp](clamp.md)

### Comparisons and Precision

-   [math\_set\_epsilon](../../../../../../../GameMaker_Language/GML_Reference/Maths_And_Numbers/Number_Functions/math_set_epsilon.md)
-   [math\_get\_epsilon](math_get_epsilon.md)

### Mathematical Functions

-   [exp](exp.md)
-   [ln](ln.md)
-   [power](power.md)
-   [sqr](sqr.md)
-   [sqrt](../../../../../../../GameMaker_Language/GML_Reference/Maths_And_Numbers/Number_Functions/sqrt.md)
-   [log2](log2.md)
-   [log10](log10.md)
-   [logn](logn.md)