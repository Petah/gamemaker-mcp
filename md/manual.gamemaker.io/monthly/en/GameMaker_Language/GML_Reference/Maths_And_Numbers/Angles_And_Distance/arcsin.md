---
title: "arcsin"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Maths_And_Numbers/Angles_And_Distance/arcsin.htm"
converted: "2025-09-14T04:00:00.583Z"
---

# arcsin

Returns the inverse sine of x, in that if sin(x)=n, arcsin(n)=x, and the resulting number will be between -pi/2 and pi/2.

**NOTE**: This will only accept a value between -1 and 1 (anything else will throw an error).

**NOTE**: This function returns a value in radians, not degrees.

#### Syntax:

arcsin(x);

| Argument | Type | Description |
| --- | --- | --- |
| x | Real | The value to return the inverse sine of. |

#### Returns:

[Real](../../../GML_Overview/Data_Types.md)

#### Example:

val = arcsin(0);

This will set val to 0.