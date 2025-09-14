---
title: "speed"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Instances/Instance_Variables/speed.htm"
converted: "2025-09-14T03:59:33.617Z"
---

# speed

All instances in GameMaker have certain "built-in" properties that you can use and set to govern how they look and behave. speed is one of those properties and defines how many pixels the instance will move every step. Unlike [hspeed](hspeed.md) and [vspeed](vspeed.md), speed has no direction associated with it as this is governed by the [direction](direction.md) value of the instance, but it can have a negative value, in which case the instance will travel in the opposite direction to that set by the direction function (ie: direction - 180°). Note that setting the speed and/or the direction, will also modify the values of the hspeed and vspeed variables, and that [gravity](gravity.md), [gravity\_direction](gravity_direction.md) and [friction](friction.md) can all modify the value of this variable when they are used in your games.

#### Syntax:

speed

#### Returns:

[Real](../../../../GML_Overview/Data_Types.md) (single precision floating point value)

#### Example:

if (keyboard\_check(vk\_up)) speed = 2;
if (keyboard\_check(vk\_left)) direction += 5;
if (keyboard\_check(vk\_right)) direction -= 5;

The above code will use the arrow keys to set the speed and direction of the instance.