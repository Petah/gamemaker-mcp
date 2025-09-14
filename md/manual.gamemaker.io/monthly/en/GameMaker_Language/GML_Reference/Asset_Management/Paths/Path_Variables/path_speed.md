---
title: "path_speed"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Paths/Path_Variables/path_speed.htm"
converted: "2025-09-14T03:59:34.996Z"
---

# path\_speed

You can use this built-in variable to get or to set the speed of a path after it has been started using the function [path\_start](../path_start.md). You can use negative values to signify that the instance should follow the path in reverse.

#### Syntax:

path\_speed

#### Returns:

[Real](../../../../GML_Overview/Data_Types.md)

#### Example:

path\_speed = -1 + random(2);

The above code will set the instance to travel the path at a random speed between -1 and 1.