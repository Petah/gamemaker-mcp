---
title: "dcos"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Maths_And_Numbers/Angles_And_Distance/dcos.htm"
converted: "2025-09-14T04:00:00.696Z"
---

# dcos

In a right angled triangle _cos(val) = Adjacent / Hypotenuse_ where val is one of the three angles. This function will always return a number between 1 and -1.

**NOTE**: This function takes a value in degrees, not radians.

#### Syntax:

dcos(val);

| Argument | Type | Description |
| --- | --- | --- |
| val | Real | The angle (in degrees) to return the cosine of. |

#### Returns:

[Real](../../../GML_Overview/Data_Types.md)

#### Example:

val = dcos(45);

This will set "val" to 0.71.