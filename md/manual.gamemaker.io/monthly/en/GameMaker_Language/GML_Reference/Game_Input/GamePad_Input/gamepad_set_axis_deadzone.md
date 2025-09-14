---
title: "gamepad_set_axis_deadzone"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Game_Input/GamePad_Input/gamepad_set_axis_deadzone.htm"
converted: "2025-09-14T03:59:58.723Z"
---

# gamepad\_set\_axis\_deadzone

This function can be used to set the "dead zone" of the joystick axis. You specify the device slot to set, and then set a value from 0 to 1 and if the input amount is lower than the given value, the joystick axis is considered to be at 0. Note that this is a global setting that will affect _all_ axis of all joysticks connected to the device slot specified.

Using this function does not mean that the axis value will start from the deadzone value, as the function [gamepad\_axis\_value()](gamepad_axis_value.md) will _always_ return a normalised value between -1 and 0 or 0 and 1. For example, setting the deadzone to 0.2 will mean that pushing the stick right will only start returning a value from 0 - 1 when the _raw_ axis value is over 0.2 - so when the raw value is 0.2, the return value will be 0, when the raw value is at 0.5, the return value will be 0.375, or if the raw value is 0.9, then the return value would be 0.875.

#### Syntax:

gamepad\_set\_axis\_deadzone(device, deadzone);

| Argument | Type | Description |
| --- | --- | --- |
| device | Real | Which gamepad device "slot" to check. |
| deadzone | Real | The dead zone value from 0 to 1. |

#### Returns:

N/A

#### Example:

if (async\_load\[? "event\_type"\] == "gamepad discovered")
{
    var \_pad = async\_load\[? "pad\_index"\];
    gamepad\_set\_axis\_deadzone(\_pad, 0.2);
    array\_push(gamepads, \_pad);
}

The above code runs in the Async [System](../../../../The_Asset_Editors/Object_Properties/Async_Events/System.md) event and when a gamepad is discovered, it takes the pad index, sets its deadzone to 20% and pushes the pad index into an array.

This follows the **Gamepad Movement** example on [Movement And Controls](../../../../Quick_Start_Guide/Movement_And_Controls.md) where the gamepads array is set up.