---
title: "dtan"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Maths_And_Numbers/Angles_And_Distance/dtan.htm"
converted: "2025-09-14T04:00:00.847Z"
---

# dtan

In a right angled triangle _dtan(val) = Opposite / Adjacent_ where "val" is one of the three angles.

**NOTE**: A vast number of values (90, or -90 for example) will error with this function due to their returning infinity, a graph representation of this would produce asymptotes at these values.

**NOTE**: This function takes a value in degrees not radians

#### Syntax:

dtan(val);

| Argument | Type | Description |
| --- | --- | --- |
| val | Real | The angle (in degrees) to return the tangent of. |

#### Returns:

[Real](../../../GML_Overview/Data_Types.md)

#### Example:

val = dtan(45);

This will set "val" to 1.