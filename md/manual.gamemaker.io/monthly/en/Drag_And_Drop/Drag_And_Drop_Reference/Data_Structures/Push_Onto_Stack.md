---
title: "Push Onto Stack"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Data_Structures/Push_Onto_Stack.htm"
converted: "2025-09-14T03:59:24.701Z"
---

# ![Push Onto Stack Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Data_Structures/i_DS_Push_Onto_Stack.png) Push Onto Stack

With this action you can push a value onto a stack data structure. You supply the variable that holds the stack index (as returned by the action [Create Stack](Create_Stack.md)) and then give the value to push onto the top. With stack data structures, values are always added onto the "top" of the stack, and never at the end or in the middle (if you require this functionality, then use a list data structure).

#### Action Syntax:

![Push Onto Stack Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Data_Structures/a_DS_Push_Onto_Stack.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| Stack | The index (stored in a variable) of the stack to use |
| Value | The value to push onto the stack |

#### Example:

![Push Onto Stack Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Data_Structures/e_DS_Create_Stack.png)The above action block code creates an instance variable and a new stack data structure. The index of the stack is stored in the new variable, and then a loop is performed which creates 10 instances and pushes their unique ID values onto the stack.