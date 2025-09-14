---
title: "Gamepad Input"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Game_Input/GamePad_Input/Gamepad_Input.htm"
converted: "2025-09-14T03:59:58.402Z"
---

# Gamepad Input

GameMaker has a number of dedicated functions that can be used to detect both analog and digital controls from multiple connected gamepads. These functions work similar to the [Device Inputs](../../../../../../../GameMaker_Language/GML_Reference/Game_Input/Device_Input/Device_Input.md), in that you can detect up to four different XInput gamepads that are connected (and up to 8 DirectInput gamepads) and deal with the input from each one using the same functions.

IMPORTANT It is recommended to read the **Gamepad Movement** example on [Movement And Controls](../../../../Quick_Start_Guide/Movement_And_Controls.md) to understand how gamepads can be detected and used.

## Detecting Gamepads

When a gamepad is plugged into your device (or when it is removed), an Async [System](../../../../The_Asset_Editors/Object_Properties/Async_Events/System.md) event is triggered which allows you to deal with the situation using the appropriate functions. Its event type is either "gamepad discovered" or "gamepad lost" and when a gamepad is connected, it is assigned a slot index, which is returned in [async\_load](../../../GML_Overview/Variables/Builtin_Global_Variables/async_load.md)'s "pad\_index" member. This event is also triggered at game start for gamepads that are already plugged in.

**IMPORTANT** This event will NOT be triggered unless you have at least one [gamepad\_\*](Gamepad_Input.md) function or [GML Visual action](../../../../Drag_And_Drop/Drag_And_Drop_Reference/Gamepad/Gamepad_Actions.md) in your game code. The runner will only initialise the gamepad sub-system when the functions are used in the project, so if they aren't present, adding/removing gamepads will not trigger the System Event.

Gamepad "slots" are indexed from 0 upwards, and the actual slot that a gamepad gets assigned will depend on a variety of factors, not least of which is the OS that the game is running on:

-   On the **Windows** target, slots 0 - 3 inclusive are _only for XInput gamepads_, i.e.: Xbox controllers and compatibles. However, you can also check slots 4 - 11 inclusive for _DirectInput gamepads_, which means you can detect many other models of controller when connected through these slots.
-   On other platforms, gamepads may be detected on _any_ slot that the OS has assigned it, which could be slot 3, slot 20 or higher. For example, **Android** devices will store Bluetooth gamepads in a slot and then reserve that slot for that gamepad in the future, whether it's connected or not, so you _cannot_ assume that a single connected gamepad is connected to slot 0, as this will probably not be the case.

While it is possible to check indices directly using [gamepad\_is\_connected](gamepad_is_connected.md), it is recommended, due to the above, to use the Async [System](../../../../The_Asset_Editors/Object_Properties/Async_Events/System.md) event to detect connected gamepads instead.

It is worth noting that DirectInput gamepads are run in _cooperative mode_ which means that your game only has access to them when it is the foreground application, which in turn will cause DirectInput controllers to be "lost" if the game loses focus and then "found" again when it comes back into focus (this can be detected in the [System](../../../../The_Asset_Editors/Object_Properties/Async_Events/System.md) event and dealt with). Similarly, no input from gamepads will be detected while the game is not in focus, and we recommend that you use the function [os\_is\_paused](../../OS_And_Compiler/os_is_paused.md) or [window\_has\_focus](../../../../../../../GameMaker_Language/GML_Reference/Cameras_And_Display/The_Game_Window/window_has_focus.md) to detect this and pause the game or something similar as any button being held down at the time the game loses focus will maintain the held down state until the game regains focus.

## Input Constants

When working with the gamepad functions, input can come from **axes**, **buttons** or **hats**, which GameMaker will assign to the following built-in constants (note that "hats" are generally only detected on non-standard controllers):

