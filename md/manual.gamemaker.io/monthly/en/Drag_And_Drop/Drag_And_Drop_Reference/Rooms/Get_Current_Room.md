---
title: "Get Current Room"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Rooms/Get_Current_Room.htm"
converted: "2025-09-14T03:59:27.589Z"
---

# ![Get Current Room Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Rooms/i_Rooms_Get_Current_Room.png) Get Current Room

This action will return the unique room index value for the current room. You need to supply a target variable to hold the returned value, and this variable can be flagged as a temporary local variable.

#### Action Syntax:

![Get Current Room Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Rooms/a_Rooms_Get_Current_Room.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| Target | The target variable to store the returned room index |

#### Example:

![Get Current Room Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Rooms/e_Rooms_Get_Current_Room.png)The above action block code gets the current room index value and then uses a [Switch](../Switch/Switch.md) action to check the room and set a global variable depending on the result.