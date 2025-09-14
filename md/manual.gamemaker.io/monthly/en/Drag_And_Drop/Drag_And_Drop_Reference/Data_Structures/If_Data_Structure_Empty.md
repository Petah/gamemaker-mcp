---
title: "If Data Structure Empty"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Data_Structures/If_Data_Structure_Empty.htm"
converted: "2025-09-14T03:59:24.617Z"
---

# ![If Data Structure Empty Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Data_Structures/i_DS_If_Data_Structure_Empty.png) If Data Structure Empty

With this action you can check a to see if the given data structure is empty or not. You first need to pick the type of data structure to check for (either a List, a Map, or a Stack - no grids since they cannot even be empty) and then you supply the variable that holds the data structure index (as returned by the actions [Create List](Create_List.md), [Create Map](Create_Map.md), and [Create Stack](Create_Stack.md)). The action will return true if the data structure is empty, and false if it is not. Note that you can flag "not" in the action to check if a data structure _does_ hold data by checking if it is not empty.

Note that to add actions into the "if" block, they should be dropped to the side of the action, as shown in the image below:

![If DS Empty drop actions](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Data_Structures/If_Empty_Drop.png)These actions will now be run if the "if" evaluates to true, while any actions dropped elsewhere will be performed after the "if" block.

#### Action Syntax:

![If Data Structure Empty Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Data_Structures/a_DS_If_Data_Structure_Empty.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| Structure | The type of data structure to check (List, Map, or Stack) |
| Variable | The variable holding the data structure index |

#### Example:

![If Data Structure Empty Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Data_Structures/e_DS_Clear_Data_Structure.png)The above action block code checks to see if the data structure referenced in the global variable is _not_ empty, and if that is the case, the data structure is cleared.