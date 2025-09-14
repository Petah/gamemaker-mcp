---
title: "mp_linear_path"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Movement_And_Collisions/Motion_Planning/mp_linear_path.htm"
converted: "2025-09-14T04:00:03.408Z"
---

# mp\_linear\_path

This function computes a straight line path from the current instance position to the point specified by the "xgoal" and "ygoal" values. It uses the indicated step size, the same as in the function [mp\_linear\_step()](mp_linear_step.md). The indicated path must already exist and will be overwritten by the new path and the function will return if a complete path was found (true) or not (false). If false is returned then a path is still generated, but it will only run up to the position where the path was blocked.

**NOTE**: This function does not move the instance. It sets a path only, and you must use the [Path](../../Asset_Management/Paths/Paths.md) functions for movement.

#### Syntax:

mp\_linear\_path(path, xgoal, ygoal, stepsize, checkall);

| Argument | Type | Description |
| --- | --- | --- |
| path | Path Asset | The path to be used. |
| xgoal | Real | The target x position. |
| ygoal | Real | The target y position. |
| stepsize | Real | The speed the instance moves in pixels per step. |
| checkall | Boolean | Whether to check for collisions with all instances (true) or just solid ones (false). |

#### Returns:

[Boolean](../../../GML_Overview/Data_Types.md)

#### Example:

if (mp\_linear\_path(path, obj\_Player.x, obj\_Player.y, 2, 0))
{
    path\_start(path, 2, 0, 0);
}

This gets the object to check and see if there is a linear path from its current position to the position of "obj\_Player". If there is then it starts the path.