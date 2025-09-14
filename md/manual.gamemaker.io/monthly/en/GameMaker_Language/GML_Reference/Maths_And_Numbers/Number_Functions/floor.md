---
title: "floor"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Maths_And_Numbers/Number_Functions/floor.htm"
converted: "2025-09-14T04:00:02.247Z"
---

# floor

Returns the floor of n, that is, n rounded down to an integer. This is similar to the [round()](round.md) function, but it only rounds _down_, no matter what the decimal value, so floor(5.99999) will return 5, as will floor(5.2), floor(5.6457) etc...

#### Syntax:

floor(n);

| Argument | Type | Description |
| --- | --- | --- |
| n | Real | The number to floor. |

#### Returns:

[Real](../../../GML_Overview/Data_Types.md)

#### Example:

val = floor( 3.9 );

This will set val to 3.