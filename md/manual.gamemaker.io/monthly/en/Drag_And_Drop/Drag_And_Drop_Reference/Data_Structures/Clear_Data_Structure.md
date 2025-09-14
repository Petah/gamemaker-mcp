---
title: "Clear Data Structure"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Data_Structures/Clear_Data_Structure.htm"
converted: "2025-09-14T03:59:24.374Z"
---

# ![Clear Data Structure Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Data_Structures/i_DS_Clear_Data_Structure.png) Clear Data Structure

This action will clear all values from the given data structure. You must first select the type of data structure to clear and then give the index of the data structure (the index is the value that is returned and stored in a variable when you created the data structure originally). A cleared data structure is considered "empty" (ie: it has no entries), _except_ grids. With grids this action will simply clear all the grid cells to 0.

NOTE This does not free the data structure from memory and only clears it of any information. To free the memory assigned to the data structure you must use the action [Free Data Structure](Free_Data_Structure.md).

#### Action Syntax:

![Clear Data Structure Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Data_Structures/a_DS_Clear_Data_Structure.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| Structure | The type of data structure you are clearing (List, Map, Grid or Stack) |
| Variable | The variable holding the index of the data structure to clear |

#### Example:

![Clear Data Structure Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Data_Structures/e_DS_Clear_Data_Structure.png)The above action block code checks to see if the data structure referenced in the global variable is _not_ empty, and if that is the case, the data structure is cleared.