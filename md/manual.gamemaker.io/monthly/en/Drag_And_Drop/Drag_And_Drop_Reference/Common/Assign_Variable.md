---
title: "Assign Variable"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Common/Assign_Variable.htm"
converted: "2025-09-14T03:59:24.050Z"
---

# ![Assign Variable Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Common/i_Common_Assign_Var.png) Assign Variable

This action is used to either assign a variable a value (creating it in the process) or for changing the value of an existing variable.

You give the name of the variable and then the value, which can be added _relative_ to the original value if required. If you give a new variable name (i.e.: a variable that has never been assigned previously in the instance) then this will create the new variable and assign it the value you give, while if you give the name of an existing variable, it will simply change the value to the new one.

You can add additional variables in the same action by clicking the plus icon ![](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Icon_Expand_Arguments.png) beside the action, and giving another variable name and value. For more advanced information on variables please see the section on [Variables And Variable Scope](../../../GameMaker_Language/GML_Overview/Variables_And_Variable_Scope.md).

## Relative Checkbox

Checking **Relative** will add your new value to the variable's existing value (use a negative number to subtract) and you can also use expressions and variables created previously as the value.

When we talk about "values", we don't just mean numeric values, as a variable can be a string, a pointer, a resource ID or anything else that a function can return or use. In the case of a string, checking **Relative** will concatenate the value with whatever the variable previously held, so if your variable was "Hello" and you assign " World" to it using the relative check, the final variable value will be "Hello World".

Care must be taken, however, to ensure that the variable values are both of the same [data type](../../../GameMaker_Language/GML_Overview/Data_Types.md), as trying to add, for example, an integer and a string, will result in a compiler error.

#### Action Syntax:

![Assign Variable Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Common/a_Common_Assign_Var.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| Name | The name of the new variable to assign, or the name of an existing variable to change. |
| Value | The value that the variable should hold. |
| Relative | Check to set the value relative to the previous one. |

#### Example:

![Assign Variable Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Common/e_Common_Assign_Var.png)The above action block code checks two instance variables and if one is higher than another ( if "my\_score" is greater than "level\_score"), then it sets a number of instance variables to new values.