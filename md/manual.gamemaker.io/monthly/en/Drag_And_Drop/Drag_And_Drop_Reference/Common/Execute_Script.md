---
title: "Execute Script"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Common/Execute_Script.htm"
converted: "2025-09-14T03:59:24.161Z"
---

# ![Execute Script Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Common/i_Common_Execute_Script.png) Execute Script

This action can be used to call a script function or [user-defined function](Declare_A_New_Function.md). In general, this action would only be used for legacy support and shouldn't really be used in current or new projects. To use the action, you give the script asset to call - or the user-defined function variable name to call - and then supply any _arguments_ that it requires, ie: any values (strings, integers, resource indices, etc...) that you wish to input into the script or function so that it can use them. You can add additional arguments as required by clicking the plus icon  ![](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Icon_Expand_Arguments.png)beside the action.

Some scripts and user-defined functions can also return a value for later use in the action block list, and so you can specify the **target variable** that should store this return value. This can have been created previously or can be a new temporary local one (if you check the "**Temp**" check-box). Both the target and the argument fields can be left blank if they are not required.

Note that you are generally better off using the action [Function Call](Function_Call.md) to call user-defined functions, and shouldn't generally need to use this action, or call a script asset directly in code.

#### Action Syntax:

![Execute Script Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Common/a_Common_Execute_Script.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| Script | The name of the script or user-defined function to call. |
| Argument0 ... Argument3 | The different arguments (values) that are to be passed to the script or function (unused arguments can be left blank) |
| Target | The name of the variable that is to be targeted for any returned values (can be left blank) |

#### Example:

![Execute Script Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Common/e_Common_Execute_Script.png)The above action block code calls a user-defined function, passing in two arguments for a random position within the room. It does not return anything.