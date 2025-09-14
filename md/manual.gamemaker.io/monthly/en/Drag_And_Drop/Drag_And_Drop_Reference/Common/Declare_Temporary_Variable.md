---
title: "Declare Temp"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Common/Declare_Temporary_Variable.htm"
converted: "2025-09-14T03:59:24.114Z"
---

# ![Declare Temporary Variable Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Common/i_Common_Temp_Var.png) Declare Temp

This action is used to declare and give an initial value to a **temporary variable** (also called a **local variable**), which is a variable that _only exists for the duration of the event or script that it was declared in_. Temporary variables are very useful for storing values that are only needed for a single operation and prevent your objects becoming "cluttered" with variables that may only be used once. They are also very useful for breaking down complex operations, or for setting values in other instances when you change the action scope. This is because variables declared as temporary are_not_scoped to any particular instance, but instead scoped to the event or script itself, so if you create a temporary variable and then change the action scope using the [Apply To...](Apply_To...md) action, you can still check the temporary variable without issues and without changing its action scope.

It is worth noting that when we talk about "values", we don't just mean numeric values, as a variable can be a string, a pointer, a resource ID or anything else that a function can return or use, even an expression. See the section on [Data Types](../../../GameMaker_Language/GML_Overview/Data_Types.md) for more information.

Note that many action have a "Temp" check-box which enables you to create a new temporary local variable to hold the return value of the action, and this variable can be accessed in the action script or event as you would any other variable thereafter. Also note that temporary local variables are scoped to the script or event in which they are created, and so they can be used by other instances in the same block when using [Apply To...](Apply_To...md).

You can also add additional variables in the same action by clicking the plus icon ![](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Icon_Expand_Arguments.png) beside the action, and giving another temporary local variable name and value. For more advanced information on variables please see the section on [Variables And Variable Scope](../../../GameMaker_Language/GML_Overview/Variables_And_Variable_Scope.md).

#### Action Syntax:

![Declare Temporary Variable Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Common/a_Common_Declare_Temp_Var.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| Name | The name of the new variable to assign, or the name of an existing variable to change. |
| Value | The value that the variable should hold. |

#### Example:

![Declare Temporary Variable Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Common/e_Common_Declare_Temp.png)The above action block code creates two temporary variables, " \_dir" and "\_spd" and sets them to random values. It then uses these values to set the instance moving in a random direction at a random speed.