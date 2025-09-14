---
title: "lengthdir_x"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Maths_And_Numbers/Angles_And_Distance/lengthdir_x.htm"
converted: "2025-09-14T04:00:00.865Z"
---

# lengthdir\_x

This function is used to get the **x** component of a position "len" pixels from the starting point and in direction "dir". If you imagine a circle around your instance, and then imagine a point anywhere on that circle, to move to that point we need to move the object so many pixels in that direction... so this function (when used with [lengthdir\_y()](lengthdir_y.md)) gets the position of that point on the circle to be used in code by the instance. See the image below for details:

![Lengthdir_y example](../../../../assets/Images/Scripting_Reference/GML/Reference/Maths/Lengthdir_Image.png)

#### Syntax:

lengthdir\_x(len, dir);

| Argument | Type | Description |
| --- | --- | --- |
| len | Real | The length away of the point to return. |
| dir | Real | The direction of the point to return. |

#### Returns:

[Real](../../../GML_Overview/Data_Types.md)

#### Example:

var \_xx = x + lengthdir\_x(64, image\_angle);
var \_yy = y + lengthdir\_y(64, image\_angle);
instance\_create\_layer(\_xx, \_yy, "Bullets", obj\_bullet);

This will create a bullet instance at (\_xx, \_yy), which will be 64 pixels from the parent instance in the direction of the image angle.