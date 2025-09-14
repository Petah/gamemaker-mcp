---
title: "time_source_start"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Time_Sources/time_source_start.htm"
converted: "2025-09-14T04:00:08.406Z"
---

# time\_source\_start

This function starts the given Time Source, changing its [state](Time_Source_States.md) to time\_source\_state\_active.

The specified Time Source may be a new Time Source that was never started, was paused, stopped or expired with no repetitions.

This function will "soft-reset" the given Time Source, resetting its [expiry time](time_source_get_time_remaining.md) and [reps remaining](time_source_get_reps_remaining.md) to the values that were configured for it.

#### Syntax:

time\_source\_start(id);

| Argument | Type | Description |
| --- | --- | --- |
| id | Time Source | The Time Source to start |

#### Returns:

N/A

#### Example:

var \_my\_method = function()
{
    instance\_destroy();
}

var \_time\_source = time\_source\_create(time\_source\_game, 300, time\_source\_units\_frames, \_my\_method);

time\_source\_start(\_time\_source);

In this example, we want the instance to destroy itself 300 frames later.

The code first creates a method that simply calls [instance\_destroy()](../Asset_Management/Instances/instance_destroy.md).

It then creates a Time Source, inheriting from the Game Time Source. It sets its period to **300 frames**.

Finally, it starts the Time Source.