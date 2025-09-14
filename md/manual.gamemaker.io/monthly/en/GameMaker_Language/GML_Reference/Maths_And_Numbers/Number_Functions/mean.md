---
title: "mean"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Maths_And_Numbers/Number_Functions/mean.htm"
converted: "2025-09-14T04:00:02.434Z"
---

# mean

This function works by adding up all the input values and then dividing them by their own number. You can have as many arguments as you require (note that more arguments will mean that the function will be slower to parse). So, mean(2, 6, 9, 32) returns 12.25 as 2+6+9+32=49 and 49/4=12.25.

#### Syntax:

mean(val1, val2, ... max\_val);

| Argument | Type | Description |
| --- | --- | --- |
| val0 ... max_val | Real | The values to compare. |

#### Returns:

[Real](../../../GML_Overview/Data_Types.md)

#### Example:

xmiddle = mean(obj\_player1.x, obj\_player2.x, obj\_player3.x);
ymiddle = mean(obj\_player1.y, obj\_player2.y, obj\_player3.y);

This will set xmiddle and ymiddle to the x and y coordinates of the average of the coordinates of three player objects, obj\_player1, obj\_player2 and obj\_player3. You could, for instance, use this to keep the game camera focused on all three players instead of just one.