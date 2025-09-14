---
title: "date_days_in_month"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Maths_And_Numbers/Date_And_Time/date_days_in_month.htm"
converted: "2025-09-14T04:00:01.241Z"
---

# date\_days\_in\_month

With this function you can get the number of days that the given month has, either 28, 29, 30 or 31.

#### Syntax:

date\_days\_in\_month(date);

| Argument | Type | Description |
| --- | --- | --- |
| date | Datetime | The date to use. |

#### Returns:

[Real](../../../../../../../GameMaker_Language/GML_Overview/Data_Types.md)

#### Example:

days = date\_days\_in\_month(date\_current\_datetime());

This would set "days" to the number of days in the current month.