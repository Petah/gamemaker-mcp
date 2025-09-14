---
title: "GM_build_date"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/OS_And_Compiler/GM_build_date.htm"
converted: "2025-09-14T04:00:04.163Z"
---

# GM\_build\_date

This constant holds the date and time on which the executable being run was built by GameMaker. The value can be parsed using the [Date And Time](../Maths_And_Numbers/Date_And_Time/Date_And_Time.md) functions and is taken from the system UTC value at compile time.

#### Syntax:

GM\_build\_date

#### Returns:

[Datetime](../Maths_And_Numbers/Date_And_Time/date_current_datetime.md)

#### Example:

draw\_text(32, 32, date\_time\_string(GM\_build\_date));
draw\_text(32, 64, "v" + GM\_version);

The above code will draw the version number for the game and the date and time it was compiled on.