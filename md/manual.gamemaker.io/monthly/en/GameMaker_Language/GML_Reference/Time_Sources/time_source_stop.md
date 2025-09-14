---
title: "time_source_stop"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Time_Sources/time_source_stop.htm"
converted: "2025-09-14T04:00:08.419Z"
---

# time\_source\_stop

This function stops the given Time Source and resets its timer. You cannot stop a Time Source that has either not started, or is in a finished state.

#### Syntax:

time\_source\_stop(id);

| Argument | Type | Description |
| --- | --- | --- |
| id | Time Source | The Time Source to stop |

#### Returns:

N/A

#### Example:

if (time\_source\_get\_state(time\_source) != time\_source\_state\_stopped)
{
    time\_source\_stop(time\_source);
}

The code above will stop a Time Source when it's not already stopped.