---
title: "date_is_today"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Maths_And_Numbers/Date_And_Time/date_is_today.htm"
converted: "2025-09-14T04:00:01.567Z"
---

# date\_is\_today

This function will return true if the given datetime value is the day it is being checked on (ie: today), or false otherwise. This can be a handy function for things like Easter Eggs in your games, or for unlocking seasonal content. Note that this function will be affected by the time zone set (default is local time) which you can change using the [date\_set\_timezone()](date_set_timezone.md) function.

#### Syntax:

date\_is\_today(date);

| Argument | Type | Description |
| --- | --- | --- |
| date | Datetime | The datetime to use. |

#### Returns:

[Boolean](../../../GML_Overview/Data_Types.md)

#### Example:

if (date\_is\_today(global.Halloween))
{
    global.Max\_Levels = 200;
}

The above code will check the datetime stored in the global variable "Halloween" to see if it is today, and if it is it sets another global variable to a new value.