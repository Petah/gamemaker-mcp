---
title: "Set Path Follow Speed"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Paths/Set_Path_Follow_Speed.htm"
converted: "2025-09-14T03:59:27.469Z"
---

# ![Set Path Follow Speed Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Paths/i_Paths_Set_Path_Follow_Speed.png) Set Path Follow Speed

This action will set the speed, in pixels per game frame, that an instance should follow a path (note that you must have called the [Start Following Path](Start_Following_Path.md) action to assign a path to the instance for this to have any effect). You can use negative values to signify that the instance should follow the path in reverse and it's worth noting that the speed you set here can be modified by the speed modifier set in the path editor for each path point, so if you set a path speed to 2 and in the path one of the points has a speed modifier of 200% the actual pixels per game frame speed at that point will be 4.

#### Action Syntax:

![Set Path Speed Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Paths/a_Paths_Set_Path_Follow_Speed.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| Speed | The speed (in pixels per game frame) that the instance should follow the path |

#### Example:

![Set Path Speed Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Paths/e_Paths_Set_Path_Follow_Speed.png)The above action block code starts an instance following a path, then generates a random value between 2 and 4 before using this value to set the speed that the instance moves along the path at.