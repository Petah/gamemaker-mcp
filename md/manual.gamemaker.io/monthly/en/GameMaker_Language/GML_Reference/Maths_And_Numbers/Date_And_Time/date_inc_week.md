---
title: "date_inc_week"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Maths_And_Numbers/Date_And_Time/date_inc_week.htm"
converted: "2025-09-14T04:00:01.541Z"
---

# date\_inc\_week

With this function you can increment a given datetime value by a specific number of weeks, and it will return the new datetime value.

#### Syntax:

date\_inc\_week(date, amount);

| Argument | Type | Description |
| --- | --- | --- |
| date | Datetime | The datetime to add to. |
| amount | Real | The number of weeks (must be an integer) to add. |

#### Returns:

[Real](../../../GML_Overview/Data_Types.md)

#### Example:

mynewdatetime = date\_inc\_week(date\_current\_datetime(), 52);

This would set mynewdatetime to the current date but with 52 weeks added.