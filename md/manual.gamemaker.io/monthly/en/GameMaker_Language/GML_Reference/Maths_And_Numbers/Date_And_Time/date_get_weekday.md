---
title: "date_get_weekday"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Maths_And_Numbers/Date_And_Time/date_get_weekday.htm"
converted: "2025-09-14T04:00:01.424Z"
---

# date\_get\_weekday

This function returns the week day value of the given datetime. This will be a value from 0 to 6.

#### Syntax:

date\_get\_weekday(date);

| Argument | Type | Description |
| --- | --- | --- |
| date | Datetime | The date to check. |

#### Returns:

[Real](../../../../../../../GameMaker_Language/GML_Overview/Data_Types.md)

#### Example:

myweekday = date\_get\_weekday(date\_current\_datetime());

This would set "myweekday" to the current weekday.