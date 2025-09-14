---
title: "time_source_resume"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Time_Sources/time_source_resume.htm"
converted: "2025-09-14T04:00:08.390Z"
---

# time\_source\_resume

This function resumes the given Time Source and its children. The given Time Source must have been previously paused using [time\_source\_pause()](time_source_pause.md).

#### Syntax:

time\_source\_resume(id);

| Argument | Type | Description |
| --- | --- | --- |
| id | Time Source | The Time Source to resume |

#### Returns:

N/A

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
        time\_source\_resume(time\_source);
    }
}

When the Space key is pressed, this code will get a Time Source's state.

When the state is active, it will pause the Time Source, and when it's paused, it will resume it.