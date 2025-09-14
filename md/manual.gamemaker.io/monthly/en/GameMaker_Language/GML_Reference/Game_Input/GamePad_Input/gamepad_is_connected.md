---
title: "gamepad_is_connected"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Game_Input/GamePad_Input/gamepad_is_connected.htm"
converted: "2025-09-14T03:59:58.676Z"
---

# gamepad\_is\_connected

This function will return whether a gamepad is connected to the given "slot" (returns true) or not (returns false).

Note that there may be a slight delay between the user connecting the gamepad and GameMaker detecting it as being connected (this is especially the case when dealing with Bluetooth connected controllers).

NOTE On some platforms - especially consoles - this function may return false immediately after a gamepad has been connected/selected. It is recommended to instead use the Async [System](../../../../The_Asset_Editors/Object_Properties/Async_Events/System.md) event to check when it's connected.

#### Syntax:

gamepad\_is\_connected(device)

| Argument | Type | Description |
| --- | --- | --- |
| device | Real | The gamepad "slot" to check |

#### Returns:

[Boolean](../../../GML_Overview/Data_Types.md)

#### Example:

var \_gamepad\_count = array\_length(gamepads);

for (var i = 0; i < \_gamepad\_count; i++)
{
    var \_gamepad = gamepads\[i\];
    if (gamepad\_is\_connected(\_gamepad))
    {
        // Read input
    }
}

The above code loops through the gamepads stored in the array gamepads. If any given gamepad is still connected, you can read input from it within the for loop.

This follows the **Gamepad Movement** example on [Movement And Controls](../../../../Quick_Start_Guide/Movement_And_Controls.md) where the gamepads array is set up.