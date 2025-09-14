---
title: "date_valid_datetime"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Maths_And_Numbers/Date_And_Time/date_valid_datetime.htm"
converted: "2025-09-14T04:00:01.690Z"
---

# date\_valid\_datetime

With this function you can check a datetime value to see if it is valid (returns true) or not (returns false). Note that this function will only consider a valid datetime as being _after_ 1/1/1970 and anything before that will return false, so the earliest you can check would be:

date\_valid\_datetime(1970, 01, 01, 0, 0, 0);

#### Syntax:

date\_valid\_datetime(year, month, day, hour, minute, second);

| Argument | Type | Description |
| --- | --- | --- |
| year | Real | The year to check. |
| month | Real | The month to check. |
| day | Real | The day to check. |
| hour | Real | The hour to check. |
| minute | Real | The minute to check. |
| second | Real | The second to check. |

#### Returns:

[Boolean](../../../../../../../GameMaker_Language/GML_Overview/Data_Types.md)

#### Example:

if (date\_valid\_datetime(2011, 9, 15, 10, 3, 30))
{
    mydatetime = date\_create\_datetime(2011, 9, 15, 10, 3, 30);
}

This will set "mydatetime" to 15th September 2011, 10:03.30, if it is a valid value (which it is).