---
title: "physics_apply_angular_impulse"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Physics/Forces/physics_apply_angular_impulse.htm"
converted: "2025-09-14T04:00:05.294Z"
---

# physics\_apply\_angular\_impulse

This function will give an angular impulse to a physics enabled instance. This impulse will set the angular rotation by the amount given, ignoring the current torque, essentially setting the amount of "spin" that a fixture has. If you wish to apply an angular force to an instance using torque, then you should be using the function [physics\_apply\_torque()](physics_apply_torque.md).

#### Syntax:

physics\_apply\_angular\_impulse(impulse)

| Argument | Type | Description |
| --- | --- | --- |
| impulse | Real | The impulse (in Newton metres) to be applied |

#### Returns:

N/A

#### Example:

if (keyboard\_check(vk\_up))
{
    physics\_apply\_angular\_impulse(10);
}

The code above will give the physics enabled fixture an angular impulse if a key is pressed.