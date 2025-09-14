---
title: "Go To Next Room"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Rooms/Go_To_Next_Room.htm"
converted: "2025-09-14T03:59:27.603Z"
---

# ![Go To Next Room Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Rooms/i_Rooms_Go_To_Next_Room.png) Go To Next Room

This action will make your game go to the next room as listed in the [Room Manager](../../../Settings/The_Room_Manager.md) at the time the game was compiled. If this room does not exist, an error will be thrown and the game will be forced to close. Note that the room will not change until the end of the event or script where the action was called, so any code after this action will still run.

#### Action Syntax:

![Go To Next Room Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Rooms/a_Rooms_Go_To_Next_Room.png)

#### Example:

![Go To Next Room Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Rooms/e_Rooms_Go_To_Next_Room.png)The above action block code checks for a collision with another object and if one is detected a variable in the instance is checked and the game will either go to the next room or the previous room as listed in the Room Manager order.