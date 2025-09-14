---
title: "display_get_timing_method"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Cameras_And_Display/display_get_timing_method.htm"
converted: "2025-09-14T03:59:45.715Z"
---

# display\_get\_timing\_method

This function returns the timing method to be used for rendering your game.

The method can be one of the constants listed below:

| Display Timing Method Constant |
| --- |
| Constant | Description |
| tm_sleep | The sleep margin value is the main timing method |
| tm_countvsyncs | Vsync timing is the main timing method (default for all supported platforms) |
| tm_systemtiming | System timing is the main timing method |

For more information on the different timing methods, please see [display\_set\_timing\_method](display_set_timing_method.md).

#### Syntax:

display\_get\_timing\_method();

#### Returns:

[Display Timing Method Constant](display_get_timing_method.md)

#### Example:

if (display\_get\_timing\_method() != tm\_sleep)
{
    display\_set\_timing\_method(tm\_sleep);
    if (display\_get\_sleep\_margin() != 20)
    {
        display\_set\_sleep\_margin(20);
    }
}

The above code will check the timing method and if it's not set to tm\_sleep it will be set to that and the sleep margin set to 20.