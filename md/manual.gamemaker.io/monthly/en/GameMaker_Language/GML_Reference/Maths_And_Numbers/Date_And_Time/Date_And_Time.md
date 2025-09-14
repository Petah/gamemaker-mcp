---
title: "Date And Time"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Maths_And_Numbers/Date_And_Time/Date_And_Time.htm"
converted: "2025-09-14T04:00:00.988Z"
---

# Date And Time

GameMaker has a great many functions and variables related to getting the date and time and calculating other values based off of them. By default these functions return the **local** time as set by the system, but you can use the following function to switch between local and UTC time:

-   [date\_set\_timezone](date_set_timezone.md)
-   [date\_get\_timezone](../../../../../../../GameMaker_Language/GML_Reference/Maths_And_Numbers/Date_And_Time/date_get_timezone.md)

The following built-in variables can be used to get specific date and time components:

-   [current\_time](current_time.md)
-   [current\_second](current_second.md)
-   [current\_minute](../../../../../../../GameMaker_Language/GML_Reference/Maths_And_Numbers/Date_And_Time/current_minute.md)
-   [current\_hour](current_hour.md)
-   [current\_day](current_day.md)
-   [current\_weekday](../../../../../../../GameMaker_Language/GML_Reference/Maths_And_Numbers/Date_And_Time/current_weekday.md)
-   [current\_month](current_month.md)
-   [current\_year](current_year.md)

The following functions can be used to get specific date and time components, as well as for creating new ones or for getting the span of days/hours between two given dates:

-   [date\_create\_datetime](date_create_datetime.md)
-   [date\_current\_datetime](../../../../../../../GameMaker_Language/GML_Reference/Maths_And_Numbers/Date_And_Time/date_current_datetime.md)
-   [date\_compare\_date](date_compare_date.md)
-   [date\_compare\_datetime](date_compare_datetime.md)
-   [date\_compare\_time](date_compare_time.md)
-   [date\_valid\_datetime](../../../../../../../GameMaker_Language/GML_Reference/Maths_And_Numbers/Date_And_Time/date_valid_datetime.md)
-   [date\_date\_of](date_date_of.md)
-   [date\_time\_of](date_time_of.md)
-   [date\_is\_today](date_is_today.md)
-   [date\_leap\_year](../../../../../../../GameMaker_Language/GML_Reference/Maths_And_Numbers/Date_And_Time/date_leap_year.md)
-   [date\_date\_string](date_date_string.md)
-   [date\_datetime\_string](date_datetime_string.md)
-   [date\_time\_string](../../../../../../../GameMaker_Language/GML_Reference/Maths_And_Numbers/Date_And_Time/date_time_string.md)
-   [date\_second\_span](date_second_span.md)
-   [date\_minute\_span](date_minute_span.md)
-   [date\_hour\_span](date_hour_span.md)
-   [date\_day\_span](../../../../../../../GameMaker_Language/GML_Reference/Maths_And_Numbers/Date_And_Time/date_day_span.md)
-   [date\_week\_span](date_week_span.md)
-   [date\_month\_span](date_month_span.md)
-   [date\_year\_span](date_year_span.md)
-   [date\_days\_in\_month](../../../../../../../GameMaker_Language/GML_Reference/Maths_And_Numbers/Date_And_Time/date_days_in_month.md)
-   [date\_days\_in\_year](date_days_in_year.md)
-   [date\_get\_second](date_get_second.md)
-   [date\_get\_minute](date_get_minute.md)
-   [date\_get\_hour](date_get_hour.md)
-   [date\_get\_day](date_get_day.md)
-   [date\_get\_weekday](../../../../../../../GameMaker_Language/GML_Reference/Maths_And_Numbers/Date_And_Time/date_get_weekday.md)
-   [date\_get\_week](date_get_week.md)
-   [date\_get\_month](date_get_month.md)
-   [date\_get\_year](../../../../../../../GameMaker_Language/GML_Reference/Maths_And_Numbers/Date_And_Time/date_get_year.md)
-   [date\_get\_second\_of\_year](date_get_second_of_year.md)
-   [date\_get\_minute\_of\_year](date_get_minute_of_year.md)
-   [date\_get\_hour\_of\_year](date_get_hour_of_year.md)
-   [date\_get\_day\_of\_year](../../../../../../../GameMaker_Language/GML_Reference/Maths_And_Numbers/Date_And_Time/date_get_day_of_year.md)
-   [date\_inc\_second](date_inc_second.md)
-   [date\_inc\_minute](date_inc_minute.md)
-   [date\_inc\_hour](../../../../../../../GameMaker_Language/GML_Reference/Maths_And_Numbers/Date_And_Time/date_inc_hour.md)
-   [date\_inc\_day](date_inc_day.md)
-   [date\_inc\_week](date_inc_week.md)
-   [date\_inc\_month](date_inc_month.md)
-   [date\_inc\_year](../../../../../../../GameMaker_Language/GML_Reference/Maths_And_Numbers/Date_And_Time/date_inc_year.md)

We also have two special time functions that give you a higher level of precision and control when running your game:

-   [get\_timer](get_timer.md)
-   [delta\_time](delta_time.md)

If you're looking for timing-related functions, see [Time Sources](../../Time_Sources/Time_Sources.md).