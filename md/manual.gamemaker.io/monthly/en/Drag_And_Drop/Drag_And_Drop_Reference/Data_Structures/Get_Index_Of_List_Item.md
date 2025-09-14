---
title: "Get Index Of List Item"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Data_Structures/Get_Index_Of_List_Item.htm"
converted: "2025-09-14T03:59:24.541Z"
---

# ![Get Index Of List Item Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Data_Structures/i_DS_Get_Index_Of_List_Item.png) Get Index Of List Item

With this action you can recover the index position of an item within the given list. You supply the variable that stores the list handle (as returned by the action [Create List](Create_List.md)) and the value you want to find the index position of within the list, as well as a target variable to store the returned index position for the item (which can be flagged as a temporary local variable to be used until the end of the script or event). Note that if the value you are looking for does not exist within the list, then there will be no list index position to return, and so the return value will be -1.

#### Action Syntax:

![Get Index Of List Item Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Data_Structures/a_DS_Get_Index_Of_List_Item.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| List | The handle (stored in a variable) of the list to remove from |
| Value | The value to check the list for |
| Target | The target variable to store the returned index |

#### Example:

![Get Index Of List Item Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Data_Structures/e_DS_Remove_From_List.png)The above action block code checks for a collision at the instance position and if one is found the unique ID value for the instance is stored in a temporary variable and then checked to see if it exists within the list data structure. If it does exist then the item is removed from the list and the instance destroyed.