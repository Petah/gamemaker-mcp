---
title: "path_clear_points"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Paths/Path_Manipulation/path_clear_points.htm"
converted: "2025-09-14T03:59:34.638Z"
---

# path\_clear\_points

With this function you can remove all point definitions from a path, effectively making an "empty" path. This _does not_ delete the path, for that you should use [path\_delete()](path_delete.md), however it should be noted that **this function changes the actual path asset**, and so will permanently affect how the path is used by all instances in the game from the moment the function is used until the end of the game. If this is not what you require, then you should use a function like [path\_duplicate()](path_duplicate.md) to create a copy of the path first, then call this function on the duplicated asset (don't forget to call [path\_delete()](path_delete.md) on the asset when it is no longer required).

#### Syntax:

path\_clear\_points(index);

| Argument | Type | Description |
| --- | --- | --- |
| index | Path Asset | The index of the path to clear. |

#### Returns:

N/A

#### Example:

if (path\_get\_number(mypath) > 0)
{
    path\_clear\_points(mypath);
}

The above code checks to see if there are any points on the path indexed in the variable "mypath" and if there are, it clears the path.