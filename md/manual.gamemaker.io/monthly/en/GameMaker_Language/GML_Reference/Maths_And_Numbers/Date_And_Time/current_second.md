---
title: "current_second"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Maths_And_Numbers/Date_And_Time/current_second.htm"
converted: "2025-09-14T04:00:01.051Z"
---

# current\_second

This **read only** variable will return the seconds that correspond to the current moment.

#### Syntax:

current\_second;

#### Returns:

[Real](../../../GML_Overview/Data_Types.md)

#### Example:

draw\_text(32, 32, "The time is " + string(current\_hour) + ":" + string(current\_minute) + "." + string(current\_second));

The above code would draw the current international time on the screen.