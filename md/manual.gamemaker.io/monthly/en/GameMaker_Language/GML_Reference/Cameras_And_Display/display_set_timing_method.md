---
title: "display_set_timing_method"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Cameras_And_Display/display_set_timing_method.htm"
converted: "2025-09-14T03:59:45.861Z"
---

# display\_set\_timing\_method

This function sets the timing method to be used for rendering your game.

The method can be one of the following constants:

| Display Timing Method Constant |
| --- |
| Constant | Description |
| tm_sleep | The sleep margin value is the main timing method |
| tm_countvsyncs | Vsync timing is the main timing method (default for all supported platforms) |
| tm_systemtiming | System timing is the main timing method |

The vsync timing method uses the target platform's support for vertical synchronisation to provide an anchor for the game's render timing calculations, while setting the mode to sleep margin will just try to ensure that each frame lasts for the correct amount of time (say 1/30th or 1/60th of a second) by waiting or sleeping. In general the default vsync timing will give the smoothest results, but note that when using the vsync method, the sleep margin values are still relevant, although it will have a reduced impact and we recommend keeping it at its default value when using this method.

By default on all platforms _except_ PS4, Ubuntu and HTML5, GameMaker will use the vsync timing method, while on the unsupported platforms, _only_ sleep margin timing can be used.

Certain Android devices make use of specific framerates. When running on these devices you may want to use the system timing method. This method removes all of GameMaker's sleeps and game speed control and allows the game speed to be set by the system.

If you wish to set the sleep margin you can do so using the function [display\_set\_sleep\_margin](display_set_sleep_margin.md) and you can find which timing method is currently being used with the function [display\_get\_timing\_method](display_get_timing_method.md).

#### Syntax:

display\_set\_timing\_method(method);

| Argument | Type | Description |
| --- | --- | --- |
| method | Display Timing Method Constant | The timing method to use (see the list of constants, above) |

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

The above code will check the timing method and if it's not set to tm\_sleep it will be set to that and the sleep margin set to 20.