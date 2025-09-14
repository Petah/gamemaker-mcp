---
title: "date_create_datetime"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Maths_And_Numbers/Date_And_Time/date_create_datetime.htm"
converted: "2025-09-14T04:00:01.155Z"
---

# date\_create\_datetime

This function will create a datetime value from the component given as the arguments.

#### Syntax:

date\_create\_datetime(year, month, day, hour, minute, second);

| Argument | Type | Description |
| --- | --- | --- |
| year | Real | The year to set. |
| month | Real | The month to set. |
| day | Real | The day to set. |
| hour | Real | The hour to set. |
| minute | Real | The minute to set. |
| second | Real | The second to set. |

#### Returns:

[Datetime](../../../../../../../GameMaker_Language/GML_Reference/Maths_And_Numbers/Date_And_Time/date_current_datetime.md)

#### Example:

mydatetime = date\_create\_datetime(2011, 9, 15, 9, 43, 30);

This would set "mydatetime" to the given date and time and store the returned value in the variable "mydatetime".