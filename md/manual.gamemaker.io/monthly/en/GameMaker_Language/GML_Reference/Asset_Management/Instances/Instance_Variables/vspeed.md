---
title: "vspeed"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Instances/Instance_Variables/vspeed.htm"
converted: "2025-09-14T03:59:33.645Z"
---

# vspeed

vspeed is one of the "built-in" properties that all instances have and defines the vertical movement speed (along the y-axis) of the instance in pixels per step. So, a vspeed of 3 means 3 pixels of movement to the bottom (+y) every step, and a vspeed of -3 would mean 3 pixels of movement to the top (-y) every step.

Note that if you set the [speed](speed.md) and/or [direction](direction.md) variables then the vspeed value will be updated automatically to reflect these changes, and likewise, changing the vspeed value will also affect the speed and direction values. Also note that [gravity](gravity.md), [gravity\_direction](gravity_direction.md) and [friction](friction.md) can all modify the value of this variable when they are used in your games.

#### Syntax:

vspeed;

#### Returns:

[Real](../../../../GML_Overview/Data_Types.md) (single precision floating point value)

#### Example:

if (keyboard\_check(vk\_up)) vspeed = -5;
if (keyboard\_check(vk\_down)) vspeed = 5;

The above code will change the vertical speed depending on which keys are pressed.