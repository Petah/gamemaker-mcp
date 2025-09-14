---
title: "If Key Released"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Mouse_And_Keyboard/If_Key_Released.htm"
converted: "2025-09-14T03:59:26.566Z"
---

# ![If Keyboard Released Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Mouse_And_Keyboard/i_KeyboardMouse_KeyReleased.png) If Key Released

This action checks for when a keyboard key has been released. It will return true on the single game step (frame) that the key is released on and false at all other times. If you enable the not modifier, this action will be reversed, and check if the key has _not_ been released, returning false on the game step (frame) that it has been released on and true at all other times.

Note that to add actions into the "if" block, they should be dropped to the side of the action, as shown in the image below:

![If Key Released drop actions example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Mouse_And_Keyboard/a_If_Key_ReleasedDrop.png)These actions will now be run if the "if" evaluates to true, while any actions dropped elsewhere will be performed after the "if" block.

#### Action Syntax:

![If Key Released Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Mouse_And_Keyboard/a_KeyboardMouse_KeyReleased.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| Key | The name of the key to check. |
| Not | Negate the check (true becomes false and vice versa) |

#### Example:

![If Key Released Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Mouse_And_Keyboard/e_KeyboardMouse_KeyDown.png)The above action block code polls the keyboard state every step and if a key is being held down it checks for the initial key down press. If the check is true on the initial down press, a sound is played, then, while the key is held down, the sprite blending is changed to red. If the key is not being held down, a check is done on the key release to reset the blending colour to white.