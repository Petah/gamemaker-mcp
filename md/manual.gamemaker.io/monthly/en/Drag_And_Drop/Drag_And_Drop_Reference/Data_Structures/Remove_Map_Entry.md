---
title: "Remove Map Entry"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Data_Structures/Remove_Map_Entry.htm"
converted: "2025-09-14T03:59:24.762Z"
---

# ![Remove Map Entry Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Data_Structures/i_DS_Remove_Map_Entry.png) Remove Map Entry

With this action you can remove a key (and its corresponding value) from a map data structure. You supply the variable that holds the map index (as returned by the action [Create Map](Create_Map.md)) and then give a "key" (which is the identifier within the map for a value), and the action will remove that key from the map. Note that this action does _not_ return anything, and if you need the value for the given key you should use the [Get Map Value](Get_Map_Value.md) action before removing it.

#### Action Syntax:

![Remove Map Entry Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Data_Structures/a_DS_Remove_Map_Entry.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| Map | The index (stored in a variable) of the map to remove the value from |
| Key | The key to use (real or string) |

#### Example:

![Remove Map Entry Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Data_Structures/e_DS_Remove_Map_Entry.png)The above action block code retrieves the value of a specific key from the map data structure and then checks the value to see if it is less than or equal to 0. If it is then the key is removed from the map.