---
title: "date_inc_second"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Maths_And_Numbers/Date_And_Time/date_inc_second.htm"
converted: "2025-09-14T04:00:01.528Z"
---

# date\_inc\_second

With this function you can increment a given datetime value by a specific number of seconds, and it will return the new datetime value.

#### Syntax:

date\_inc\_second(date, amount);

| Argument | Type | Description |
| --- | --- | --- |
| date | Datetime | The datetime to add to. |
| amount | Real | The number of seconds (must be an integer) to add. |

#### Returns:

[Real](../../../GML_Overview/Data_Types.md)

#### Example:

mynewdatetime = date\_inc\_second(date\_current\_datetime(), 60);

This would set "mynewdatetime" to the current date but with 60 seconds added.