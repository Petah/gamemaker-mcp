---
title: "Pop Stack"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Data_Structures/Pop_Stack.htm"
converted: "2025-09-14T03:59:24.678Z"
---

# ![Pop Stack Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Data_Structures/i_DS_Pop_Stack.png) Pop Stack

With this action you can pop a value off the top of a stack data structure. You supply the variable that holds the stack index (as returned by the action [Create Stack](Create_Stack.md)) and then give the target variable that should hold the returned variable (which can be flagged as a temporary local variable).

#### Action Syntax:

![Pop Stack Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Data_Structures/a_DS_Pop_Stack.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| Stack | The index (stored in a variable) of the stack to use |
| Target | The target variable to hold the returned value |

#### Example:

![Pop Stack Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Data_Structures/e_DS_Pop_Stack.png)The above action block code checks to see if the given stack is empty, and if it is not, it pops the top value off and stores it in a temporary variable. This is then used to set an alarm, while if the stack is empty, 10 random values are pushed onto the stack.