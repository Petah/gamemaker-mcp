---
title: "date_inc_day"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Maths_And_Numbers/Date_And_Time/date_inc_day.htm"
converted: "2025-09-14T04:00:01.467Z"
---

# date\_inc\_day

With this function you can increment a given datetime value by a specific number of days, and it will return the new datetime value.

#### Syntax:

date\_inc\_day(date, amount);

| Argument | Type | Description |
| --- | --- | --- |
| date | Datetime | The datetime to add to. |
| amount | Real | The number of days (must be an integer) to add. |

#### Returns:

[Real](../../../GML_Overview/Data_Types.md)

#### Example:

mynewdatetime = date\_inc\_day(date\_current\_datetime(), 365);

This would set "mynewdatetime" to the current date but with 365 days added.