---
title: "point_distance"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Maths_And_Numbers/Angles_And_Distance/point_distance.htm"
converted: "2025-09-14T04:00:00.913Z"
---

# point\_distance

This function returns the length of a vector formed by the specified components \[x1,y1\] and \[x2,y2\]. For example, in the image below if we want to get the distance between the player ship position and the enemy position so that we can calculate if the enemy is close enough to shoot at then we would use this function (the exact code is in the example below the image):

![Point distance example](../../../../assets/Images/Scripting_Reference/GML/Reference/Maths/point_distance.png)

#### **Syntax:**

point\_distance(x1, y1, x2, y2);

| Argument | Type | Description |
| --- | --- | --- |
| x1 | Real | The x coordinate of the first component of the vector |
| y1 | Real | The y coordinate of the first component of the vector |
| x2 | Real | The x coordinate of the second component of the vector |
| y2 | Real | The y coordinate of the second component of the vector |

#### Returns:

[Real](../../../GML_Overview/Data_Types.md)

#### Example:

var ex, ey;
ex = instance\_nearest(x, y, enemy).x;
ey = instance\_nearest(x, y, enemy).y;
if (point\_distance(x, y, ex, ey) < 200)
{
    instance\_create\_layer(x, y, "Bullets", obj\_Missile)
}

The above code will get the x and y coordinates of the nearest enemy and then use them to check the distance (length) of the vector formed by them and the player coordinates. If the value is less than 200, the player object will create an instance of "obj\_Missile".