---
title: "If Gamepad Button Released"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Gamepad/If_Gamepad_Button_Released.htm"
converted: "2025-09-14T03:59:25.840Z"
---

# ![If Gamepad Button Released Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Gamepad/i_GamePad_If_Button_Released.png) If Gamepad Button Released

This action checks for when a gamepad button has been released for the given gamepad index. It will return true on the single game tick that the button is released on and false at all other times. If you enable the not modifier, this action will be reversed, and check if the button has _not_ been released, returning false on the game tick that it has been released on and true at all other times.

If the button being checked is an analogue button, then the release will not be detected until the button value has gone below the threshold set using the action [Set Gamepad Button Threshold](Set_Gamepad_Button_Threshold.md).

Note that to add actions into the "if" block, they should be dropped to the side of the action, as shown in the image below:

![If Gamepad Button Released drop actions](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Gamepad/a_If_Gamepad_Button_ReleaseDrop.png)These actions will now be run if the "if" evaluates to true, while any actions dropped elsewhere will be performed after the "if" block.

#### Action Syntax:

![If Gamepad Button Released Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Gamepad/a_GamePad_If_Button_Released.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| Gamepad | The gamepad index. |
| Button | The name of the button to check. |
| Not | Negate the check (true becomes false and vice versa) |

#### Example:

![If Gamepad Button Released Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Gamepad/e_GamePad_If_Button_Down.png)The above action block code polls the button state of gamepad 0 every step and if a button is being held down it checks for the initial button down press. If the check is true on the initial down press, a sound is played, then, while the button is held down, the instance speed is set to 10. If the button is not being held down, a check is done on the button release to reset the speed to 0 again.