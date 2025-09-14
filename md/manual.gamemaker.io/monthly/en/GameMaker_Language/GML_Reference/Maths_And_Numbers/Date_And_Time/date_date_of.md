---
title: "date_date_of"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Maths_And_Numbers/Date_And_Time/date_date_of.htm"
converted: "2025-09-14T04:00:01.185Z"
---

# date\_date\_of

This function returns the date value of the given datetime.

#### Syntax:

date\_date\_of(date)

| Argument | Type | Description |
| --- | --- | --- |
| date | Datetime | The datetime to extract the date from. |

#### Returns:

[Real](../../../GML_Overview/Data_Types.md)

#### Example:

today = date\_date\_of(date\_current\_datetime());

This would return the current date only and store the value in a variable today.