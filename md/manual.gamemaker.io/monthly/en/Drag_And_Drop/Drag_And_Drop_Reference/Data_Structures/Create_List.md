---
title: "Create List"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Data_Structures/Create_List.htm"
converted: "2025-09-14T03:59:24.422Z"
---

# ![Create List Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Data_Structures/i_DS_Create_List.png) Create List

This action will create a new **list** data structure and return the handle so you can later access the list through the other Data Structure actions. The handle will be stored in the Target Variable that you supply, which can have been created earlier using either [Assign Variable](../Common/Assign_Variable.md) or [Declare Temp](../Common/Declare_Temporary_Variable.md), or you can flag the "Temp" checkbox to name and create a temporary local variable to store the value until the end of the script or event. A newly created list data structure is considered "empty", i.e.: it contains no list entries. Note that you can create additional DS lists by clicking the plus icon ![Expand Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Icon_Expand_Arguments.png) beside the action, and selecting another variable to hold the list.

IMPORTANT Creating any data structure uses up memory on the target platform, and as such all data structures should be free when no longer needed using the action [Free Data Structure](Free_Data_Structure.md), otherwise you get a memory leak which can impair your game's performance or even cause it to crash. This is particularly relevant when using temporary local variables to store data structure handles, as these variables are removed at the end of the code or event, but that does not mean the data structure is removed too! The data structure will still exist, only you will have no way to reference it, so either use an instance variable and free the structure at a later time, or free the structure before the end of the event or function if its handle is stored in a temporary variable.

#### Action Syntax:

![Create List Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Data_Structures/a_DS_Create_List.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| Target | The target variable to store the list handle in |

#### Example:

![Create List Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Data_Structures/e_DS_Create_List.png)The above action block code creates a global scope variable and then creates a new list data structure, assigning its handle to the global variable. The scope is then changed to so all the instances of the object "obj\_Enemy\_Parent" add their unique instance ID value into the list.