| Gamepad Button Constant |
| --- |
| Constant | Description |
| gp_face1 | Top button 1 (this maps to the "A" on an Xbox controller and the cross on a PS controller) |
| gp_face2 | Top button 2 (this maps to the "B" on an Xbox controller and the circle on a PS controller) |
| gp_face3 | Top button 3 (this maps to the "X" on an Xbox controller and the square on a PS controller) |
| gp_face4 | Top button 4 (this maps to the "Y" on an Xbox controller and the triangle on a PS controller) |
| gp_shoulderl | Left shoulder button |
| gp_shoulderlb | Left shoulder trigger |
| gp_shoulderr | Right shoulder button |
| gp_shoulderrb | Right shoulder trigger |
| gp_select | The select button (on a PS controller, this triggers when you press the touchpad down) |
| gp_start | The start button (this is the "options" button on a PS controller) |
| gp_stickl | The left stick pressed (as a button) |
| gp_stickr | The right stick pressed (as a button) |
| gp_padu | D-pad up |
| gp_padd | D-pad down |
| gp_padl | D-pad left |
| gp_padr | D-pad right |
| gp_home | The "home" button on Switch controllers, and the PS/XBOX logo buttons on some controllers |
| gp_touchpadbutton | The touchpad button on a PS controller |
| gp_paddler | Upper or primary paddle, under your right hand (e.g. Xbox Elite paddle P1) |
| gp_paddlel | Upper or primary paddle, under your left hand (e.g. Xbox Elite paddle P3) |
| gp_paddlerb | Lower or secondary paddle, under your right hand (e.g. Xbox Elite paddle P2) |
| gp_paddlelb | Lower or secondary paddle, under your left hand (e.g. Xbox Elite paddle P4) |
| gp_extra1 | An extra button that may be mapped to anything |
| gp_extra2 | An extra button that may be mapped to anything |
| gp_extra3 | An extra button that may be mapped to anything |
| gp_extra4 | An extra button that may be mapped to anything |
| gp_extra5 | An extra button that may be mapped to anything |
| gp_extra6 | An extra button that may be mapped to anything |

| Gamepad Axis Constant |
| --- |
| Constant | Description |
| gp_axislh | Left stick horizontal axis (analog) |
| gp_axislv | Left stick vertical axis (analog) |
| gp_axisrh | Right stick horizontal axis (analog) |
| gp_axisrv | Right stick vertical axis (analog) |
| The constants below can only be used with the DualSense gamepad on a PS4 or PS5 |
| gp_axis_acceleration_x* | The gamepad's acceleration on the X axis |
| gp_axis_acceleration_y* | The gamepad's acceleration on the Y axis |
| gp_axis_acceleration_z* | The gamepad's acceleration on the Z axis |
| gp_axis_angular_velocity_x* | The gamepad's angular velocity on the X axis |
| gp_axis_angular_velocity_y* | The gamepad's angular velocity on the Y axis |
| gp_axis_angular_velocity_z* | The gamepad's angular velocity on the Z axis |
| gp_axis_orientation_x* | The gamepad's X orientation |
| gp_axis_orientation_y* | The gamepad's Y orientation |
| gp_axis_orientation_z* | The gamepad's Z orientation |
| gp_axis_orientation_w* | The gamepad's W orientation |

NOTE The gamepad's **orientation** is a [Quaternion](https://en.wikipedia.org/wiki/Quaternion "Quaternion"), which is why it has four values (X, Y, Z and W).

\* These constants are only supported on PS4 and PS5, and when used on other platforms the input functions will return 0, even when using a DualSense gamepad.

To better understand exactly what part of the controller each constant represents, you can refer to the following image of a standard XInput gamepad:

![Xinput gamepad illustration](../../../../assets/Images/Scripting_Reference/GML/Reference/Game_Input/GamePad.png)

