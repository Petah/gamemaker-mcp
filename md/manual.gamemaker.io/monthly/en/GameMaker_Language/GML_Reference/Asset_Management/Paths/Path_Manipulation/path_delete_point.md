---
title: "path_delete_point"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Paths/Path_Manipulation/path_delete_point.htm"
converted: "2025-09-14T03:59:34.673Z"
---

# path\_delete\_point

With this function you can remove a point from the specified path. Path points are numbered from 0 so the first point is always the 0th point and the last path point will be [path\_get\_number()](../path_get_number.md) - 1. If you call this function on a path asset, **then the removal of the point will be permanent** and all instances assigned the path in the future will be missing the point that was removed. If this is not what you require, then you should use a function like [path\_duplicate()](path_duplicate.md) to create a copy of the path first, then call this function on the duplicated asset (don't forget to call [path\_delete()](path_delete.md) on the asset when it is no longer required).

#### Syntax:

path\_delete\_point(ind, n);

| Argument | Type | Description |
| --- | --- | --- |
| index | Path Asset | The index of the path to delete a point from. |
| n | Real | The defining point to delete. |

#### Returns:

N/A

#### Example:

var \_col = true;
while (\_col)
{
    var \_num = path\_get\_number(mypath) - 1;
    if (\_num > 2)
    {
        var \_x1 = path\_get\_point\_x(my\_path, \_num);
        var \_y1 = path\_get\_point\_y(my\_path, \_num);
        var \_x2 = path\_get\_point\_x(my\_path, \_num -1);
        var \_y2 = path\_get\_point\_y(my\_path, \_num -1);
        if (collision\_line(\_x1, \_y1, \_x2, \_y2, obj\_Wall, true, false))
        {
            path\_delete\_point(mypath, \_num);
            \_num -= 1;
        }
        else \_col = false;
    }
    else \_col = false;
}

The above code generates a loop that checks the points on a backwards from the end for a collision with the given object. If a collision is found, a path point is deleted, until there is no collision, or the path is only 2 points long.