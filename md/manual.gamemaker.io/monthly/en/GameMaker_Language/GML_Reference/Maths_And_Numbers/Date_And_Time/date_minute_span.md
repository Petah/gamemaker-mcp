---
title: "date_minute_span"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Maths_And_Numbers/Date_And_Time/date_minute_span.htm"
converted: "2025-09-14T04:00:01.598Z"
---

# date\_minute\_span

With this function you can get the number of minutes between two dates. This value is always positive, and incomplete minutes will be returned as a fraction.

#### Syntax:

date\_minute\_span(date1, date2);

| Argument | Type | Description |
| --- | --- | --- |
| date1 | Datetime | The first datetime. |
| date2 | Datetime | The datetime to compare it to. |

#### Returns:

[Real](../../../GML_Overview/Data_Types.md)

#### Example:

diff = date\_minute\_span(date\_create\_datetime(2011, 9, 15, 11, 4, 0 ), date\_current\_datetime());

This would set "diff" to the number of minutes between 15th September 2011, 11:04.0 and the current date and time.