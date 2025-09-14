---
title: "tan"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Maths_And_Numbers/Angles_And_Distance/tan.htm"
converted: "2025-09-14T04:00:00.971Z"
---

# tan

In a right angled triangle _tan(val) = Opposite / Adjacent_ where val is one of the three angles.

**NOTE** This function takes a value in radians not degrees.

**NOTE**: Pi/2, (3 pi/2), -pi/2 and a vast number of other values will error with this function due to their returning infinity, a graph representation of this would produce asymptotes at these values.

#### Syntax:

tan(val);

| Argument | Type | Description |
| --- | --- | --- |
| val | Real | The angle (in radians) to return the tangent of. |

#### Returns:

[Real](../../../GML_Overview/Data_Types.md)

#### Example:

val = tan( pi );

This will set val to 0.