---
title: "clamp"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Maths_And_Numbers/Number_Functions/clamp.htm"
converted: "2025-09-14T04:00:02.219Z"
---

# clamp

With this function you can maintain an input value between a specified range.

#### Syntax:

clamp(val, min, max)

| Argument | Type | Description |
| --- | --- | --- |
| val | Real | The value to clamp. |
| min | Real | The minimum value to clamp between. |
| max | Real | The maximum value to clamp between. |

#### Returns:

[Real](../../../GML_Overview/Data_Types.md)

#### Example:

speed = clamp(speed, 1, 10);

The above code will clamp the speed so that it never falls below 1 or goes over 10.