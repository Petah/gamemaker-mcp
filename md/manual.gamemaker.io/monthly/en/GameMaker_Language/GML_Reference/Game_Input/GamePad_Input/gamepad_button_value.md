---
title: "gamepad_button_value"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Game_Input/GamePad_Input/gamepad_button_value.htm"
converted: "2025-09-14T03:59:58.501Z"
---

# gamepad\_button\_value

With this function you can get the current value of an analogue button, from 0 to 1, where 0 is no pressure and 1 is full pressure. You supply the gamepad slot index to check, along with either a button constant (as listed [here](Gamepad_Input.md)), or an integer value between 0 and [gamepad\_button\_count()](gamepad_button_count.md) - 1.

Note that this will return the _raw_ value for the button, and does _not_ take into account the setting for the threshold (see [here](gamepad_set_button_threshold.md) for more information on thresholds).

#### Syntax:

gamepad\_button\_value(device, button);

| Argument | Type | Description |
| --- | --- | --- |
| device | Real | Which gamepad device "slot" to check. |
| button | Gamepad Button Constant | Which gamepad button constant to check for. |

#### Returns:

[Real](../../../../../../../GameMaker_Language/GML_Overview/Data_Types.md)

#### Example:

speed = gamepad\_button\_value(0, gp\_shoulderrb) \* 4;

The above code uses the analogue trigger value from the gamepad plugged into device "slot" 0 to set the speed of the instance.