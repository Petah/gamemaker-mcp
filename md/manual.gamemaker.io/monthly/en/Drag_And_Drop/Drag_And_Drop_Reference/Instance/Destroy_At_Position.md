---
title: "Destroy At Position"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Instance/Destroy_At_Position.htm"
converted: "2025-09-14T03:59:25.939Z"
---

# ![Destroy At Position Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Instance/i_Instance_Destroy_Position.png) Destroy At Position

This action block will destroy _all_ instances found at the point given, calling the [Destroy Event](../../../The_Asset_Editors/Object_Properties/Object_Events.md) and then the [Clean Up Event](../../../The_Asset_Editors/Object_Properties/Object_Events.md) for all instances found.

Note that this action is based on the collision mask of the instances, and if any part of the mask over-laps with the target point it then the function will destroy that instance (if the instances have no sprite or mask applied, then they will not be destroyed).

#### Action Syntax:

![Destroy At Position Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Instance/a_Instance_Destroy_Position.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| x | The x position in the room to use. |
| y | The y position in the room to use. |

#### Example:

![Destroy At Position Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Instance/e_Instance_Destroy_Position.png)The above action block code checks for a key-press (the space key) and if one is detected it will destroy all the instances found at the instances relative position.