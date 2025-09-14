---
title: "Get Gamepad Count"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Gamepad/Get_Gamepad_Count.htm"
converted: "2025-09-14T03:59:25.771Z"
---

# ![Gamepad Get Count Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Gamepad/i_GamePad_Get_Count.png) Get Gamepad Count

You can use this action to get the number of gamepads connected to the device running your game. The number returned will be between 0 and 12.

#### Action Syntax:

![Get Gamepad Count Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Gamepad/a_GamePad_Get_Count.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| Target | The target variable to store the returned value in. |

#### Example:

![Get Gamepad Count Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Gamepad/e_GamePad_Get_Count.png)The above action block code gets the number of gamepads connected and assigns the value to a temporary local variable. This is then checked to see if it is more than 0 and a global variable set accordingly.