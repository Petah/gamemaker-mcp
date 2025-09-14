---
title: "gamepad_get_axis_deadzone"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Game_Input/GamePad_Input/gamepad_get_axis_deadzone.htm"
converted: "2025-09-14T03:59:58.529Z"
---

# gamepad\_get\_axis\_deadzone

This function can be used to get the "dead zone" value of the joystick axis. You specify the device slot to get, and the function will return a value between 0 to 1, where value reflects the threshold under which the joystick axis is considered to be at 0.

#### Syntax:

gamepad\_get\_axis\_deadzone(device);

| Argument | Type | Description |
| --- | --- | --- |
| device | Real | Which gamepad device "slot" to check. |

#### Returns:

[Real](../../../GML_Overview/Data_Types.md)

#### Example:

if (gamepad\_get\_axis\_deadzone(global.PadId) != 0.5)
{
    gamepad\_set\_axis\_deadzone(global.PadId, 0.5);
}

The above code checks the analogue axis threshold of the gamepad connected to the device "slot" stored in the global variable and if it is not the default value of 0.5, it is set to that value.