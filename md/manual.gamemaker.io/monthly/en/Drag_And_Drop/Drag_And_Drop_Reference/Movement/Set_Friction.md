---
title: "Set Friction"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Movement/Set_Friction.htm"
converted: "2025-09-14T03:59:26.860Z"
---

# ![Set Friction Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Movement/i_Movement_Set_Friction.png) Set Friction

This action is used to set the "friction" for the instance. Friction simply means that a specific amount will be deducted from the speed vector each game frame, where you specify the amount to deduct. Usually smaller values work best, like 0.2, but the actual amount will depend on the setup of your project. If you set the relative flag, then the amount given will be added to the current friction value instead of setting it.

#### Action Syntax:

![Set Friction Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Movement/a_Movement_Set_Friction.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| friction | The friction to apply (positive values only) |

#### Example:

![Set Friction Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Movement/e_Movement_Set_Gravity_Direction.png)The above action block code sets various instance properties related to movement: gravity direction is set to down (270°), gravity force is set to 0.05, and friction is set to 0.2.