---
title: "direction"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Instances/Instance_Variables/direction.htm"
converted: "2025-09-14T03:59:33.490Z"
---

# direction

All instances in GameMaker have certain "built-in" properties that you can use and set to govern how they look and behave. direction is one of those properties and can be used to set the direction of movement of the instance when it has a [speed](speed.md) other than 0. Note that directions in GameMaker are usually calculated as 0° being right, 90° being up, 180° being left and 270° being down, and that the [gravity](gravity.md) and [gravity\_direction](gravity_direction.md) variables can modify the direction value when they are used in your games.

#### Syntax:

direction

#### Returns:

[Real](../../../../GML_Overview/Data_Types.md) (single precision floating point value)

#### Example:

if (keyboard\_check(vk\_left)) direction += 5;
if (keyboard\_check(vk\_right)) direction -= 5;

The above code will change the direction of movement of the instance based on which key (left or right) is pressed.