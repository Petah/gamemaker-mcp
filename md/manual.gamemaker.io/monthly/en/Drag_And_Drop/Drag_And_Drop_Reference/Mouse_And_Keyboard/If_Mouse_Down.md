---
title: "If Mouse Down"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Mouse_And_Keyboard/If_Mouse_Down.htm"
converted: "2025-09-14T03:59:26.599Z"
---

# ![If Mouse Down Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Mouse_And_Keyboard/i_KeyboardMouse_Down.png) If Mouse Down

With this action you can poll the mouse to see if the selected button is currently being held down. The action will return true every step that the button is being held down, or false otherwise, although if you click the not modifier you can then check to see if the button is _not_ being held, ie: the action will return true while no button is down and false if there is. If you only need to check for a single button press then use the action [If Mouse Pressed](If_Mouse_Pressed.md).

Note that to add actions into the "if" block, they should be dropped to the side of the action, as shown in the image below:

![If Mouse Down drop actions](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Mouse_And_Keyboard/a_If_Mouse_DownDrop.png)These actions will now be run if the "if" evaluates to true, while any actions dropped elsewhere will be performed after the "if" block.

#### Action Syntax:

![If Mouse Down Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Mouse_And_Keyboard/a_KeyboardMouse_Down.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| Mouse Button | The name of the mouse button to check (see this page for information on mouse button constants). |
| Not | Negate the check (true becomes false and vice versa) |

#### Example:

![If Mouse Down Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Mouse_And_Keyboard/e_KeyboardMouse_Down.png)The above action block code polls the mouse button state every step and if it is being held down it checks for the initial mouse down press. If the check is true on the initial down press the instance speed is set, then, while the button is down, the sprite blending is changed to red. If the mouse is not being held down, a check is done on the mouse release to reset the blending colour to white and set the speed to 0.