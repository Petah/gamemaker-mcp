---
title: "Add Motion"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Movement/Add_Motion.htm"
converted: "2025-09-14T03:59:26.710Z"
---

# ![Assign Variable Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Movement/i_Movement_Add_Motion.png) Add Motion

This action accelerates the instance with the given speed in the given direction.

This is useful for controlling instances that accelerate gradually, like a space ship or a rolling ball, unlike, say, an RPG character which moves at a constant speed.

#### Action Syntax:

![Assign Variable Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Movement/a_Movement_Add_Motion.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| Direction | The direction to accelerate in |
| Speed | The speed of the acceleration |

#### Example:

![Assign Variable Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Movement/e_Movement_Add_Motion.png)This will cause the instance to accelerate in the direction of the sprite's rotation, with a speed of 0.1, if the up arrow key is held down.

You can [modify](../Common/Assign_Variable.md) the [image\_angle](../../../GameMaker_Language/GML_Reference/Asset_Management/Sprites/Sprite_Instance_Variables/image_angle.md) variable to turn the instance.