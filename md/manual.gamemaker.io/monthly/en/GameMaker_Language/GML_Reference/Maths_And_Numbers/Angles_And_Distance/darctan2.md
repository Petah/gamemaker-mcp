---
title: "darctan2"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Maths_And_Numbers/Angles_And_Distance/darctan2.htm"
converted: "2025-09-14T04:00:00.683Z"
---

# darctan2

This function returns the inverse tangent of an angle y/x, where y = Opposite side of triangle and x = Adjacent side of triangle. Unlike [darctan()](darctan.md) the function darctan2() is valid for all angles and so may be used to convert a vector to an angle without risking division by zero, and it also returns a result in the correct quadrant.

**NOTE**: The value returned is in degrees, not radians.

#### Syntax:

darctan2(y, x);

| Argument | Type | Description |
| --- | --- | --- |
| y | Real | The y coordinate to calculate. |
| x | Real | The x coordinate to calculate. |

#### Returns:

[Real](../../../GML_Overview/Data_Types.md)

#### Example:

val = darctan2(1, 1);

This will set "val" to the correct angle.