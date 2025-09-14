---
title: "gamepad_get_button_threshold"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Game_Input/GamePad_Input/gamepad_get_button_threshold.htm"
converted: "2025-09-14T03:59:58.543Z"
---

# gamepad\_get\_button\_threshold

This function can be used to detect the current threshold setting of the analogue buttons for a given device. The default threshold for all analogue buttons is 0.5, with the range being from 0 to 1. The threshold defines at what point the button is considered as being "pressed" for games that require them to act as a digital button.

#### Syntax:

gamepad\_get\_button\_threshold(device);

| Argument | Type | Description |
| --- | --- | --- |
| device | Real | Which gamepad device "slot" to check. |

#### Returns:

[Real](../../../GML_Overview/Data_Types.md)

#### Example:

if (gamepad\_get\_button\_threshold(0) != 0.5)
{
    gamepad\_set\_button\_threshold(0, 0.5);
}

The above code checks the analogue button threshold of the gamepad connected to device "slot" 0 and if it is not the default value of 0.5, it is set to that value.