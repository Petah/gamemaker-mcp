---
title: "Create Stack"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Data_Structures/Create_Stack.htm"
converted: "2025-09-14T03:59:24.451Z"
---

# ![Create Stack](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Data_Structures/i_DS_Create_Stack.png) Create Stack

This action will create a new **stack** data-structure and return the index value so you can later access the stack through the other Data Structure actions. The stack index will be returned to the Target Variable that you supply, which can have been created earlier using either [Assign Variable](../Common/Assign_Variable.md) or [Declare Temp](../Common/Declare_Temporary_Variable.md), or you can flag the "Temp" checkbox to name and create a temporary local variable to store the value until the end of the script or event. A newly created stack data structure is considered "empty", ie: it contains no entries. Note that you can create additional DS stacks by clicking the plus icon  ![Expand Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Icon_Expand_Arguments.png)beside the action, and selecting another variable to hold the stack ID.

**IMPORTANT!** Creating any data structure uses up memory on the target platform, and as such all data structures should be free when no longer needed using the action [Free Data Structure](Free_Data_Structure.md) otherwise you get a memory leak which can impair your games performance or even cause it to crash. This is particularly relevant when using temporary local variables to store data structure indices, as these variables are removed at the end of the code or event, but that does not mean the data structure is removed too! The data structure will still exist, only you will have no way to reference it, so either use an instance variable and free the structure at a later time, or free the structure before the end of the event or function if its index is stored in a temporary variable.

#### Action Syntax:

![Create Stack Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Data_Structures/a_DS_Create_Stack.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| Target | The target variable to store the stack index in |

#### Example:

![Create Stack Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Data_Structures/e_DS_Create_Stack.png)The above action block code creates an instance variable and a new stack data structure. The index of the stack is stored in the new variable, and then a loop is performed which creates 10 instances and pushes their unique ID values onto the stack.