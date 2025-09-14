---
title: "radtodeg"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Maths_And_Numbers/Angles_And_Distance/radtodeg.htm"
converted: "2025-09-14T04:00:00.941Z"
---

# radtodeg

Once you have done your calculations using sin, or cos etc... the result is in radians. This may not always be what you want and so to turn the radians into degrees we use this function. For example, radtodeg(sin(180)) will return -45 degrees. This function translates radians into degrees using the formula:

angle\_degrees = angle\_radians \* 180 / pi;

#### Syntax:

radtodeg(rad);

| Argument | Type | Description |
| --- | --- | --- |
| rad | Real | The radians to convert. |

#### Returns:

[Real](../../../GML_Overview/Data_Types.md)

#### Example:

val = radtodeg( pi );

This will set val to 180.