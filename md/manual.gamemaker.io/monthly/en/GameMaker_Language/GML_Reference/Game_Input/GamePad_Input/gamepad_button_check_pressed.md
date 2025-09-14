---
title: "gamepad_button_check_pressed"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Game_Input/GamePad_Input/gamepad_button_check_pressed.htm"
converted: "2025-09-14T03:59:58.457Z"
---

# gamepad\_button\_check\_pressed

This function will return true or false depending on whether the given gamepad button is detected as having been pressed or not. Note that this function will only trigger _once_ for the button the first time it is pressed. For it to trigger again the button must first be released and then re-pressed. If you need to check a continuous press of the button you should be using the function [gamepad\_button\_check()](gamepad_button_check.md).

If you are checking an analogue button, then the check will take into consideration the [threshold setting](gamepad_set_button_threshold.md) and only return true when the raw input value goes over the given threshold (you can get this raw value using the function [gamepad\_button\_value()](../../../../../../../GameMaker_Language/GML_Reference/Game_Input/GamePad_Input/gamepad_button_value.md)).

#### Syntax:

gamepad\_button\_check\_pressed(device, button);

| Argument | Type | Description |
| --- | --- | --- |
| device | Real | Which gamepad device "slot" to check. |
| button | Gamepad Button Constant | Which gamepad button constant to check for. |

#### Returns:

[Boolean](../../../GML_Overview/Data_Types.md)

#### Example:

if (gamepad\_button\_check\_pressed(0, gp\_start))
{
    audio\_play\_sound(snd\_Start, 0, false);
    room\_goto(rm\_Level\_1);
}

The above code will detect whether the "start" button of the gamepad connected to device "slot" 0 has been pressed or not and change room if it has.