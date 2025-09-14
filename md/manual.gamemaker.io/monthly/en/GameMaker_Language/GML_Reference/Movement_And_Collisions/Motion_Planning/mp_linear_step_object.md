---
title: "mp_linear_step_object"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Movement_And_Collisions/Motion_Planning/mp_linear_step_object.htm"
converted: "2025-09-14T04:00:03.457Z"
---

# mp\_linear\_step\_object

With this function you tell an instance to take a "step" towards a specific point, specified by the xgoal and ygoal values. The size of the step (which is how many pixels the instance should move each step) is indicated by the stepsize, and if the instance is already at the position it will stop and not move any further, contrary to other, simpler functions like [move\_towards\_point()](../../../../../../../GameMaker_Language/GML_Reference/Movement_And_Collisions/Movement/move_towards_point.md). The stepsize is also the distance "ahead" that the object will check each step for a collision, and you can choose whether the instance stops at a collision with an object or instance of your choice.

#### Syntax:

mp\_linear\_step\_object(xgoal, ygoal, stepsize, obj);

| Argument | Type | Description |
| --- | --- | --- |
| xgoal | Real | The target x position. |
| ygoal | Real | The target y position. |
| stepsize | Real | The speed the instance moves in pixels per step. |
| obj | Object Asset or Object Instance | The object that is to block the path. Can be an object index, an instance id or the special keyword, all |

#### Returns:

[Boolean](../../../GML_Overview/Data_Types.md)

#### Example:

if (mp\_linear\_step\_object(mouse\_x, mouse\_y, 5, obj\_Wall))
{
    instance\_create\_layer(x, y, "Effects", obj\_Explosion);
    instance\_destroy();
}

The above code will make the object move towards the mouse at a speed of 5 pixels per step, only checking for collisions with the object "obj\_Wall". Once it reaches the mouse position it will create an object "obj\_Explosion" and destroy itself.