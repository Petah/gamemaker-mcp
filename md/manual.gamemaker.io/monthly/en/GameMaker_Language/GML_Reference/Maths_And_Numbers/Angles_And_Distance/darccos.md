---
title: "darccos"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Maths_And_Numbers/Angles_And_Distance/darccos.htm"
converted: "2025-09-14T04:00:00.641Z"
---

# darccos

Returns the inverse cosine of x, in that if dcos(val)=n, darccos(n)=val, and the resulting number will be between 180 and 0.

**NOTE**: This will only accept a number between -1 and 1 (anything else will throw an error).

**NOTE**: This function returns a value in degrees, not radians.

#### Syntax:

darccos(val)

| Argument | Type | Description |
| --- | --- | --- |
| x | Real | The value to return the inverse cosine of. |

#### Returns:

[Real](../../../GML_Overview/Data_Types.md)

#### Example:

val = arccos(-1);

This will set "val" to 180.