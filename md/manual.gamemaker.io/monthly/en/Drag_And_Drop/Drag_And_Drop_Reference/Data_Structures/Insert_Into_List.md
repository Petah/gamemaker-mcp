---
title: "Insert Into List"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Data_Structures/Insert_Into_List.htm"
converted: "2025-09-14T03:59:24.657Z"
---

# ![Insert Into List Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Data_Structures/i_DS_Insert_Into_List.png) Insert Into List

With this action you can recover the index position of an item within the given list. You supply the variable that stores the list (as returned by the action [Create List](Create_List.md)) and the value you want to find the index position of within the list, as well as a target variable to store the returned index position for the item (which can be flagged as a temporary local variable to be used until the end of the script or event). When you insert a value into a list, all indices above the given index for inserting will be moved up one, so if you have a list with 4 items in it (index position 0 to 3) and place a new item at index position 2, the previous item 2 will become item 3 and the previous item 3 will become item 4. Note that if the value you are looking for does not exist within the list, then there will be no valid list index position to return, and so the return value will be -1.

#### Action Syntax:

![Insert Into List Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Data_Structures/a_DS_Insert_Into_List.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| List | The list to insert into |
| Index | The index position within the list to insert a value |
| Value | The value to be stored at the position |

#### Example:

![Inset Into List Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Data_Structures/e_DS_Insert_Into_List.png)The above action block code uses a repeat loop to get the size of the list then generate a random position within the list. It then generates a random value and inserts this value into the list at the random position defined previously.