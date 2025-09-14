---
title: "display_set_sleep_margin"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Cameras_And_Display/display_set_sleep_margin.htm"
converted: "2025-09-14T03:59:45.845Z"
---

# display\_set\_sleep\_margin

This function can be used to set the sleep margin value used for the render timing of your game, and requires a millisecond value. The default values are as follows:

| Platform | Milliseconds |
| --- | --- |
| Windows | 10 |
| macOS | 10 |
| Ubuntu | 10 |
| HTML5 | 10 |
| Android | 4 |
| iOS | 4 |
| Xbox | 10 |
| PS4 | 10 |
| Nintendo Switch | 10 |

Note that even if the timing method is set to use vsync timing, the sleep margin will have some effect over the rendering of the game, and so you should take care when setting this value. For more information on display timing, please see [display\_set\_timing\_method()](display_set_timing_method.md).

**NOTE** In addition to the Sleep Margin, you can further control your performance and power consumption on Windows by adjusting the [thread scheduler's resolution](../OS_And_Compiler/scheduler_resolution_set.md) at runtime.

#### Syntax:

display\_set\_sleep\_margin(milliseconds);

| Argument | Type | Description |
| --- | --- | --- |
| milliseconds | Real | The number of milliseconds for the sleep margin |

#### Returns:

N/A

#### Example:

if (display\_get\_timing\_method() != tm\_sleep)
{
    display\_set\_timing\_method(tm\_sleep);
    if (display\_get\_sleep\_margin() != 20)
    {
        display\_set\_sleep\_margin(20);
    }
}

The above code will check the timing method and then if it's not set to tm\_sleep it will be set to that and the sleep margin set to 20.