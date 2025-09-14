---
title: "mp_linear_path_object"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Movement_And_Collisions/Motion_Planning/mp_linear_path_object.htm"
converted: "2025-09-14T04:00:03.423Z"
---

# mp\_linear\_path\_object

This function computes a straight line path from the current instance position to the point specified by the "xgoal" and "ygoal" values. It uses the indicated step size, the same as in the function [mp\_linear\_step()](mp_linear_step.md). The indicated path must already exist and will be overwritten by the new path and the function will return if a complete path was found (true) or not (false). A full path is only found there was no collision with the specified object or instance and if false is returned then a path is still generated, but it will only run up to the position where the path was blocked.

**NOTE**: This function does not move the instance. It sets a path only, and you must use the [Path](../../Asset_Management/Paths/Paths.md) functions for movement.

#### Syntax:

mp\_linear\_path\_object(path, xgoal, ygoal, stepsize, obj);

| Argument | Type | Description |
| --- | --- | --- |
| path | Path Asset | The path to be used |
| xgoal | Real | The target x position. |
| ygoal | Real | The target y position. |
| stepsize | Real | The speed the instance moves in pixels per step. |
| obj | Object Asset or Object Instance | The object that is to block the path. Can be an object index, an instance id or the special keyword ,all |

#### Returns:

[Boolean](../../../../../../../GameMaker_Language/GML_Overview/Data_Types.md)

#### Example:

if (mp\_linear\_path\_object(path, mouse\_x, mouse\_y, 4, obj\_Wall))
{
    path\_start(path, 4, 0, 0);
}

The above code checks for a collision with "obj\_Wall" along the path between the object running the code and the x/y position of the mouse. If there is no collision and the complete path is generated then it will start the object along the path generated.