---
title: "date_get_day_of_year"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Maths_And_Numbers/Date_And_Time/date_get_day_of_year.htm"
converted: "2025-09-14T04:00:01.284Z"
---

# date\_get\_day\_of\_year

This function returns the day (from 1 to 366) within the year of the given datetime.

#### Syntax:

date\_get\_day\_of\_year( date );

| Argument | Type | Description |
| --- | --- | --- |
| date | Datetime | The date to check. |

#### Returns:

[Real](../../../../../../../GameMaker_Language/GML_Overview/Data_Types.md)

#### Example:

mydayyear = date\_get\_day\_of\_year(date\_current\_datetime());

This would set mydayyear to the current day of the year.