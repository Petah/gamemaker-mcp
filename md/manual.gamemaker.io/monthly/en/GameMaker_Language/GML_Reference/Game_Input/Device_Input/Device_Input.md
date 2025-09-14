---
title: "Device Input"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Game_Input/Device_Input/Device_Input.htm"
converted: "2025-09-14T03:59:58.146Z"
---

# Device Input

When your game is targeted at those platforms that permit multi-touch, you should be using these functions. They work the same way a PC would work if it had multiple mice attached and the constants that are being checked for are the same as those used for the [standard mouse functions](../Mouse_Input/Mouse_Input.md):

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

The functions can all take a "touch" value that corresponds to a touch on the device display. However, the maximum number of touches that can be detected will depend very much on the device and the OS being run. For example, some low-end Android devices may only be able to detect 2 or 3 touches at the same time, while a Windows device may be able to detect up to 10.

On touchscreen devices, a double tap is returned as the equivalent of a **right mouse button** event. So, if you need to detect multiple taps in quick succession, for example, you will need to check for **both** mb\_left and mb\_right. This functionality can be toggled on or off using [device\_mouse\_dbclick\_enable](device_mouse_dbclick_enable.md).

Please note that on mobile devices (Android, iOS and Windows Phone), you can use the back button at any time, as it is mapped to the keyboard **backspace** which is the GameMaker [keyboard constant](../Keyboard_Input/Keyboard_Input.md) vk\_backspace, so you can do checks for that key and perform actions on those devices as if the back button had been used.

Also note that to use the [tilt functions](Device_Input.htm#func_ref_tilt) on GX.games you need to call [os\_request\_permission](../../OS_And_Compiler/os_request_permission.md)("DeviceMotion") to access orientation information. This only applies to certain browsers, however. More specifically, it applies to those browsers that have a checkmark in the [Browser compatibility table](https://developer.mozilla.org/en-US/docs/Web/API/DeviceMotionEvent#browser_compatibility) (in the requestPermission() static method row).

### Note on Mouse Coordinates

Mouse coordinates are updated every frame, however some platforms (such as macOS) use an event handler for capturing mouse position.

This means there may be frames where the mouse moved, but its position remained unchanged -- which would mean that there was no mouse event between the current and previous frame.

Due to this, you may encounter frames where the mouse coordinates are the same as the previous frame, depending on the platform.

## Function Reference

### General

-   [device\_mouse\_check\_button](device_mouse_check_button.md)
-   [device\_mouse\_check\_button\_pressed](device_mouse_check_button_pressed.md)
-   [device\_mouse\_check\_button\_released](device_mouse_check_button_released.md)
-   [device\_mouse\_dbclick\_enable](device_mouse_dbclick_enable.md)
-   [device\_mouse\_x](device_mouse_x.md)
-   [device\_mouse\_y](device_mouse_y.md)
-   [device\_mouse\_raw\_x](device_mouse_raw_x.md)
-   [device\_mouse\_raw\_y](device_mouse_raw_y.md)
-   [device\_mouse\_x\_to\_gui](device_mouse_x_to_gui.md)
-   [device\_mouse\_y\_to\_gui](device_mouse_y_to_gui.md)

### Keypad

-   [device\_is\_keypad\_open](device_is_keypad_open.md)

### Tilt

-   [device\_get\_tilt\_x](device_get_tilt_x.md)
-   [device\_get\_tilt\_y](device_get_tilt_y.md)
-   [device\_get\_tilt\_z](device_get_tilt_z.md)