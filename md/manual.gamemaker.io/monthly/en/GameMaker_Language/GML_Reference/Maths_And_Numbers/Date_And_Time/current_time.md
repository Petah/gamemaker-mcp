---
title: "current_time"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Maths_And_Numbers/Date_And_Time/current_time.htm"
converted: "2025-09-14T04:00:01.063Z"
---

# current\_time

This **read only** variable will return the number of milliseconds that have passed since the game was started.

#### Syntax:

current\_time;

#### Returns:

[Real](../../../GML_Overview/Data_Types.md)

#### Example:

if (current\_time > 600000)
{
    msg = show\_question\_async("Would you like to rate?");
}

The above code checks to see if more than 10 minutes have passed before asking the user a question.