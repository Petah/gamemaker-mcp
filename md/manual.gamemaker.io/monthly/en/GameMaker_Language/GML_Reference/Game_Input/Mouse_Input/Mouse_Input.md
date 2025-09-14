---
title: "Mouse Input"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Game_Input/Mouse_Input/Mouse_Input.htm"
converted: "2025-09-14T03:59:59.588Z"
---

# Mouse Input

Mouse input is accepted on all platforms (on mobile devices it is accepted as a single screen touch - if you need to use multi-touch, you should be using the [device-specific functions](../../../../../../../GameMaker_Language/GML_Reference/Game_Input/Device_Input/Device_Input.md)) and has a few constants that are used to specify the buttons being pressed. These constants are shown in the following table:

| Mouse Button Constant |
| --- |
| Constant | Description |
| mb_left | The left mouse button |
| mb_middle | The middle mouse button (this may not be valid for all target platforms) |
| mb_right | The right mouse button |
| mb_side1* | Mouse side button 1 |
| mb_side2* | Mouse side button 2 |
| mb_any | Any of the mouse buttons |
| mb_none | No mouse button |

\* NOTE The **mb\_side1** and **mb\_side2** buttons are only for use on Windows, macOS, Ubuntu and HTML5.

The following functions exist for the standard mouse button controls:

-   [mouse\_button](mouse_button.md)
-   [mouse\_check\_button](mouse_check_button.md)
-   [mouse\_check\_button\_pressed](mouse_check_button_pressed.md)
-   [mouse\_check\_button\_released](../../../../../../../GameMaker_Language/GML_Reference/Game_Input/Mouse_Input/mouse_check_button_released.md)
-   [mouse\_clear](mouse_clear.md)
-   [mouse\_lastbutton](../../../../../../../GameMaker_Language/GML_Reference/Game_Input/Mouse_Input/mouse_lastbutton.md)
-   [mouse\_wheel\_up](mouse_wheel_up.md)
-   [mouse\_wheel\_down](mouse_wheel_down.md)
-   [mouse\_x](mouse_x.md)
-   [mouse\_y](../../../../../../../GameMaker_Language/GML_Reference/Game_Input/Mouse_Input/mouse_y.md)

There are also a set of window functions related to using the mouse on desktop targets:

-   [window\_mouse\_get\_x](../../Cameras_And_Display/The_Game_Window/window_mouse_get_x.md)
-   [window\_mouse\_get\_y](../../Cameras_And_Display/The_Game_Window/window_mouse_get_y.md)
-   [window\_mouse\_set](../../Cameras_And_Display/The_Game_Window/window_mouse_set.md)
-   [window\_view\_mouse\_get\_x](../../../../../../../GameMaker_Language/GML_Reference/Cameras_And_Display/The_Game_Window/window_view_mouse_get_x.md)
-   [window\_view\_mouse\_get\_y](../../Cameras_And_Display/The_Game_Window/window_view_mouse_get_y.md)
-   [window\_views\_mouse\_get\_x](../../../../../../../GameMaker_Language/GML_Reference/Cameras_And_Display/The_Game_Window/window_views_mouse_get_x.md)
-   [window\_views\_mouse\_get\_y](../../Cameras_And_Display/The_Game_Window/window_views_mouse_get_y.md)

## Mouse Coordinates

You can get the coordinates of the mouse within the room using [mouse\_x](mouse_x.md) and [mouse\_y](../../../../../../../GameMaker_Language/GML_Reference/Game_Input/Mouse_Input/mouse_y.md). There are also functions for getting the raw or GUI mouse coordinates, please see [Device Input](../../../../../../../GameMaker_Language/GML_Reference/Game_Input/Device_Input/Device_Input.md).

Mouse coordinates are updated every frame, however some platforms (such as macOS) use an event handler for capturing mouse position.

This means there may be frames where the mouse moved, but its position remained unchanged -- which would mean that there was no mouse event between the current and previous frame.

Due to this, you may encounter frames where the mouse coordinates are the same as the previous frame, depending on the platform.