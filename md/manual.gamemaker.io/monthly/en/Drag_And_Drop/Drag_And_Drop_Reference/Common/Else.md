---
title: "Else"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Common/Else.htm"
converted: "2025-09-14T03:59:24.128Z"
---

# ![Else Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Common/i_Common_Else.png) Else

The "Else" action is _only ever used in conjunction with [If Variable](If_Variable.md)_ (or any other "if" action), and is a way of defining a set of actions that should be performed if the "if" evaluation returns false. For example, you could have an "if" action that checks if the players health variable is less than or equal to 0, and if that evaluates to true you destroy the instance. However if you want to perform a different set of code actions if the player health is _not_ less than 0 then you can add an "else" in and then specify the actions to be performed while the if evaluates to false.

Note that to add actions into the "else" block, they should be dropped to the side of the action, as shown in the image below:

![Else drop actions example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Common/a_Common_Else_Drop.png)Any actions dropped elsewhere will be performed after the "else" block and its contents have been run.

#### Action Syntax:

![Else Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Common/a_Common_Else.png)

#### Example:

![Else Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Common/e_Common_Else.png)The above action block code checks a DS list to see if the initial value is "undefined" or not. If it is then the DS List is destroyed, otherwise the value is assigned to a global variable.