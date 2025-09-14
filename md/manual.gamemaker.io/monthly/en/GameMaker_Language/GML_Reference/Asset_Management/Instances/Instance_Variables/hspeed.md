---
title: "hspeed"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Instances/Instance_Variables/hspeed.htm"
converted: "2025-09-14T03:59:33.537Z"
---

# hspeed

hspeed is one of the "built-in" properties that all instances have and defines the horizontal movement speed (along the x-axis) of the instance in pixels per step. So, an hspeed of 3 means 3 pixels of movement to the right (+x) every step, and an hspeed of -3 would mean 3 pixels of movement to the left (-x) every step.

Note that if you set the [speed](speed.md) and/or [direction](direction.md) variables then the hspeed value will be updated automatically to reflect these changes, and likewise, changing the hspeed value will also affect the speed and direction values. Also note that [gravity](gravity.md), [gravity\_direction](gravity_direction.md) and [friction](friction.md) can all modify the value of this variable when they are used in your games.

#### Syntax:

hspeed;

#### Returns:

[Real](../../../../GML_Overview/Data_Types.md) (single precision floating point value)

#### Example:

if (keyboard\_check(vk\_left)) hspeed = -5;
if (keyboard\_check(vk\_right)) hspeed = 5;

The above code will change the horizontal speed depending on which keys are pressed.