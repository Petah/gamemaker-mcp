---
title: "frac"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Maths_And_Numbers/Number_Functions/frac.htm"
converted: "2025-09-14T04:00:02.264Z"
---

# frac

This function returns the fractional part of n, that is, the part behind the decimal dot. It will return _only_ the decimals behind the dot of a value, so frac(3.125) will return 0.125, frac(6.921) will return 0.921, etc...

#### Syntax:

frac(n);

| Argument | Type | Description |
| --- | --- | --- |
| n | Real | The number to change. |

#### Returns:

[Real](../../../GML_Overview/Data_Types.md)

#### Example:

val = frac(3.4);

This will set val to 0.4.