---
title: "Set Point Direction"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Movement/Set_Point_Direction.htm"
converted: "2025-09-14T03:59:26.920Z"
---

# ![Set Point Direction Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Movement/i_Movement_Set_Point_Direction.png) Set Point Direction

This action is used to set a direction from a vector formed by the current position of the instance and the position given. You supply the x and y position to "point" at - these can be flagged as relative to the instance position - and the direction from the instance to that point will be used for the instance.

#### Action Syntax:

![Set Point Direction Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Movement/a_Movement_Set_Point_Direction.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| x | The x component of the direction vector. |
| y | The y component of the direction vector. |

#### Example:

![Set Point Direction Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Movement/e_Movement_Set_Point_Direction.png)The above action block code checks checks to see if an instance of the object "obj\_Player" exists in the room and if it does it then sets the direction of the instance to point towards the x/y position of "obj\_Player".