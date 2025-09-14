---
title: "time_source_get_time_remaining"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Time_Sources/time_source_get_time_remaining.htm"
converted: "2025-09-14T04:00:08.295Z"
---

# time\_source\_get\_time\_remaining

This function returns the time remaining until the given Time Source expires and executes its callback method.

This time value will be expressed in the [units](Time_Source_Units.md) set for the Time Source (seconds or frames).

#### Syntax:

time\_source\_get\_time\_remaining(id);

| Argument | Type | Description |
| --- | --- | --- |
| id | Time Source | The Time Source to get information for |

#### Returns:

[Real](../../GML_Overview/Data_Types.md)