---
title: "abs"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Maths_And_Numbers/Number_Functions/abs.htm"
converted: "2025-09-14T04:00:02.177Z"
---

# abs

This function returns the absolute value of the input argument, so if it's a positive value then it will remain the same, but if it's negative it will be multiplied by -1 to make it positive.

#### **Syntax:**

abs(val)

| Argument | Type | Description |
| --- | --- | --- |
| val | Real | The number to turn absolute. |

#### Returns:

[Real](../../../../../../../GameMaker_Language/GML_Overview/Data_Types.md)

#### Example:

x += abs (x - mouse\_x)

This will add an amount equal to the absolute value of the current x position of the instance and the mouse x position.