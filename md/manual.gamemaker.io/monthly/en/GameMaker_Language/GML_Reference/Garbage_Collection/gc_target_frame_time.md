---
title: "gc_target_frame_time"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Garbage_Collection/gc_target_frame_time.htm"
converted: "2025-09-14T04:00:00.091Z"
---

# gc\_target\_frame\_time

With this function you can indicate to the garbage collector that it should aim to spend no more than the time specified running each frame. The function takes a time value specified in microseconds (where 1,000,000 microseconds equals one second) and the default target frame time is 100 microseconds.

Please note that this is simply a _target_ value, as some operations still need to run completely in one frame and may sometimes take longer than the target time. Also note that increasing the target time will make the garbage collector more responsive to rapid changes in memory usage and will cause memory to be freed more quickly, though in practice this is unlikely to be required in most cases. Also note that setting the target frame time to 0 will _not_ cause the collector to stop completely - it will still do a minimal amount of work each frame. To completely disable the collector use the [gc\_enable()](gc_enable.md) function.

#### Syntax:

gc\_target\_frame\_time(time);

| Argument | Type | Description |
| --- | --- | --- |
| time | Real | The target time - in microseconds -  that the garbage collector should work each frame |

#### Returns:

N/A

#### Example:

if (gc\_get\_target\_frame\_time() != 50)
{
    gc\_target\_frame\_time(50);
}

The above code checks the current frame time target for the garbage collector and if it is not 50 microseconds then it is set to this value.