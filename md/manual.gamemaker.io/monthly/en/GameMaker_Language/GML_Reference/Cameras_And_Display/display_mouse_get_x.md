---
title: "display_mouse_get_x"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Cameras_And_Display/display_mouse_get_x.htm"
converted: "2025-09-14T03:59:45.737Z"
---

# display\_mouse\_get\_x

This function will return the mouse x position within the _screen_. It should be noted that this function only works properly when used on the Windows and macOS targets.

It can be used for HTML5 too, but will only return a value _relative_ to the 0,0 of the canvas itself, and will not return any value while the mouse is outside of the canvas.

For other devices it will return 0, and you should use the [device\_mouse\_raw\_x()](../Game_Input/Device_Input/device_mouse_raw_x.md) and [device\_mouse\_raw\_y()](../Game_Input/Device_Input/device_mouse_raw_y.md) functions instead.

#### Syntax:

display\_mouse\_get\_x();

#### Returns:

[Real](../../GML_Overview/Data_Types.md)

#### Example:

my\_x = display\_mouse\_get\_x();

This would set my\_x to the x coordinate of the mouse relative to the display.