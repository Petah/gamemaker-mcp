---
title: "Time Source States"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Time_Sources/Time_Source_States.htm"
converted: "2025-09-14T04:00:08.021Z"
---

# Time Source States

| Time Source State Constant |
| --- |
| Constant | Description | Value |
| time_source_state_initial | The Time Source has not been started yet | 0 |
| time_source_state_active | The Time Source has been started and is counting down | 1 |
| time_source_state_paused | The Time Source is paused | 2 |
| time_source_state_stopped | The Time Source was stopped or it completely expired | 3 |

A Time Source can have a state, which can be any one of the constants above. The default state for a newly-created Time Source is time\_source\_state\_initial.

The state can be changed using [time\_source\_start()](time_source_start.md), [time\_source\_stop()](time_source_stop.md), and [time\_source\_pause()](time_source_pause.md).

The state of a Time Source is returned using [time\_source\_get\_state()](time_source_get_state.md).