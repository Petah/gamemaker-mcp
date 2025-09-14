---
title: "x"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Instances/Instance_Variables/x.htm"
converted: "2025-09-14T03:59:33.656Z"
---

# x

The x value of an instance is the horizontal position in the current room, measured in pixels. This value can be either 0, positive or minus, where 0 is the left hand side of the room and moving right increases x, moving left decreases x (a negative value for x means that the instance has gone outside the left side of the room). You can even give x a real value like 12.345, but as you cannot get .345 of a pixel, the instance may not appear to have moved, although these values will be maintained and used internally by GameMaker and are perfectly valid.

By setting the x (and y) values you can make the object jump around the room to the position of your choice, or you can add and subtract to them by smaller amounts to give the illusion of movement without actually using the built-in [speed](speed.md) and [direction](direction.md) functions. This should be taken into account when making your games as often one type of movement lends itself to a particular style of game-play more than another.

#### Syntax:

x;

#### Returns:

[Real](../../../../GML_Overview/Data_Types.md) (single precision floating point value)

#### Example:

if (keyboard\_check(vk\_left)) x += 5;
if (keyboard\_check(vk\_right)) x -= 5;

The above code will use the arrow keys to add or subtract to the x position and so create the illusion of movement.