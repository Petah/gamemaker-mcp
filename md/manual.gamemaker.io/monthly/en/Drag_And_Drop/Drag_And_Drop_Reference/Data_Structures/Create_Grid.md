---
title: "Create Grid"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Data_Structures/Create_Grid.htm"
converted: "2025-09-14T03:59:24.403Z"
---

# ![Create Grid Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Data_Structures/i_DS_Create_Grid.png) Create Grid

This action will create a new **grid** data-structure and return the index value so you can later access the grid through the other Data Structure actions. The grid index will be returned to the Target Variable that you supply, which can have been created earlier using either [Assign Variable](../Common/Assign_Variable.md) or [Declare Temp](../Common/Declare_Temporary_Variable.md), or you can flag the "Temp" checkbox to name and create a temporary local variable to store the value until the end of the script or event. Note that unlike other data structures, grids are _not_ created "empty", and each cell of a newly created grid will have the value 0. It's up to you to change the cell data or clear the grid yourself to another value using the action [Clear Grid](Clear_Grid.md). Note that you can create additional DS grids by clicking the plus icon ![Expand Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Icon_Expand_Arguments.png) beside the action, and selecting another variable to hold the grid ID and and giving the width and height values again.

**IMPORTANT!** Creating any data structure uses up memory on the target platform, and as such all data structures should be free when no longer needed using the action [Free Data Structure](Free_Data_Structure.md) otherwise you get a memory leak which can impair your games performance or even cause it to crash. This is particularly relevant when using temporary local variables to store data structure indices, as these variables are removed at the end of the code or event, but that does not mean the data structure is removed too! The data structure will still exist, only you will have no way to reference it, so either use an instance variable and free the structure at a later time, or free the structure before the end of the event or function if its index is stored in a temporary variable.

#### Action Syntax:

![Create Grid Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Data_Structures/a_DS_Create_Grid.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| Target | The target variable to store the grid index in |

#### Example:

![Create Grid Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Data_Structures/e_DS_Create_Grid.png)The above action block code creates two temporary variables to hold the number of 32px cells along the width and height of the room, and then creates a new global scope variable to hold the index of a newly created grid data structure. The grid is then cleared using the keyword noone.