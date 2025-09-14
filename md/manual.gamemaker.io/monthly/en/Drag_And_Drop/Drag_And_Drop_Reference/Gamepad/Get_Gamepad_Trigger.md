---
title: "Get Gamepad Trigger"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Gamepad/Get_Gamepad_Trigger.htm"
converted: "2025-09-14T03:59:25.792Z"
---

# ![Gamepad Get Trigger Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Gamepad/i_GamePad_Get_Trigger.png) Get Gamepad Trigger

You can use this action to get the value of the different triggers from a given gamepad. You supply the gamepad index (this is the number of "slot" that a gamepad occupies) and select the the trigger to check (left or right). The value returned will be between 0 and 1, where 0 is no pressure on the trigger and 1 full pressure. This returned value will be stored in the target variable that you supply for future use. Note that this function does _not_ take into account the [threshold setting](Set_Gamepad_Button_Threshold.md).

#### Action Syntax:

![Get Gamepad Trigger Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Gamepad/a_GamePad_Get_Trigger.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| Gamepad | The gamepad index. |
| Trigger | The trigger to check (left/right) |
| Target | The target variable to store the returned value in. |

#### Example:

![Get Gamepad Trigger Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Gamepad/e_GamePad_Get_Trigger.png)The above action block code creates a local (temporary) variable and then uses it to store the current value for the left trigger. If the trigger value is over 0.5 an instance is created at the calling instance's position.