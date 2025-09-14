---
title: "Set Gamepad Button Threshold"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Gamepad/Set_Gamepad_Button_Threshold.htm"
converted: "2025-09-14T03:59:25.867Z"
---

# ![Set Gamepad Button Threshold Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Gamepad/i_GamePad_Set_Button_Threshold.png) Set Gamepad Button Threshold

This action can be used to set the "threshold" of the gamepad analogue buttons. You specify the gamepad index to set, and then set a value from 0 to 1 and if the analogue button input amount is lower than the given value, the gamepad button is considered to be at 0. Note that this is a _global_ setting that will affect _all_ analogue buttons connected gamepad. This value will be used in all [down](If_Gamepad_Button_Down.md), [pressed](If_Gamepad_Button_Pressed.md) and [released](If_Gamepad_Button_Released.md) checks for the given gamepad, but will be _ignored_ by the action [Get Gamepad Trigger](Get_Gamepad_Trigger.md).

#### Action Syntax:

![Set Gamepad Button Threshold Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Gamepad/a_GamePad_Set_Button_Threshold.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| Gamepad | The gamepad index. |
| Deadzone | The threshold value (0 - 1) |

#### Example:

![Set Gamepad Button Threshold Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Gamepad/e_GamePad_Set_Button_Threshold.png)
The above action block code sets the button threshold for all gamepad indices to 0.2.