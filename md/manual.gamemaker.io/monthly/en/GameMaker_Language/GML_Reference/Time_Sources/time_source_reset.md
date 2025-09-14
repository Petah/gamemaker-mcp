---
title: "time_source_reset"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Time_Sources/time_source_reset.htm"
converted: "2025-09-14T04:00:08.372Z"
---

# time\_source\_reset

This function resets the given Time Source, resetting its timer and repetition information.

After calling this function, you will need to [start](time_source_start.md) the Time Source again for it to count down.

#### Syntax:

time\_source\_reset(id);

| Argument | Type | Description |
| --- | --- | --- |
| id | Time Source | The Time Source to reset |

#### Returns:

N/A

#### Example:

// Room Start event
time\_source\_reset(global.spawn\_time\_source);
time\_source\_start(global.spawn\_time\_source);

This code will reset the given Time Source whenever a new room starts, and then start the Time Source again.