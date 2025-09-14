---
title: "mp_potential_step"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Movement_And_Collisions/Motion_Planning/mp_potential_step.htm"
converted: "2025-09-14T04:00:03.522Z"
---

# mp\_potential\_step

This function lets the instance take a step towards a particular position defined by xgoal/ygoal, all the while trying to avoid obstacles. When the instance would run into a solid instance (or any instance when checkall is true) it will change the direction of motion to try to avoid that instance and move around it. This approach is not guaranteed to work but in most easy cases it will effectively move the instance towards the goal. The function returns whether the goal was reached or not.

#### Syntax:

mp\_potential\_step(xgoal, ygoal, stepsize, checkall)

| Argument | Type | Description |
| --- | --- | --- |
| xgoal | Real | The target x position. |
| ygoal | Real | The target y position. |
| stepsize | Real | The speed the instance moves in pixels per step. |
| checkall | Boolean | Whether to check all instances (true) or just solid ones (false). |

#### Returns:

[Boolean](../../../GML_Overview/Data_Types.md)

#### Example:

if (instance\_exists(obj\_Enemy))
{
    var inst;
    inst = instance\_nearest(x, y, obj\_Enemy);
    mp\_potential\_step(inst.x, inst.y, 5, false);
}

The above code first checks to see if there are any instances of "obj\_Enemy" in the room. If there are it then finds the nearest one and stores its id in a variable. This variable is then used to tell mp\_potential\_step to move the instance with the code towards the x/y position of the object that was found at a speed of 5 pixels per step while avoiding only instances flagged as solid.