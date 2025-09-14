---
title: "gamepad_set_button_threshold"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Game_Input/GamePad_Input/gamepad_set_button_threshold.htm"
converted: "2025-09-14T03:59:58.743Z"
---

# gamepad\_set\_button\_threshold

This function can be used to set the current threshold setting of the analogue buttons for a given device. The default threshold for all analogue buttons is 0.5, with the range being from 0 to 1.

The threshold defines at what point the button is considered as being "pressed" for games that require them to act as a digital button.

This function will affect the [check](gamepad_button_check.md), [pressed](gamepad_button_check_pressed.md) and [released](gamepad_button_check_released.md) states for analogue buttons, but will _not_ affect the value returned by the function [gamepad\_button\_value()](../../../../../../../GameMaker_Language/GML_Reference/Game_Input/GamePad_Input/gamepad_button_value.md), which will always return the raw value for the button.

#### Syntax:

gamepad\_set\_button\_threshold(device, threshold);

| Argument | Type | Description |
| --- | --- | --- |
| device | Real | Which gamepad device "slot" to check. |
| threshold | Real | The new threshold value (from 0 - 1, default 0.5). |

#### Returns:

N/A

#### Example:

if (gamepad\_get\_button\_threshold(0) != 0.5)
{
    gamepad\_set\_button\_threshold(0, 0.5);
}

The above code checks the analogue button threshold of the gamepad connected to device "slot" 0 and if it is not the default value of 0.5, it is set to that value.