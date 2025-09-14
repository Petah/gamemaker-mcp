---
title: "date_time_string"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Maths_And_Numbers/Date_And_Time/date_time_string.htm"
converted: "2025-09-14T04:00:01.673Z"
---

# date\_time\_string

With this function you can create a string containing the given time, formatted for the system or device that is running the game when the function is called.

#### Syntax:

date\_time\_string( date );

| Argument | Type | Description |
| --- | --- | --- |
| date | Datetime | The datetime to use. |

#### Returns:

[String](../../../../../../../GameMaker_Language/GML_Overview/Data_Types.md)

#### Example:

str = date\_time\_string(date\_current\_datetime());

This would set the given variable to something like "11:36.00" depending on the system settings for date/time displaying and the current date and time.