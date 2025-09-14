---
title: "gamepad_get_description"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Game_Input/GamePad_Input/gamepad_get_description.htm"
converted: "2025-09-14T03:59:58.560Z"
---

# gamepad\_get\_description

This function will return a string with the description of the given gamepad, for example, a PS3 controller may return a string similar to "PLAYSTATION(R)3 Controller", or an Xbox 360 controller could return "Xbox 360 Controller (XInput STANDARD GAMEPAD)". This string is hardware dependant and the returned value will depend on the gamepad plugged into the device "slot" that is being checked.

#### Syntax:

gamepad\_get\_description(device);

| Argument | Type | Description |
| --- | --- | --- |
| device | Real | Which gamepad "slot" to get the name of. |

#### Returns:

[String](../../../GML_Overview/Data_Types.md)

#### Example:

for (var i = 0; i < \_gamepad\_count; i++)
{
    var \_gamepad = gamepads\[i\];
    if (gamepad\_is\_connected(\_gamepad))
    {
        draw\_text(32, 32 + (i \* 32), gamepad\_get\_description(\_gamepad));
    }
    else
    {
        draw\_text(32, 32 + (i \* 32), "Gamepad not found");
    }
}

The above code will loop through all gamepads in the array gamepads to check for connected devices and then draw some text to the screen based on whether a gamepad is connected to the slot or not.

This follows the **Gamepad Movement** example on [Movement And Controls](../../../../Quick_Start_Guide/Movement_And_Controls.md) where the gamepads array is set up.