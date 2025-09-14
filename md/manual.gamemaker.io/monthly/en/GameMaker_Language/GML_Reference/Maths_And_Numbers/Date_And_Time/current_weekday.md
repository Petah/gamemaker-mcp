---
title: "current_weekday"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Maths_And_Numbers/Date_And_Time/current_weekday.htm"
converted: "2025-09-14T04:00:01.074Z"
---

# current\_weekday

This **read only** variable will return the weekday as a value, where Sunday is 0 and Saturday is 6.

#### Syntax:

current\_weekday;

#### Returns:

[Real](../../../../../../../GameMaker_Language/GML_Overview/Data_Types.md)

#### Example:

var day;
switch(current\_weekday)
{
    case 0: day = "Sunday"; break;
    case 1: day = "Monday"; break;
    case 2: day = "Tuesday"; break;
    case 3: day = "Wednesday"; break;
    case 4: day = "Thursday"; break;
    case 5: day = "Friday"; break;
    case 6: day = "Saturday"; break;
}
draw\_text(32, 32, "Today is " + day +".");

The above code uses the current\_weekday value to set a variable with the correct day in text, then draws that for the user to see.