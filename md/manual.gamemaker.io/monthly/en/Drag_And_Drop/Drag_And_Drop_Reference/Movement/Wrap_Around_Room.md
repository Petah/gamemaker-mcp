---
title: "Wrap Around Room"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Movement/Wrap_Around_Room.htm"
converted: "2025-09-14T03:59:26.967Z"
---

# ![Wrap Around Room Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Movement/i_Movement_Wrap_Room.png) Wrap Around Room

With this action you can let an instance wrap around a room, that is, when it leaves on one side of the room it reappears at the other side. This action is normally used in the [Other - Outside Room Event](../../../The_Asset_Editors/Object_Properties/Other_Events.md) or the [Step Event](../../../The_Asset_Editors/Object_Properties/Object_Events.md) and you can indicate whether to wrap only horizontally, only vertically, or in both directions, as well as set a margin. The margin value is the number of pixels outside of the room area that the instance must have moved before it will be wrapped around to the other side. Note that the instance must have a speed for wrapping to work, because the direction of wrapping is based on the direction of the motion.

#### Action Syntax:

![Wrap Around Room Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Movement/a_Movement_Wrap_Around_Room.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| Margin | The margin around the edge of the room to check |
| Horizontal | Enable horizontal wrapping (on by default) |
| Vertical | Enable vertical wrapping (on by default) |

#### Example:

![Warp Around Room Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Movement/e_Movement_Wrap_Around_Room.png)The above action block code - placed in the Step Event - will wrap the instance around the horizontal or vertical axis when it is more than 32px outside the room area.