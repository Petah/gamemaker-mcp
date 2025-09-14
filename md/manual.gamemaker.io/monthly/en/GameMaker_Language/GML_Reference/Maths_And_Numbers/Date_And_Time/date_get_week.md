---
title: "date_get_week"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Maths_And_Numbers/Date_And_Time/date_get_week.htm"
converted: "2025-09-14T04:00:01.409Z"
---

# date\_get\_week

This function returns the week of the given datetime value within the year.

#### Syntax:

date\_get\_week(date);

| Argument | Type | Description |
| --- | --- | --- |
| date | Datetime | The datetime to check. |

#### Returns:

[Real](../../../GML_Overview/Data_Types.md)

#### Example:

myweek = date\_get\_week(date\_current\_datetime());

This would set myweek to the current week.