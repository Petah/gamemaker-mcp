---
title: "Remove From List"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Data_Structures/Remove_From_List.htm"
converted: "2025-09-14T03:59:24.735Z"
---

# ![Remove From List Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Data_Structures/i_DS_Remove_From_List.png) Remove From List

This action can be used to remove the item at the given index from the given list. You supply the variable that stores the list (as returned by the action [Create List](Create_List.md)) and the index position within the list to remove, where the index position is between 1 and (list length -1). This action does not return anything so if you need the value at the index position you should use [Get List Item At](Get_List_Item_At.md) before removing the index.

#### Action Syntax:

![Remove From List Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Data_Structures/a_DS_Remove_From_List.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| List | The list to remove from |
| Index | The index within the list to remove |

#### Example:

![Remove From List Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Data_Structures/e_DS_Remove_From_List.png)The above action block code checks for a collision at the instance position and if one is found the unique ID value for the instance is stored in a temporary variable and then checked to see if it exists within the list data structure. If it does exist then the item is removed from the list and the instance destroyed.