It is worth noting that when using DirectInput gamepads on Windows, or generic gamepads on other platforms, the constants given above **may not match exactly the buttons that you expect when they are pressed**, due to the fragmented and non-standardised way that the API is implemented by controller manufacturers. Because of this, it is recommended that you have some kind of gamepad setup screen in your games where people can redefine the gamepad buttons based on input from any connected device to mitigate any issues (there are [gamepad "mapping" functions](Gamepad_Input.htm#func_ref_custom_mappings) that can help with this on Windows Desktop, Ubuntu, macOS, and Android targets, while on all others you would need to do this yourself using code).

## Mapping Database

GameMaker comes with mappings for a number of different gamepads based on [SDL Gamepad Controller DB](https://github.com/gabomdq/SDL_GameControllerDB) which are used for remapping the built-in constants to the direct physical inputs of a given gamepad. If you want to support other gamepads you can do this by adding a custom gamecontrollerdb.txt file to the [Included Files](../../../../Settings/Included_Files.md).

It is, however, impossible to map the GML constants to the correct inputs for every make and model due to the huge number of controller types and brands out there. If you need a custom mapping for an unknown gamepad you can set one with [gamepad\_test\_mapping](gamepad_test_mapping.md) and remove it with [gamepad\_remove\_mapping](gamepad_remove_mapping.md). See the [custom mapping functions](Gamepad_Input.htm#func_ref_custom_mappings).

## Platform Compatibility

The following list shows current compatibility across the platforms (note that this will change with future updates):

-   **Windows** is fully supported with up to a maximum of 12 connected devices permitted at once (numbered from 0 to 11, with 0 - 3 being XInput devices and 4 - 11 being DirectInput). Remapping of controller constants is also permitted.
-   **macOS** is supported with up to a maximum of 4 connected devices permitted at once. Be aware that when submitting to the macOS App Store the choice of gamepads allowed by Apple is quite limited, but in testing on your own machine or if you're not submitting to the App Store, then a large number of modern pads are allowed (and you can use GameMaker's gamepad mapping functions to make even more pads work for your game). The "Build for Mac App Store" option in [macOS Game Options](../../../../Settings/Game_Options/macOS.md) needs to be OFF for pad support to work.
-   **Ubuntu** also supports gamepad input, but you may need to install additional libraries from the Ubuntu repository. You can do this easily by opening a command line terminal and typing the following (this will install GUI support for the joystick/gamepad as well as the joystick/gamepad API itself - remapping of controller constants is _not_ permitted):

    sudo apt-get install jstest-gtk
    sudo apt-get install joystick

-   **HTML5** games using gamepads are supported by most major browsers, except _Safari_. Remapping of controller constants is _not_ permitted.
-   Web browsers will only detect gamepads when a button is pressed or an axis is moved, so they may not be available at the immediate start of the game. This applies to the **GX.games** and **HTML5** target platforms.
-   Gamepad support also extends to **iOS** with the iCade cabinet. The left axis maps to the stick controller (although the input is digital, not analogue), the four "face" buttons map to the cabinet front buttons, and the four shoulder buttons map to those at the back of the cabinet.
-   **Android** export supports NYKO controllers and generic Bluetooth controllers, but only when they are enabled, meaning that you will have to tick the iCade/Bluetooth option in the "General" section of the [Android Game Options](../../../../Settings/Game_Options/Android.md). They require API level 12 for them to work fully and it should be noted that GameMaker will register as connected any Bluetooth devices that your device is paired with, whether or not it's actually connected. Therefore, this should be taken into account when assigning and checking "slots". Note that the remapping of controller constants is also permitted.
-   On **PlayStation**, if you want to use the touch pad tracking you need to use the [device\_mouse\_\*](../../../../../../../GameMaker_Language/GML_Reference/Game_Input/Device_Input/Device_Input.md) buttons. Remapping of controller constants is _not_ permitted.
-   On **Xbox One** and **Nintendo Switch** targets, gamepads are fully supported, but remapping of controller constants is _not_ permitted.

## Functions

### General

-   [gamepad\_is\_supported](../../../../../../../GameMaker_Language/GML_Reference/Game_Input/GamePad_Input/gamepad_is_supported.md)
-   [gamepad\_is\_connected](gamepad_is_connected.md)
-   [gamepad\_get\_device\_count](gamepad_get_device_count.md)
-   [gamepad\_enumerate](gamepad_enumerate.md)

### Info & Config

-   [gamepad\_get\_guid](../../../../../../../GameMaker_Language/GML_Reference/Game_Input/GamePad_Input/gamepad_get_guid.md)
-   [gamepad\_get\_description](gamepad_get_description.md)
-   [gamepad\_get\_button\_threshold](gamepad_get_button_threshold.md)
-   [gamepad\_get\_axis\_deadzone](gamepad_get_axis_deadzone.md)
-   [gamepad\_get\_option](../../../../../../../GameMaker_Language/GML_Reference/Game_Input/GamePad_Input/gamepad_get_option.md)
-   [gamepad\_set\_button\_threshold](gamepad_set_button_threshold.md)
-   [gamepad\_set\_axis\_deadzone](gamepad_set_axis_deadzone.md)
-   [gamepad\_set\_vibration](gamepad_set_vibration.md)
-   [gamepad\_set\_colour](../../../../../../../GameMaker_Language/GML_Reference/Game_Input/GamePad_Input/gamepad_set_colour.md)
-   [gamepad\_set\_option](gamepad_set_option.md)
-   [gamepad\_axis\_count](gamepad_axis_count.md)
-   [gamepad\_button\_count](gamepad_button_count.md)
-   [gamepad\_hat\_count](../../../../../../../GameMaker_Language/GML_Reference/Game_Input/GamePad_Input/gamepad_hat_count.md)

### Checking Input

-   [gamepad\_button\_check](gamepad_button_check.md)
-   [gamepad\_button\_check\_pressed](gamepad_button_check_pressed.md)
-   [gamepad\_button\_check\_released](gamepad_button_check_released.md)
-   [gamepad\_button\_value](../../../../../../../GameMaker_Language/GML_Reference/Game_Input/GamePad_Input/gamepad_button_value.md)
-   [gamepad\_axis\_value](gamepad_axis_value.md)
-   [gamepad\_hat\_value](gamepad_hat_value.md)

### Custom Mappings

NOTE These functions are only for the Windows Desktop, Ubuntu, macOS, and Android target platforms. On Windows, they are only valid for DirectInput devices.

-   [gamepad\_get\_mapping](../../../../../../../GameMaker_Language/GML_Reference/Game_Input/GamePad_Input/gamepad_get_mapping.md)
-   [gamepad\_test\_mapping](gamepad_test_mapping.md)
-   [gamepad\_remove\_mapping](gamepad_remove_mapping.md)