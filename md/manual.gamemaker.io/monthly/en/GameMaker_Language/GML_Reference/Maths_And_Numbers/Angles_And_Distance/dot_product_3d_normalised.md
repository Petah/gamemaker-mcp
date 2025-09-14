---
title: "dot_product_3d_normalised"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Maths_And_Numbers/Angles_And_Distance/dot_product_3d_normalised.htm"
converted: "2025-09-14T04:00:00.800Z"
---

# dot\_product\_3d\_normalised

The dot product is a value expressing the angular relationship between two vectors and is found by taking two vectors, multiplying them together and then adding the results. The name "dot product" is derived from the centered dot "·" that is often used to designate this operation (the alternative name "scalar product" emphasizes the scalar rather than vector nature of the result).

The actual mathematical formula can be written like this:

![Dot Product formula](../../../../assets/Images/Scripting_Reference/GML/Reference/Maths/dot_product_image.png)

In 2D, the dot product of vectors a\[x1,y1\] and b\[x2,y2\] is x1x2 + y1y2, so in 3D, the dot product of vectors a\[x1,y1,z1\] and b\[x1,y1,z1\] is x1x2 + y1y2 + z1z2. So, the dot\_product\_3d in GameMaker is calculated as:

a · b = (x1\*x2) + (y1\*y2) + (z1\*z2);

What about the _normalised_ dot product? The normalised dot product has been corrected in such a way as to bring the return value into the range of -1 and 1 (see [Vectors](../../../../../../../Additional_Information/Vectors.md) for more detailed information), which is exceptionally useful in many circumstances, particularly when dealing with lighting and other 3D functions.

#### **Syntax:**

dot\_product\_3d\_normalised(x1, y1, z1, x2, y2, z2)

| Argument | Type | Description |
| --- | --- | --- |
| x1 | Real | The x coordinate of the first vector. |
| y1 | Real | The y coordinate of the first vector. |
| z1 | Real | The z coordinate of the first vector. |
| x2 | Real | The x coordinate of the second vector. |
| y2 | Real | The y coordinate of the second vector. |
| z2 | Real | The z coordinate of the second vector. |

#### Returns:

[Real](../../../../../../../GameMaker_Language/GML_Overview/Data_Types.md)

#### Example:

var x1, y1, x2, y2;
x1 = 0;
y1 = 1;
z1 = 0;
x2 = o\_Player.x - x;
y2 = o\_Player.y - y;
z2 = o\_Player.z - z;
if dot\_product\_3d\_normalised(x1, y1, z1, x2, y2, z2) > 0 above=true else above=false;

The above code creates a vector normal along the instances y (up) axis, and then gets the vector of the player object "o\_Player" to itself. Finally it calculates the dot product of these two vectors and if it is greater tan 0 it sets the variable "above" to true, and if it is less than or equal to 0 it sets it to "false".