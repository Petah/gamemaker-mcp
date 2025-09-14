---
title: "date_inc_year"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Maths_And_Numbers/Date_And_Time/date_inc_year.htm"
converted: "2025-09-14T04:00:01.553Z"
---

# date\_inc\_year

With this function you can increment a given datetime value by a specific number of years, and it will return the new datetime value.

#### Syntax:

date\_inc\_year(date, amount);

| Argument | Type | Description |
| --- | --- | --- |
| date | Datetime | The datetime to add to |
| amount | Real | The number of years (must be an integer) to add. |

#### Returns:

[Real](../../../../../../../GameMaker_Language/GML_Overview/Data_Types.md)

#### Example:

mynewdatetime = date\_inc\_year(date\_current\_datetime(), 1000);

This would set mynewdatetime to the current date but with 1000 years added.