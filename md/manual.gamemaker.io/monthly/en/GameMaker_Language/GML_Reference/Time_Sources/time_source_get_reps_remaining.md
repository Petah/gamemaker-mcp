---
title: "time_source_get_reps_remaining"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Time_Sources/time_source_get_reps_remaining.htm"
converted: "2025-09-14T04:00:08.269Z"
---

# time\_source\_get\_reps\_remaining

This function returns the number of repetitions the given Time Source has left until it completely stops.

The function will return undefined if the given Time Source runs indefinitely, or if it's a [built-in Time Source](Built_In_Time_Sources.md).

#### Syntax:

time\_source\_get\_reps\_remaining(id);

| Argument | Type | Description |
| --- | --- | --- |
| id | Time Source | The Time Source to get information for |

#### Returns:

[Real](../../GML_Overview/Data_Types.md)