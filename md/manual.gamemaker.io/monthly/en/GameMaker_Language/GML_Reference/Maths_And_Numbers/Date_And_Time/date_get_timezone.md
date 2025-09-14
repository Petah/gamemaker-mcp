---
title: "date_get_timezone"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Maths_And_Numbers/Date_And_Time/date_get_timezone.htm"
converted: "2025-09-14T04:00:01.396Z"
---

# date\_get\_timezone

This function gets the base time zone being used for all the rest of the date and time functions. This time zone can either be _local_ (as set by the system) or _UTC_, and the function will return one of the following constants:

| Time Zone Constant |
| --- |
| Constant | Description |
| timezone_local | use the local time zone as set by the system |
| timezone_utc | use Coordinated Universal Time |

#### Syntax:

date\_get\_timezone();

#### Returns:

[Time Zone Constant](date_get_timezone.md)

#### Example:

if (date\_get\_timezone() != timezone\_utc)
{
    date\_set\_timezone(timezone\_utc);
}

This code checks the base time zone setting for the game and if it is not UTC it then changes it.