---
title: "gamepad_get_device_count"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Game_Input/GamePad_Input/gamepad_get_device_count.htm"
converted: "2025-09-14T03:59:58.577Z"
---

# gamepad\_get\_device\_count

This function either gives you the number of game pads connected, _or_ the number of available "slots" for game pads to be connected to.

The actual return value will depend on the platform and the internal configuration of that platform and as such this function can be used in conjunction with the function [gamepad\_is\_connected()](gamepad_is_connected.md) to make sure of the exact number of pads connected at any time.

#### Syntax:

gamepad\_get\_device\_count();

#### Returns:

[Real](../../../GML_Overview/Data_Types.md)

#### Example:

var gp\_num = gamepad\_get\_device\_count();
for (var i = 0; i < gp\_num; i++;)
{
    if (gamepad\_is\_connected(i))
    {
        global.gp\[i\] = true;
    }
    else
    {
        global.gp\[i\] = false;
    }
}

The above code loops through the available game pads (or gamepad slots) and then checks each one for a connected gamepad. The returned value is then used to set a global array to true or false for use in future checks.