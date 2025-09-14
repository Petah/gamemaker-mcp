---
title: "time_source_get_state"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Time_Sources/time_source_get_state.htm"
converted: "2025-09-14T04:00:08.282Z"
---

# time\_source\_get\_state

This function returns the [state](Time_Source_States.md) of the given Time Source.

#### Syntax:

time\_source\_get\_state(id);

| Argument | Type | Description |
| --- | --- | --- |
| id | Time Source | The Time Source to get the state of |

#### Returns:

[Time Source State Constant](Time_Source_States.md)

#### Example:

if (keyboard\_check\_pressed(vk\_space))
{
    var \_state = time\_source\_get\_state(time\_source);

    if (\_state == time\_source\_state\_active)
    {
        time\_source\_pause(time\_source);
    }
    else if (\_state == time\_source\_state\_paused)
    {
        time\_source\_start(time\_source);
    }
}

When the Space key is pressed, this code will get a Time Source's state.

When the state is active, it will pause the Time Source, and when it's paused, it will resume it.