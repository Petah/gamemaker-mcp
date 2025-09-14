---
title: "Time Source Units"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Time_Sources/Time_Source_Units.htm"
converted: "2025-09-14T04:00:08.039Z"
---

# Time Source Units

| Time Source Unit Constant |
| --- |
| Constant | Description | Value |
| time_source_units_seconds | Use seconds for the Time Source period (frame-independent) | 0 |
| time_source_units_frames | Use frames for the Time Source period (frame-dependent) | 1 |

These constants are used in [time\_source\_create()](time_source_create.md) and [time\_source\_reconfigure()](time_source_reconfigure.md) to set the units used for the Time Source's period, and are returned by [time\_source\_get\_units()](time_source_get_units.md).

If you use seconds, your Time Source will run independently from the game's framerate.

If you use frames, your Time Source will be dependent on the game's framerate.

You can also use BPM (beats-per-minute) as a unit by calling [time\_bpm\_to\_seconds()](time_bpm_to_seconds.md) to convert your BPM value to a period in seconds, and then using time\_source\_units\_seconds as the unit.