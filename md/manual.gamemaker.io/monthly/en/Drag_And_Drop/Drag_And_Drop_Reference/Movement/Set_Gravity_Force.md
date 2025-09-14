---
title: "Set Gravity Force"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Movement/Set_Gravity_Force.htm"
converted: "2025-09-14T03:59:26.904Z"
---

# ![Set Gravity Force Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Movement/i_Movement_Set_Gravity_Force.png) Set Gravity Force

This action is used to set the force of gravity acting on an instance. Each instance can have a different gravity force (and direction) independently of all others. The force applied is a value in pixels per game frame, and is cumulative, ie: it is added on each step, so if you have a speed of 2 and a gravity of 1, speed will increment by 1 each step, meaning that normally you'll want very low values here. Note that you can input negative values for gravity and the instance will be "pulled" in the opposite direction to the gravity direction.

#### Action Syntax:

![Set Gravity Force Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Movement/a_Movement_Set_Gravity_Force.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| force | The gravity force to apply (can be negative) |

#### Example:

![Set Gravity Force Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Movement/e_Movement_Set_Gravity_Direction.png)The above action block code sets various instance properties related to movement: gravity direction is set to down (270°), gravity force is set to 0.05, and friction is set to 0.2.