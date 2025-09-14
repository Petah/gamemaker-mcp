---
title: "If Virtual Keyboard Showing"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Mouse_And_Keyboard/If_Virtual_Keyboard_Is_Showing.htm"
converted: "2025-09-14T03:59:26.641Z"
---

# ![If Virtual Keyboard Showing Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Mouse_And_Keyboard/i_VirtualKeyboard_IfShowing.png) If Virtual Keyboard Showing

This action can be used to check if the OS virtual keyboard is being shown or not. The action will evaluate to true when the keyboard is open or opening, or false if the virtual keyboard is closed or closing. If you enable the not modifier, this action will be reversed and you can store the return true / false value in a target variable, which can be flagged as temp (local).

Note that to add actions into the "if" block, they should be dropped to the side of the action, as shown in the image below:

![If Virtual Keyboard Is SHowing drop actions example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Mouse_And_Keyboard/a_If_VirtualKeyboard_ShowDrop.png)These actions will now be run if the "if" evaluates to true, while any actions dropped elsewhere will be performed after the "if" block.

#### Action Syntax:

![If Virtual Keyboard Is Showing Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Mouse_And_Keyboard/a_VirtualKeyboard_IfShowing.png)

#### Example:

![If Virtual Keyboard Is SHowing Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Mouse_And_Keyboard/e_VirtualKeyboard_Show.png)The above action block code checks for a mouse down action, and if one is detected, then a check is performed to see if the OS virtual keyboard is showing. If it isn't then it is set to show - using a numeric keypad type - and if is already showing then it is hidden.