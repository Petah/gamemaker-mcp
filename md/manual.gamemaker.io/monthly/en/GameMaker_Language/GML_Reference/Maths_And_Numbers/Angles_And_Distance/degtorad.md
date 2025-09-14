---
title: "degtorad"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Maths_And_Numbers/Angles_And_Distance/degtorad.htm"
converted: "2025-09-14T04:00:00.708Z"
---

# degtorad

In GM all the trigonometric functions work in radians, but most people work in degrees and this means that to convert your degrees into radians you need to use this function. For example, degtorad(180) returns 3.14159265 radians. This function translates degrees into radians using the formula:

angle\_radians = angle\_degrees \* pi / 180

#### Syntax:

degtorad(deg);

| Argument | Type | Description |
| --- | --- | --- |
| deg | Real | The degrees to convert. |

#### Returns:

[Real](../../../GML_Overview/Data_Types.md)

#### Example:

val = degtorad(90);

This will set val to pi/2.