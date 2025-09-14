---
title: "darcsin"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Maths_And_Numbers/Angles_And_Distance/darcsin.htm"
converted: "2025-09-14T04:00:00.654Z"
---

# darcsin

Returns the inverse sine of x, in that if dsin(x)=n, darcsin(n)=x, and the resulting number will be between -90 and 90.

**NOTE**: This will only accept a number between -1 and 1 (anything else will throw an error).

**NOTE**: This function returns a value in degrees, not radians.

#### Syntax:

darcsin(x);

| Argument | Type | Description |
| --- | --- | --- |
| val | Real | The value to return the inverse sine of. |

#### Returns:

[Real](../../../GML_Overview/Data_Types.md)

#### Example:

val = darcsin(-1);

This will set "val" to -90.