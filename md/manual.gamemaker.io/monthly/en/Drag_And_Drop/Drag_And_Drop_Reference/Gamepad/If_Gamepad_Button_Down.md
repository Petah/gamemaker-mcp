---
title: "If Gamepad Button Down"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Gamepad/If_Gamepad_Button_Down.htm"
converted: "2025-09-14T03:59:25.807Z"
---

# ![If Gamepad Button Down Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Gamepad/i_GamePad_If_Button_Down.png) If Gamepad Button Down

With this action you can poll a gamepad to see if a given button is currently being held down. The action will return true every step that the button is being held down, or false otherwise, although if you click the not modifier you can then check to see if the button is _not_ being held, i.e.: the action will return true while no button is down and false if there is. If you only need to check for a single button press then use the action [If Gamepad Button Pressed](If_Gamepad_Button_Pressed.md).

If the button being checked is an analogue button, then it will not be considered held down until the button value has gone above the threshold set using the action [Set Gamepad Button Threshold](Set_Gamepad_Button_Threshold.md).

Note that to add actions into the "if" block, they should be dropped to the side of the action, as shown in the image below:

![If Gamepad Button Down drop actions](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Gamepad/a_If_Gamepad_Button_DownDrop.png)These actions will now be run if the "if" evaluates to true, while any actions dropped elsewhere will be performed after the "if" block.

#### Action Syntax:

![If Gamepad Button Down](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Gamepad/a_GamePad_If_Button_Down.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| Gamepad | The gamepad index. |
| Button | The name of the button to check. |
| Not | Negate the check (true becomes false and vice versa) |

#### Example:

![If Gamepad Button Down Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Gamepad/e_GamePad_If_Button_Down.png)The above action block code polls the button state of gamepad 0 every step and if a button is being held down it checks for the initial button down press. If the check is true on the initial down press, a sound is played, then, while the button is held down, the instance speed is set to 10. If the button is not being held down, a check is done on the button release to reset the speed to 0 again.