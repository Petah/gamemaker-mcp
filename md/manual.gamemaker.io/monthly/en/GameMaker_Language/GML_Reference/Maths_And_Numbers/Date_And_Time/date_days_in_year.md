---
title: "date_days_in_year"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Maths_And_Numbers/Date_And_Time/date_days_in_year.htm"
converted: "2025-09-14T04:00:01.252Z"
---

# date\_days\_in\_year

With this function you can get the number of days that the given year has, returning 365 for a normal year, and 366 for a leap year.

#### Syntax:

date\_days\_in\_year(date);

| Argument | Type | Description |
| --- | --- | --- |
| date | Datetime | The date to use. |

#### Returns:

[Real](../../../GML_Overview/Data_Types.md)

#### Example:

days = date\_days\_in\_year(date\_current\_datetime());

This would set "days" to the number of days in the current year.