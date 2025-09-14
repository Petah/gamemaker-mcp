---
title: "Get List Item Count"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Data_Structures/Get_List_Item_Count.htm"
converted: "2025-09-14T03:59:24.587Z"
---

# ![Get List Item Count Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Data_Structures/i_DS_Get_List_Item_Count.png) Get List Item Count

You can use this action to find out how many entries there are in a list. You supply the variable that holds the list index (as returned by the action [Create List](Create_List.md)) and the target variable to store the returned number of items in the list (which can be flagged as a temporary local variable to be used until the end of the script or event).

#### Action Syntax:

![Get List Item Count Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Data_Structures/a_DS_Get_List_Item_Count.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| List | The index (stored in a variable) to get the item count from |
| Target | The target variable to store the returned item count |

#### Example:

![Get List Item Count Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Data_Structures/e_DS_Free_Data_Structure.png)The above action block code gets the size of the list referenced in the global variable and then uses a for loop to loop through it and destroy the instances with the IDs stored in the list. After the loop is finished, the list is freed from memory.