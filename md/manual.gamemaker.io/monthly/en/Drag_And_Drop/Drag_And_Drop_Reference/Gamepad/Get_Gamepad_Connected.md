---
title: "Get Gamepad Connected"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Gamepad/Get_Gamepad_Connected.htm"
converted: "2025-09-14T03:59:25.760Z"
---

# ![Gamepad Get Connected Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Gamepad/i_GamePad_Get_Connected.png) Get Gamepad Connected

You can use this action to check and see if a given gamepad "slot" has a gamepad connected. You supply the gamepad index (this is the number of "slot" that a gamepad occupies) and the returned value will be stored in the target variable that you supply for future use (this can be flagged as a temporary local variable that you create for this event or script).

#### Action Syntax:

![Gamepad Get Connected Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Gamepad/a_GamePad_Get_Connected.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| Gamepad | The gamepad index to check. |
| Target | The target variable to store the returned value in. |

#### Example:

![Gamepad Get Connected Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Gamepad/e_GamePad_Get_Connected.png)The above action block code runs a for loop to check and see if a gamepad is connected to any of the 12 available "slots". If a gamepad is discovered, a global variable is set to the current slot number and the loop is broken.