---
title: "move_towards_point"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Movement_And_Collisions/Movement/move_towards_point.htm"
converted: "2025-09-14T04:00:03.787Z"
---

# move\_towards\_point

This function simply tells the instance running the code to move towards a set point at a set speed. Bear in mind that it is up to you to tell it what to do once it gets there, as it won't just stop by itself. This means that you can get a "vibrating" instance as it moves (for example) 3 pixels forward, overshoots the x/y target position by 2, then moves 3 pixels back again, overshooting the target point by one and so on... There are a number of ways that this can be avoided, for example using [distance\_to\_point()](../../Maths_And_Numbers/Angles_And_Distance/distance_to_point.md) to see how far from the specified location the instance is before moving.

**NOTE**: this function sets the speed of the instance, so even if you stop using this code, the instance will keep moving in the previous direction, so it is necessary to set the instance [speed](../../Asset_Management/Instances/Instance_Variables/speed.md) to 0 if you wish it to stop. See the code example below.

#### Syntax:

move\_towards\_point( x, y, sp );

| Argument | Type | Description |
| --- | --- | --- |
| x | Real | The x position of the point to move towards. |
| y | Real | The y position of the point to move towards. |
| sp | Real | The speed to move at in pixels per step. |

#### Returns:

N/A

#### Example:

if (point\_distance(x, y, target.x, target.y) > 5)
{
    move\_towards\_point(target.x, target.y, 5);
}
else speed = 0;

The above code will move the instance towards the position of the instance indexed in the variable "target" at a speed of 5 pixels per step. Once it reaches that position the speed is set to 0.