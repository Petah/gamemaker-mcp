---
title: "path_get_point_speed"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Paths/path_get_point_speed.htm"
converted: "2025-09-14T03:59:35.116Z"
---

# path\_get\_point\_speed

With this function you can get the speed of the point (as defined in the [Path Editor](../../../../The_Asset_Editors/Paths.md) or when you dynamically add a path point using [path\_add\_point()](Path_Manipulation/path_add_point.md)) expressed as a percentage. So, if you have a path point set to 50 in the path editor, this function would return 50 when used.

#### Syntax:

path\_get\_point\_speed(index, n);

| Argument | Type | Description |
| --- | --- | --- |
| index | Path Asset | The index of the path to check. |
| n | Real | The point number to check. |

#### Returns:

[Real](../../../GML_Overview/Data_Types.md)

#### Example:

if (path\_get\_point\_speed(pth\_Patrol, 0) != 100)
{
    var \_px = path\_get\_point\_x(pth\_Patrol, 0);
    var \_py = path\_get\_point\_x(pth\_Patrol, 0);
    path\_change\_point(pth\_Patrol, 0, \_px, \_py, 100);
}

The above code checks the path point "0" of the path indexed by "pth\_Patrol" to see if the speed is not equal to 100. If it is not then it sets the speed of that point to 100.