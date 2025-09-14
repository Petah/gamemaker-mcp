---
title: "Reverse"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Movement/Reverse.htm"
converted: "2025-09-14T03:59:26.779Z"
---

# ![Reverse Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Movement/i_Movement_Reverse.png) Reverse

This action is used to reverse certain values related to direction and movement. The available options are:

![Reverse Action Options](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Movement/Reverse_Options.png)Reversing _direction_ will simply add 180° to the current direction (looping around 360° if necessary, so, for example, reversing 270° would give you 90°), reversing the _horizontal_ or _vertical_ speed will simply multiply the given speed vector by -1, and choosing _gravity_ will do the same as choosing direction, only for the gravity direction.

#### Action Syntax:

![Reverse Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Movement/a_Movement_Reverse.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| direction | The direction to reverse |

#### Example:

![Reverse Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Movement/e_Movement_Reverse.png)The above action block code checks for a collision of the instance with "obj\_Wall" relative to the current position to the left and to the right. If one is found then the horizontal speed is reversed. It then does the same for above and below the instance, reversing the vertical speed if a collision is detected.