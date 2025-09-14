---
title: "arctan"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Maths_And_Numbers/Angles_And_Distance/arctan.htm"
converted: "2025-09-14T04:00:00.599Z"
---

# arctan

Returns the inverse tangent of x. This will accept any number as, unlike [tan()](tan.md), arctan() asymptotes are on the y axis so it just means you'll never get returned a number greater than pi/2 or less than -pi/2.

**NOTE**: This function takes a value in radians, not degrees.

#### Syntax:

arctan(x);

| Argument | Type | Description |
| --- | --- | --- |
| x | Real | The angle (in radians) to return the inverse tangent of. |

#### Returns:

[Real](../../../GML_Overview/Data_Types.md)

#### Example:

val = arctan( 0 );

This will set val to 0.