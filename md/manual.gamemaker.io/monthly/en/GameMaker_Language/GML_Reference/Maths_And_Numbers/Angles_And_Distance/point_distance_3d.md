---
title: "point_distance_3d"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Maths_And_Numbers/Angles_And_Distance/point_distance_3d.htm"
converted: "2025-09-14T04:00:00.929Z"
---

# point\_distance\_3d

This function takes the supplied components of the vector and returns the length (distance) of the vector. It works in exactly the same way as [point\_distance()](point_distance.md) but with the addition of factoring in the z value (depth) for use in 3D space.

#### **Syntax:**

point\_distance\_3d(x1, y1, z1, x2, y2, z2);

| Argument | Type | Description |
| --- | --- | --- |
| x1 | Real | The x coordinate of the first component of the vector |
| y1 | Real | The y coordinate of the first component of the vector |
| z1 | Real | The z coordinate of the first component of the vector |
| x2 | Real | The x coordinate of the second component of the vector |
| y2 | Real | The y coordinate of the second component of the vector |
| z2 | Real | The z coordinate of the second component of the vector |

#### Returns:

[Real](../../../GML_Overview/Data_Types.md)

#### Example:

var inst, ex, ey, ez;
inst = instance\_nearest(x, y, enemy);
if (instance\_exists(inst))
{
    ex = inst.x;
    ey = inst.y;
    ez = inst.z;
    if (point\_distance\_3d(x, y, z, ex, ey, ez) < 200)
    {
        instance\_create\_layer(x, y, "Bullets", obj\_Missile)
    }
}

The above code will get the x and y and z coordinates of the nearest enemy and then use them to check the distance (length) of the vector formed by them and the player coordinates. If the value is less than 200, the player object will create an instance of "obj\_Missile".