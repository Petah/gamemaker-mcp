---
title: "motion_add"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Movement_And_Collisions/Movement/motion_add.htm"
converted: "2025-09-14T04:00:03.575Z"
---

# motion\_add

This function accelerates the instance with the given speed in the given direction.

This is the equivalent of calculating the [x component](../../Maths_And_Numbers/Angles_And_Distance/lengthdir_x.md) and [y component](../../Maths_And_Numbers/Angles_And_Distance/lengthdir_y.md) of the given speed in the given direction, and then adding them to [hspeed](../../Asset_Management/Instances/Instance_Variables/hspeed.md) and [vspeed](../../Asset_Management/Instances/Instance_Variables/vspeed.md) respectively.

If you wish to simply set a speed instead of accelerating gradually, use [motion\_set()](motion_set.md).

#### Syntax:

motion\_add(dir, speed);

| Argument | Type | Description |
| --- | --- | --- |
| dir | Real | The added direction. |
| speed | Real | The added speed. |

#### Returns:

N/A

#### Example:

var pdir;
pdir = point\_direction(other.x, other.y, x, y);
motion\_add(pdir, other.speed);
if speed > 8 speed = 8;

The above code would be called in the collision event with another object. It adds to the direction of motion and the speed of the instance a vector based on the position and speed of the other instance involved in the collision. It then limits the speed if it goes over 8 (pixels per step).