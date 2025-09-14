---
title: "gc_get_target_frame_time"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Garbage_Collection/gc_get_target_frame_time.htm"
converted: "2025-09-14T04:00:00.063Z"
---

# gc\_get\_target\_frame\_time

With this function you can retrieve the current target frame value for the garbage collector. The value returned is in microseconds (where 1,000,000 microseconds equals one second) and the default target frame time is 100 microseconds. If you wish to change this value then you should use the function [gc\_target\_frame\_time()](gc_target_frame_time.md).

#### Syntax:

gc\_get\_target\_frame\_time(time);

#### Returns:

[Real](../../GML_Overview/Data_Types.md)

#### Example:

if (gc\_get\_target\_frame\_time() != 50)
{
    gc\_target\_frame\_time(50);
}

The above code checks the current frame time target for the garbage collector and if it is not 50 microseconds then it is set to this value.