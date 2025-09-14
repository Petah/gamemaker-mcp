---
title: "current_minute"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Maths_And_Numbers/Date_And_Time/current_minute.htm"
converted: "2025-09-14T04:00:01.026Z"
---

# current\_minute

This **read only** variable will return the minutes that correspond to the current moment.

#### Syntax:

current\_minute;

#### Returns:

[Real](../../../../../../../GameMaker_Language/GML_Overview/Data_Types.md)

#### Example:

draw\_text(32, 32, "The time is " + string(current\_hour) + ":" + string(current\_minute) + "." + string(current\_second));

The above code would draw the current international time on the screen.