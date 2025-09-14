---
title: "Show Debug Message"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Miscellaneous/Show_Debug_Message.htm"
converted: "2025-09-14T03:59:26.483Z"
---

# ![Show Debug Message Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Miscellaneous/i_Misc_Show_Debug_Message.png) Show Debug Message

With this action you can send a debug message to the [Compiler Output](../../../Introduction/The_Output_Window.md). This message can be either a string or a real number, but if you wish to use both then the number _must be converted to a string_ (see the action [Number To String](../Data_Types/Number_To_String.md)). Note that you can output multiple messages using this action by clicking the ![Expand Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Icon_Expand_Arguments.png) icon to expand the action with further output fields.

#### Action Syntax:

![Show Debug Message Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Miscellaneous/a_Misc_Show_Debug_Message.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| Message | The message to show in the Output window |

#### Example:

![Show Debug Message Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Miscellaneous/e_Misc_Show_Debug_Message.png)The above action block code will check a variable and if it returns true then a couple of debug messages will be shown in the Output window.