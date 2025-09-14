---
title: "date_datetime_string"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Maths_And_Numbers/Date_And_Time/date_datetime_string.htm"
converted: "2025-09-14T04:00:01.210Z"
---

# date\_datetime\_string

With this function you can create a string containing the given datetime, formatted for the system or device that is running the game when the function is called.

#### Syntax:

date\_datetime\_string(date);

| Argument | Type | Description |
| --- | --- | --- |
| date | Datetime | The date to use. |

#### Returns:

[String](../../../GML_Overview/Data_Types.md)

#### Example:

str = date\_datetime\_string(date\_current\_datetime());

This would set "str" to something like "September 15th 2011, 11:33.00" depending on the system settings for date/time displaying and the current date and time.