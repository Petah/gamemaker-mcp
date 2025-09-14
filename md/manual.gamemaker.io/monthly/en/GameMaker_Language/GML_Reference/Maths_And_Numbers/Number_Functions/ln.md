---
title: "ln"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Maths_And_Numbers/Number_Functions/ln.htm"
converted: "2025-09-14T04:00:02.322Z"
---

# ln

The natural logarithm ln(n) is the amount of time needed to reach a certain level of continuous growth, where n is the level reached. So if we want to find out how many time units we need to get 20 growth we would use ln(20) which returns 2.99 units of time to get that amount of growth.

#### Syntax:

ln(n);

| Argument | Type | Description |
| --- | --- | --- |
| n | Real | The input value. |

#### Returns:

[Real](../../../GML_Overview/Data_Types.md)

#### Example:

alarm\[0\] = ln(age) \* game\_get\_speed(gamespeed\_fps);

The above code uses the natural logarithm of the value stored in the variable age to set an alarm.