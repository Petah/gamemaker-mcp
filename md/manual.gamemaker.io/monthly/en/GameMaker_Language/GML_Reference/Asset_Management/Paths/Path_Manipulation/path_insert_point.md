---
title: "path_insert_point"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Paths/Path_Manipulation/path_insert_point.htm"
converted: "2025-09-14T03:59:34.746Z"
---

# path\_insert\_point

With this function you can insert a new point into a path (the path can have been created in the path editor or through code using [path\_add()](path_add.md)). The point will be added into the path before the point "n" that is specified in the function.

#### Syntax:

path\_insert\_point(index, n, x, y, speed);

| Argument | Type | Description |
| --- | --- | --- |
| index | Path Asset | The index of the path to insert the point into. |
| n | Real | The defining point to insert the new point BEFORE. |
| x | Real | The x coordinate (relative to the path) of the new point. |
| y | Real | The y coordinate (relative to the path) of the new point. |
| speed | Real | The speed factor of the point. |

#### Returns:

N/A

#### Example:

path\_insert\_point(mypath, 0, 50, 50, 100);

This will insert a point at the very beginning of the path indexed in the variable "mypath", at (50,50), with a speed factor of 100%.