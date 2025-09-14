---
title: "path_get_point_y"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Paths/path_get_point_y.htm"
converted: "2025-09-14T03:59:35.146Z"
---

# path\_get\_point\_y

This function will return the y position (in room coordinates) of the point that you input for the path that you index. If the point is outside of the range of the path (ie: a path has 8 points and you ask for the y position of point 10) then a value of 0 will be returned.

#### Syntax:

path\_get\_point\_y(index, n);

| Argument | Type | Description |
| --- | --- | --- |
| index | Path Asset | The index of the path to check. |
| n | Real | The point number to check. |

#### Returns:

[Real](../../../GML_Overview/Data_Types.md)

#### Example:

if (path\_position == 1)
{
    var \_num = path\_get\_number(pth\_Patrol);
    var \_pos = floor(random(\_num));
    x = path\_get\_point\_x(pth\_Patrol, \_pos);
    y = path\_get\_point\_y(pth\_Patrol, \_pos);
    path\_position = (1 / \_num) \* \_pos;
}

The above code will check to see if an instance is at the end of a path. If it is it will then choose a random point on the path and move the instance to that point.