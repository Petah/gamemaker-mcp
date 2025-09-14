---
title: "path_get_speed"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Paths/path_get_speed.htm"
converted: "2025-09-14T03:59:35.171Z"
---

# path\_get\_speed

This function returns the speed factor of any given position on a path. The position should be a value between 0 and 1 (you can use [path\_position](Path_Variables/path_position.md), for example, if you need the current position of the instance) with 0 being the start position and 1 being the end. The value returned will be the factor by which the actual [path\_speed](Path_Variables/path_speed.md) is being set. For example, on a path with only two points, 0 and 1, where the point 0 speed factor is 100 and point 1 speed factor is 0, the function path\_get\_speed(path, 0.5) will return 50.

#### Syntax:

path\_get\_speed(ind, pos);

| Argument | Type | Description |
| --- | --- | --- |
| index | Path Asset | The index of the path to check. |
| pos | Real | How far through the path to check. Between 0 (start) and 1 (end), can be decimal. |

#### Returns:

[Real](../../../GML_Overview/Data_Types.md)

#### Example:

speed = path\_get\_speed(pth\_Patrol, 0.5) / 20;

This will set the calling instance's speed to the speed factor of the point at exactly halfway through the given path, divided by 20. So if the speed factor found is the default 100, it will set the speed of the calling instance to 5.