---
title: "current_day"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Maths_And_Numbers/Date_And_Time/current_day.htm"
converted: "2025-09-14T04:00:01.005Z"
---

# current\_day

This **read only** variable will return the day as a value from 1 to 31, depending on the month.

#### Syntax:

current\_day;

#### Returns:

[Real](../../../GML_Overview/Data_Types.md)

#### Example:

draw\_text(32, 32, "Today is " + string(current\_day) + "/" + string (current\_month) + "/" + string(current\_year) +".");

The above code will draw the day, month and year.