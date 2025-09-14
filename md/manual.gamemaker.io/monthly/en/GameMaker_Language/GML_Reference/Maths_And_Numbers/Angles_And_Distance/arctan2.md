---
title: "arctan2"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Maths_And_Numbers/Angles_And_Distance/arctan2.htm"
converted: "2025-09-14T04:00:00.613Z"
---

# arctan2

This function returns the inverse tangent of an angle y/x, where y = Opposite side of triangle and x = Adjacent side of triangle. Unlike [arctan()](arctan.md) the function arctan2(y, x) is valid for all angles and so may be used to convert a vector to an angle without risking division by zero, and it also returns a result in the correct quadrant.

**NOTE**: The value returned is in radians, not degrees.

#### Syntax:

arctan2(y, x);

| Argument | Type | Description |
| --- | --- | --- |
| y | Real | The y coordinate to calculate. |
| x | Real | The x coordinate to calculate. |

#### Returns:

[Real](../../../GML_Overview/Data_Types.md)

#### Example:

val = arctan2(1, 1);

This will set val to the correct angle, in this case 0.79.