---
title: "date_set_timezone"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Maths_And_Numbers/Date_And_Time/date_set_timezone.htm"
converted: "2025-09-14T04:00:01.642Z"
---

# date\_set\_timezone

Sets the base time zone to use for all the rest of the date and time functions. This time zone can either be _local_ (as set by the system) or _UTC_, and you would use one of the following constants to define which is being used (by default this is local time):

| Constant | Description |
| --- | --- |
| timezone_local | Use the local time zone as set by the system (the default option) |
| timezone_utc | Use Coordinated Universal Time |

#### Syntax:

date\_set\_timezone(timezone);

| Argument | Type | Description |
| --- | --- | --- |
| timezone | Time Zone Constant | The time zone to use for the base time. |

#### Returns:

N/A

#### Example:

if (date\_get\_timezone() != timezone\_utc)
{
    date\_set\_timezone(timezone\_utc);
}

This code checks the base time zone setting for the game and if it is not UTC it then changes it.