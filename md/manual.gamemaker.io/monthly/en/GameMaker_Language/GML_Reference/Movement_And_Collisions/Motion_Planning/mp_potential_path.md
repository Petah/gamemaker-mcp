---
title: "mp_potential_path"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Movement_And_Collisions/Motion_Planning/mp_potential_path.htm"
converted: "2025-09-14T04:00:03.472Z"
---

# mp\_potential\_path

This function computes a path for the instance from its current position _and orientation_ to the position specified by the xgoal,ygoal arguments. It uses the indicated step size while trying to avoid collision with either all instances or only those flagged as solid. Like in the function [mp\_potential\_step()](mp_potential_step.md) it uses potential field steps to accomplish this and the manner in which it does this can be modified through the function [mp\_potential\_settings()](mp_potential_settings.md). The indicated path must already exist and it will be overwritten by the new path. The function will return whether a path was found (true) or not (false).

To avoid the function continuing to compute forever you need to provide a factor of larger than 1 - the function will stop and report failure if it cannot find a path shorter than this factor times the distance between start and goal. A factor of 4 is normally good enough but if you expect long detours you might make it longer. If it fails a path is still created that runs in the approximate direction of the goal but it will not reach it.

**NOTE**: This function does not move the instance. It sets a path only, and you must use the [Path](../../Asset_Management/Paths/Paths.md) functions for movement.

#### Syntax:

mp\_potential\_path(path, xgoal, ygoal, stepsize, factor, checkall)

| Argument | Type | Description |
| --- | --- | --- |
| path | Path Asset | The path that is to be used by the function |
| xgoal | Real | The target x position. |
| ygoal | Real | The target y position. |
| stepsize | Real | The speed the instance moves in pixels per step. |
| factor | Real | This number is used to prevent an infinite loop. It should be larger than 1. See the function description for more information. |
| checkall | Boolean | Whether to check all instances (true) or just solid ones (false). |

#### Returns:

[Boolean](../../../GML_Overview/Data_Types.md)

#### Example:

path = path\_add();
mp\_potential\_path(path, obj\_Player.x, obj\_Player.y, 3, 4, 0);
path\_start(path, 3, 0, 0);

The above code creates a new path resource and stores its index in the variable "path". It then generates a path using mp\_potential\_path between the object with this code and the object "obj\_Player", checking for collisions with all instances in the room. Finally it starts the object along that path, even if the function has failed to return a complete route to the "obj\_Player".