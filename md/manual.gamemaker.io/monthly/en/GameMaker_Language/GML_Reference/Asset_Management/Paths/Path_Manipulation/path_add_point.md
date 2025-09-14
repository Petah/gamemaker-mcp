---
title: "path_add_point"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Paths/Path_Manipulation/path_add_point.htm"
converted: "2025-09-14T03:59:34.573Z"
---

# path\_add\_point

With this function you can add a point to the specified path and set its speed factor. This point is added onto the end of the path, irrespective of the position of the point, and the factor is equal to the percentage of [path\_speed](../Path_Variables/path_speed.md) that the following instance actually goes at when it reaches this point in the path. If you wish to place a path point at some other position that is not the end, you should use [path\_insert\_point()](path_insert_point.md).

If used on a path from the Asset Browser, note that **the function will change the actual asset**, and so will permanently affect how the path is used by all instances in the game from the moment the function is used until the end of the game. If this is not what you require, then you should use a function like [path\_duplicate()](path_duplicate.md) to create a copy of the path first, then call this function on the duplicated asset (don't forget to call [path\_delete()](path_delete.md) on the asset when it is no longer required).

#### Syntax:

path\_add\_point(index, x, y, speed);

| Argument | Type | Description |
| --- | --- | --- |
| index | Path Asset | The index of the path to add the point to. |
| x | Real | The x coordinate of the new point. |
| y | Real | The y coordinate of the new point. |
| speed | Real | The speed factor of the point (default value is 100). |

#### Returns:

N/A

#### Example:

my\_path = path\_add();
for (var i = 0; i <= 360; i += 36;)
{
    path\_add\_point(my\_path, x + lengthdir\_x(50, i), y + lengthdir\_y(50, i), 100);
}

The above code will create a circular path around the x/y position of the instance running the code.