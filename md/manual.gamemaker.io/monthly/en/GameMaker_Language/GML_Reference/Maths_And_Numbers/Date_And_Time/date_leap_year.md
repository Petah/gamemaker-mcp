---
title: "date_leap_year"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Maths_And_Numbers/Date_And_Time/date_leap_year.htm"
converted: "2025-09-14T04:00:01.584Z"
---

# date\_leap\_year

This function will return true if the year component of the given datetime value is a leap year or false otherwise. This can be a handy function for things like Easter Eggs in your games, or for unlocking special content.

#### Syntax:

date\_leap\_year(date);

| Argument | Type | Description |
| --- | --- | --- |
| date | Datetime | The datetime to use. |

#### Returns:

[Boolean](../../../../../../../GameMaker_Language/GML_Overview/Data_Types.md)

#### Example:

if (date\_leap\_year(date\_current\_datetime()))
{
    if (!global.ExtraContent)
    {
        global.ExtraContent = true;
    }
}

The above code will check the current datetime to see if the year is a leap year or not. If it is it sets a global variable.