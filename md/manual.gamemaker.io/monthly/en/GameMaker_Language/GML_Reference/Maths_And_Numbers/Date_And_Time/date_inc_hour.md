---
title: "date_inc_hour"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Maths_And_Numbers/Date_And_Time/date_inc_hour.htm"
converted: "2025-09-14T04:00:01.483Z"
---

# date\_inc\_hour

With this function you can increment a given datetime value by a specific number of hours, and it will return the new datetime value.

#### Syntax:

date\_inc\_hour(date, amount);

| Argument | Type | Description |
| --- | --- | --- |
| date | Datetime | The datetime to add to. |
| amount | Real | The number of hours (must be an integer) to add. |

#### Returns:

[Real](../../../../../../../GameMaker_Language/GML_Overview/Data_Types.md)

#### Example:

mynewdatetime = date\_inc\_hour(date\_current\_datetime(), 24);

This would set mynewdatetime to the current date but with 24 hours added.