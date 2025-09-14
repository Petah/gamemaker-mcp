---
title: "date_compare_date"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Maths_And_Numbers/Date_And_Time/date_compare_date.htm"
converted: "2025-09-14T04:00:01.104Z"
---

# date\_compare\_date

With this function you can check two dates to see which one is the earlier or later than the other. The function returns -1 if **date1** is earlier, 0 if both dates are the same, and 1 if **date1** is later.

#### Syntax:

date\_compare\_date( date1, date2 );

| Argument | Type | Description |
| --- | --- | --- |
| date1 | Datetime | The first date. |
| date2 | Datetime | The date to compare it to. |

#### Returns:

[Real](../../../GML_Overview/Data_Types.md)

#### Example:

d = date\_compare\_date(date\_create\_datetime(2011, 9, 15, 11, 4, 0), date\_current\_datetime());

This would set "d" to the corresponding value depending on which of the dates was the earliest, likely 1 since the current date would be further ahead than 15th September 2011.