---
title: "Get Gamepad Axis"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Gamepad/Get_Gamepad_Axis.htm"
converted: "2025-09-14T03:59:25.747Z"
---

# ![ Gamepad Get Axis Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Gamepad/i_GamePad_Get_Axis.png) Get Gamepad Axis

You can use this action to get the value of the different axes from a given gamepad. You supply the gamepad index (this is the number of "slot" that a gamepad occupies) and select the axis to check from either the left or right stick, horizontal or vertical. The value returned will be between -1 and 1 for each of the available horizontal and vertical axes: -1 is left and 1 is right for horizontal axis, and -1 is up and 1 is down for the vertical axis. This returned value will be stored in the target variable that you supply for future use, which you can flag as a "Temp" variable, meaning that the action will create a new temporary (local) variable to hold the return value for you, as shown in the example below.

It is worth noting that [setting the deadzone](Set_Gamepad_Axis_Deadzone.md) for the stick axis will _not_ affect the returned value, which will always be between -1 and 1. For example, setting the deadzone to 0.2 will mean that pushing the stick right will only start returning a value from 0 - 1 when the _raw_ axis value is over 0.2 - so when the raw value is 0.2, the return value will be 0, when the raw value is at 0.5, the return value will be 0.375, or if the raw value is 0.9, then the return value would be 0.875.

#### Action Syntax:

![Get Gamepad Axis Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Gamepad/a_GamePad_Get_Axis.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| Gamepad | The gamepad index. |
| Axis | The axis to check (left stick/right stick, horizontal/vertical) |
| Target | The target variable to store the returned value in. |

#### Example:

![Get Gamepad Axis Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Gamepad/e_GamePad_Get_Axis.png)The above action block code creates two local (temporary) variables and then stores the current values for the horizontal and vertical axis of the gamepad left stick. These values are then used to set the direction of the instance.