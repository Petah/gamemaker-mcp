---
title: "Set Speed"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Movement/Set_Speed.htm"
converted: "2025-09-14T03:59:26.939Z"
---

# ![Set Speed Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Movement/i_Movement_Set_Speed.png) Set Speed

This action is used to set the movement speed of the instance. The speed as calculated as the number of pixels that an instance has to move in a single game frame (step). By default the speed value will be added to the direction vector - so if you set speed to 2 and the direction to 45° the instance will move up and right 2 pixels every game frame - but you can also click on the direction field and select either _Horizontal_ or _Vertical_ speed.

![Speed Action Options](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Movement/speed_vectors.png)Choosing either of these will set the speed _only_ for the horizontal or vertical vectors. Note that you can flag the value as being relative to the current speed, which will add or subtract the value from the actual speed of the instance, and you can also supply negative numbers, which will make it move in the opposite direction to the current direction value.

#### Action Syntax:

![Set Speed Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Movement/a_Movement_Set_Speed.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| speed | The speed value (can be negative). |

#### Example:

![Set Speed Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Movement/e_Movement_Set_Direction_Fixed.png)The above action block code checks for a left mouse button press on the instance and if one is detected it sets the direction to down (270°) and the speed to 5.