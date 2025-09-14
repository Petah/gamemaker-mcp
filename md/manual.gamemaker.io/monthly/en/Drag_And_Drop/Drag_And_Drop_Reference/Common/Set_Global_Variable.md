---
title: "Set Global Variable"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Common/Set_Global_Variable.htm"
converted: "2025-09-14T03:59:24.339Z"
---

# ![Set Global Variable Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Common/i_Common_Set_Global.png) Set Global Variable

This action is used to either assign a global variable a value (creating it in the process) or for changing the value of an existing global variable. Global variables are variables that "belong" to no specific instance, but rather the whole project, and as such can be accessed and changed by any instance, script or code. For more advanced information on global variables please see [Global Variables](../../../../../../GameMaker_Language/GML_Overview/Variables/Global_Variables.md).

You give the name of the global variable and then the value, which can be added _relative_ to the original value if required. If you give a new variable name (ie: a variable that has never been assigned previously in the entire game) then this will create the new global variable and assign it the value you give, while if you give the name of an existing global variable, it will simply change the value to the new one. Note that checking **Relative** will add the value to the existing global variable value (use a negative number to subtract) and you can also use expressions and variables created previously as the value.

It is worth noting that when we talk about "values", we don't just mean numeric values, as a variable can be a string, a pointer, a resource ID or anything else that a function can return or use. In the case of a string, checking **Relative** will concatenate the value with whatever the variable previously held, so if your variable was "Hello" and you assign " World" to it using the relative check, the final variable value will be "Hello World". Care must be taken, however, to ensure that the variable values are both of the same [data type](../../../GameMaker_Language/GML_Overview/Data_Types.md), as trying to add, for example, an integer and a string, will result in a compiler error.

You can also add additional variables in the same action by clicking the plus icon ![](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Icon_Expand_Arguments.png) beside the action, and giving another global variable name and value. For more advanced information on variables please see the section on [Variables And Variable Scope](../../../GameMaker_Language/GML_Overview/Variables_And_Variable_Scope.md).

#### Action Syntax:

![Set Global Variable Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Common/a_Common_Set_Global.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| Name | The name of the new global variable to create, or the name of an existing global variable to change. |
| Value | The value that the global variable should hold. |
| Relative | Check this to set the value relative to the previous one. |

#### Example:

![Set Global Variable Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Common/e_Common_Set_Global.png)The above action block code checks for a collision between the calling instance and the object "obj\_player", and if one is found 1 is subtracted from the global variable "player\_hp" and the global variable "player\_score" is set to 0.