---
title: "date_get_second_of_year"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Maths_And_Numbers/Date_And_Time/date_get_second_of_year.htm"
converted: "2025-09-14T04:00:01.379Z"
---

# date\_get\_second\_of\_year

This function returns the second of the given datetime value within the year (from the total number of seconds for the year, taking into account leap years).

#### Syntax:

date\_get\_second\_of\_year( date );

| Argument | Type | Description |
| --- | --- | --- |
| date | Datetime | The date to check. |

#### Returns:

[Real](../../../GML_Overview/Data_Types.md)

#### Example:

mysecondyear = date\_get\_second\_of\_year(date\_current\_datetime());

This would set "mysecondyear" to the current second of the year.