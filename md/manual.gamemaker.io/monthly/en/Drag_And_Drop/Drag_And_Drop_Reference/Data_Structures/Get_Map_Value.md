---
title: "Get Map Value"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Data_Structures/Get_Map_Value.htm"
converted: "2025-09-14T03:59:24.600Z"
---

# ![Get Map Value Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Data_Structures/i_DS_Get_Map_Value.png) Get Map Value

With this action you can retrieve the value associated with a given key in a map data structure. You supply the variable that holds the map index (as returned by the action [Create Map](Create_Map.md)) and then give a "key" (which is the identifier within the map for a value), and also supply a target variable to hold the returned value (which can be flagged as a temporary local variable).

NOTE If you give a key that does not exist in the map then the action will return undefined. You can check for this this using the [If Undefined](../Common/If_Undefined.md) action.

#### Action Syntax:

![Get Map Value Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Data_Structures/a_DS_Get_Map_Value.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| Map | The index (stored in a variable) of the map to get the value from |
| Key | The key to get (real or string) |
| Target | The target variable to hold the returned map value |

#### Example:

![Get Map Value Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Data_Structures/e_DS_Get_Map_Value.png)The above action block code checks for a collision at the instance position and if one is found then a map is looked up to get a value from the key "damage", and this value is then used to change the calling instance variable "hp".