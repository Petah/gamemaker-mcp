---
title: "lerp"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Maths_And_Numbers/Number_Functions/lerp.htm"
converted: "2025-09-14T04:00:02.307Z"
---

# lerp

With this function you can find the value that equates to the position between two other values for a given percentage. So if you do, for example:

lerp(0, 10, 0.5)

you would get the return value of 5, which is 50% of the input values. You can extrapolate using this function too, by supplying a positive or negative value for the interpolation amount so that doing something like:

lerp(0, 10, 2)

will return a value of 20.

#### Syntax:

lerp(a, b, amt)

| Argument | Type | Description |
| --- | --- | --- |
| a | Real | The first value. |
| b | Real | The second value. |
| amt | Real | The amount to interpolate. |

#### Returns:

[Real](../../../../../../../GameMaker_Language/GML_Overview/Data_Types.md)

#### Example:

var \_gamespeed = game\_get\_speed(gamespeed\_fps);
xx = lerp(x, x + hspeed, \_gamespeed);
yy = lerp(y, y + vspeed, \_gamespeed);

The above code uses the linear interpolation function to predict where an instance would have moved to after one second of game time.