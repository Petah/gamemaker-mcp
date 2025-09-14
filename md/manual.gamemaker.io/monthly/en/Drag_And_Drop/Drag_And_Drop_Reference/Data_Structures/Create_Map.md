---
title: "Create Map"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Data_Structures/Create_Map.htm"
converted: "2025-09-14T03:59:24.438Z"
---

# ![Create Map Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Data_Structures/i_DS_Create_Map.png) Create Map

This action will create a new **map** data-structure and return the index value so you can later access the map through the other Data Structure actions. The map index will be returned to the Target Variable that you supply, which can have been created earlier using either [Assign Variable](../Common/Assign_Variable.md) or [Declare Temp](../Common/Declare_Temporary_Variable.md), or you can flag the "Temp" checkbox to name and create a temporary local variable to store the value until the end of the script or event. A newly created map data structure is considered "empty", ie: it contains no map key/value entries. Note that you can create additional DS maps by clicking the plus icon  ![Expand Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Icon_Expand_Arguments.png)beside the action, and selecting another variable to hold the map ID.

**IMPORTANT!** Creating any data structure uses up memory on the target platform, and as such all data structures should be free when no longer needed using the action [Free Data Structure](Free_Data_Structure.md) otherwise you get a memory leak which can impair your games performance or even cause it to crash. This is particularly relevant when using temporary local variables to store data structure indices, as these variables are removed at the end of the code or event, but that does not mean the data structure is removed too! The data structure will still exist, only you will have no way to reference it, so either use an instance variable and free the structure at a later time, or free the structure before the end of the event or function if its index is stored in a temporary variable.

#### Action Syntax:

![Create Map Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Data_Structures/a_DS_Create_Map.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| Target | The target variable to store the map index in |

#### Example:

![Create Map Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Data_Structures/e_DS_Create_Map.png)The above action block code creates a new instance variable and a new map data structure. The index value of the map is stored in the variable and then used to add two items to the map.