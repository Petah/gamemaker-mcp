---
title: "path_change_point"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Paths/Path_Manipulation/path_change_point.htm"
converted: "2025-09-14T03:59:34.621Z"
---

# path\_change\_point

With this function you can change the position and/or the speed factor of any point previously defined for a path (the path can have been created in the path editor or through code using [path\_add()](path_add.md)). If used on a path from the Asset Browser, note that **the function will change the actual asset**, and so will permanently affect how the path is used by all instances in the game from the moment the function is used until the end of the game. If this is not what you require, then you should use a function like [path\_duplicate()](path_duplicate.md) to create a copy of the path first, then call this function on the duplicated asset (don't forget to call [path\_delete()](path_delete.md) on the asset when it is no longer required).

#### Syntax:

path\_change\_point(index, n, x, y, speed);

| Argument | Type | Description |
| --- | --- | --- |
| index | Path Asset | The index of the path to change a point of. |
| n | Real | The defining point to change the attributes of. |
| x | Real | The new x coordinate (relative to the path) of the point. |
| y | Real | The new y coordinate (relative to the path) of the point. |
| speed | Real | The new speed factor of the point. |

#### Returns:

N/A

#### Example:

for (var i = 0; i < path\_get\_number(path0); ++i;)
{
    var px = path\_get\_point\_x(pth\_Patrol, i) + 64 - random(128);
    var py = path\_get\_point\_y(pth\_Patrol, i) + 64 - random(128);
    path\_change\_point(pth\_Patrol, i, px, py, 100);
}

The above code loops through all the points in the path indexed as "path0" and re-positions all the points to a random position within an area of 128x128 pixels.