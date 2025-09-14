---
title: "display_get_sleep_margin"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Cameras_And_Display/display_get_sleep_margin.htm"
converted: "2025-09-14T03:59:45.696Z"
---

# display\_get\_sleep\_margin

This function can be used to get the current sleep margin value used for the render timing of your game, and will return a millisecond value. For more information on display timing, please see [display\_set\_timing\_method()](display_set_timing_method.md).

#### Syntax:

display\_get\_sleep\_margin();

#### Returns:

[Real](../../../../../../GameMaker_Language/GML_Overview/Data_Types.md)

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