---
title: "sign"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Maths_And_Numbers/Number_Functions/sign.htm"
converted: "2025-09-14T04:00:02.584Z"
---

# sign

This function returns whether a number is positive, negative or neither and returns 1, -1, or 0, respectively.

For example, sign(458) will return 1, sign(-5) will return -1 and sign(0) will return 0.

### Usage Notes

-   sign([NaN](../../../GML_Overview/Data_Types.md)) will always return \-1.

#### Syntax:

sign(n);

| Argument | Type | Description |
| --- | --- | --- |
| n | Real | The number to get the sign of. |

#### Returns:

[Real](../../../GML_Overview/Data_Types.md)

#### Example:

y += sign(y - mouse\_y);

The above code will add 1, -1 or 0 onto y depending on the result of y - mouse\_y.