---
title: "power"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Maths_And_Numbers/Number_Functions/power.htm"
converted: "2025-09-14T04:00:02.476Z"
---

# power

This will return the value of a number multiplied by itself "n" number of times. For example, power(5,3) will multiply 5 by itself 3 times and return 125, which is the same as saying 5\*5\*5=125. Please note that the "x" value (the number to change) _cannot_ be a negative value.

#### Syntax:

power(x, n);

| Argument | Type | Description |
| --- | --- | --- |
| x | Real | The number to change. |
| n | Real | How many times to multiply x by itself. |

#### Returns:

[Real](../../../GML_Overview/Data_Types.md)

#### Example:

score += power(dmg, 3);

This will add the value of held in the variable "dmg" to the power of 3 to the score variable.