---
title: "arccos"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Maths_And_Numbers/Angles_And_Distance/arccos.htm"
converted: "2025-09-14T04:00:00.569Z"
---

# arccos

Returns the inverse cosine of x, in that if cos(val)=n, arccos(n)=val, and the resulting number will be between pi and 0.

**NOTE**:This will only accept a number between -1 and 1 (anything else will throw an error).

**NOTE**: This function takes a value in radians, not degrees.

#### Syntax:

arccos(x)

| Argument | Type | Description |
| --- | --- | --- |
| x | Real | The angle (in radians) to return the inverse cosine of. |

#### Returns:

[Real](../../../GML_Overview/Data_Types.md)

#### Example:

val = arccos(0);

This will set val to pi/2.