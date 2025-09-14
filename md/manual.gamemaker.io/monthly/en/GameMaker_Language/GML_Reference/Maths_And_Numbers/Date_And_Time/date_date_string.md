---
title: "date_date_string"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Maths_And_Numbers/Date_And_Time/date_date_string.htm"
converted: "2025-09-14T04:00:01.198Z"
---

# date\_date\_string

With this function you can create a string containing the given date, formatted as day/month/year.

#### Syntax:

date\_date\_string(date);

| Argument | Type | Description |
| --- | --- | --- |
| date | Datetime | The date to use. |

#### Returns:

[String](../../../GML_Overview/Data_Types.md)

#### Example:

str = date\_date\_string(date\_current\_datetime());
draw\_text(32, 32, str);

This would set "str" to hold a formatted string of the current date and time as shown by the system.