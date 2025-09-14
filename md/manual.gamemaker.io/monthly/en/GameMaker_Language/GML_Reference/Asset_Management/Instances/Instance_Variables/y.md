---
title: "y"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Instances/Instance_Variables/y.htm"
converted: "2025-09-14T03:59:33.696Z"
---

# y

The y value of an instance is the vertical position in the current room, measured in pixels. This value can be either 0, positive or minus, where 0 is the top of the room and moving down increases y, moving up decreases y (a negative value for y means that the instance has gone outside the top of the room). You can even give y a real value like 12.345, but as you cannot get .345 of a pixel, the instance may not appear to have moved, although these values will be maintained and used internally by GameMaker and are perfectly valid.

By setting the y (and x) values you can make the object jump around the room to the position of your choice, or you can add and subtract to them by smaller amounts to give the illusion of movement without actually using the built-in [speed](speed.md) and [direction](direction.md) functions. This should be taken into account when making your games as often one type of movement lends itself to a particular style of game-play more than another.

#### Syntax:

y;

#### Returns:

[Real](../../../../GML_Overview/Data_Types.md) (single precision floating point value)

#### Example:

if (keyboard\_check(vk\_down)) y += 5;
if (keyboard\_check(vk\_up)) y -= 5;

The above code will use the arrow keys to add or subtract to the y position and so create the illusion of movement.