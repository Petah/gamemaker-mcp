---
title: "date_current_datetime"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Maths_And_Numbers/Date_And_Time/date_current_datetime.htm"
converted: "2025-09-14T04:00:01.172Z"
---

# date\_current\_datetime

Returns the date-time value of the current moment. The time returned is based on UTC, which is only converted to your [selected time zone](date_set_timezone.md) when used in another function (such as [date\_get\_day](date_get_day.md), [date\_datetime\_string](date_datetime_string.md), etc.).

#### Syntax:

date\_current\_datetime();

#### Returns:

[Datetime](date_current_datetime.md)

#### Example:

myhour = date\_get\_hour(date\_current\_datetime());
myday = date\_get\_day(date\_current\_datetime());

This would set the local variable myhour to the hour of the current time, and myday to the day of the current date. Even though date\_current\_time() returns time in UTC, what you get from the [date\_get\_hour](date_get_hour.md) and [date\_get\_day](date_get_day.md) functions is converted to the local time by default (unless changed in [date\_set\_timezone](date_set_timezone.md)).