---
title: "path_positionprevious"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Paths/Path_Variables/path_positionprevious.htm"
converted: "2025-09-14T03:59:34.973Z"
---

# path\_positionprevious

This built-in variable can be used to get or to set the position of an instance along its current path in the previous step, and is a normalised value between 0 and 1, i.e.: 0 is the start position of the path and 1 would be the end position. It is similar to the [xprevious](../../Instances/Instance_Variables/xprevious.md) and [yprevious](../../Instances/Instance_Variables/yprevious.md) variables in how it works, only it is specific for paths. It can be useful for things like temporarily stopping a path follower if something is in the way (see the example code below).

#### Syntax:

path\_positionprevious

#### Returns:

[Real](../../../../GML_Overview/Data_Types.md)

#### Example:

var \_x = x + lengthdir\_x(16, direction);
var \_y = y + lengthdir\_y(16, direction);
if (collision\_circle(\_x, \_y, 16, obj\_player, false, true))
{
    path\_position = path\_positionprevious;
}

The above code checks an area in front of the instance for a collision with an instance of object obj\_player and if there is one, it sets the instance back to the previous position it occupied on the current path, as assigned by the function [path\_start](../path_start.md).