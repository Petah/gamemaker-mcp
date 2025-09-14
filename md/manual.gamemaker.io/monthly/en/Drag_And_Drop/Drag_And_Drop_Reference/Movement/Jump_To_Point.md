---
title: "Jump To Point"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Movement/Jump_To_Point.htm"
converted: "2025-09-14T03:59:26.722Z"
---

# ![Jump To Point Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Movement/i_Movement_Jump_To_Point.png) Jump To Point

This action is used to move an instance from one location to another. The instance will not move smoothly to the new position, but will "jump" to be placed there, so if the values are large enough then it will "skip over" any other instances on the way. You can set absolute values to move the instance to, or you can tick the "relative" flag to have the instance move relative to the current position. For example, if you want the instance to jump 10 pixels to left only, you would set the x value to -10 and the y value to 0 and tick relative for both. You can use negative values for absolute coordinates and the instance will be moved outside of the base room area.

#### Action Syntax:

![Jump Tp Point Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Movement/a_Movement_Jump_To_Point.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| x | The x position to jump to |
| y | The y position to jump to |

#### Example:

![Jump Tp Point Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Movement/e_Movement_Jump_To_Point.png)The above action block code checks to see if the left mouse button is held down, and if it is it moves the instance to the mouse position.