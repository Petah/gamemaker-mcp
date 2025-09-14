---
title: "date_get_day"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Maths_And_Numbers/Date_And_Time/date_get_day.htm"
converted: "2025-09-14T04:00:01.267Z"
---

# date\_get\_day

This function returns the day (from 1 to 31) of the given datetime.

#### Syntax:

date\_get\_day(date);

| Argument | Type | Description |
| --- | --- | --- |
| date | Datetime | The date to check. |

#### Returns:

[Real](../../../GML_Overview/Data_Types.md)

#### Example:

myday = date\_get\_day( date\_current\_datetime() );

This would set "myday" to the current day.