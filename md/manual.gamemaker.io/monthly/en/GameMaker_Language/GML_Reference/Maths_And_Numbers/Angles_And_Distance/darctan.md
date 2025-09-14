---
title: "darctan"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Maths_And_Numbers/Angles_And_Distance/darctan.htm"
converted: "2025-09-14T04:00:00.668Z"
---

# darctan

Returns the inverse tangent of x. This will accept any number as, unlike [dtan()](dtan.md), darctan() asymptotes are on the y axis so it just means you'll never get returned a number greater than 90 or less than -90.

**NOTE**: This function returns a value in degrees, not radians.

#### Syntax:

darctan(x);

| Argument | Type | Description |
| --- | --- | --- |
| val | Real | The value to return the inverse tangent of. |

#### Returns:

[Real](../../../GML_Overview/Data_Types.md)

#### Example:

val = darctan(1);

This will set "val" to -45.