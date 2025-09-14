---
title: "min"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Maths_And_Numbers/Number_Functions/min.htm"
converted: "2025-09-14T04:00:02.461Z"
---

# min

This function returns the minimum of the input values, of which it can have as many as you require (note that more arguments will mean that the function will be slower to parse). For example min(12, 96, 32, 75) will return 12 as that is the lowest of all the input values.

#### Syntax:

min(val1, val2, ... max\_val);

| Argument | Type | Description |
| --- | --- | --- |
| val0 ... max_val | Real | The values to compare. |

#### Returns:

[Real](../../../GML_Overview/Data_Types.md)

#### Example:

x = min(x, room\_width);

This will stop the player from exiting the right of the room. This works by constantly setting its x to either itself or the room\_width variable, whichever is smaller. If the player exits the right, its x would be larger than room\_width, so it'll get set straight back.