---
title: "dot_product_3d"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Maths_And_Numbers/Angles_And_Distance/dot_product_3d.htm"
converted: "2025-09-14T04:00:00.783Z"
---

# dot\_product\_3d

The dot product is a value expressing the angular relationship between two vectors and is found by taking two vectors, multiplying them together and then adding the results. The name "dot product" is derived from the centered dot "·" that is often used to designate this operation (the alternative name "scalar product" emphasizes the scalar rather than vector nature of the result).

The actual mathematical formula can be written like this:

![Dot Product formula](../../../../assets/Images/Scripting_Reference/GML/Reference/Maths/dot_product_image.png)

In 2D, the dot product of vectors a\[x1,y1\] and b\[x2,y2\] is x1x2 + y1y2, so in 3D, the dot product of vectors a\[x1,y1,z1\] and b\[x1,y1,z1\] is x1x2 + y1y2 + z1z2. So, the dot\_product\_3d in GameMaker is calculated as:

a · b = (x1\*x2) + (y1\*y2) + (z1\*z2);

The curious thing about the dot product is the relationship it has to the angle formed by the input vectors which can be expressed as:

a · b = (length of a) \* (length of b) \* cos(angle)

That is to say, the dot product of two vectors will be equal to the cosine of the angle between those vectors, multiplied by the lengths of each of them. Here is an image to illustrate:

![Dot Product ilustration](../../../../assets/Images/Scripting_Reference/GML/Reference/Maths/dot_product_image_2.png)

**NOTE**: For more information on vectors, see [here](../../../../../../../Additional_Information/Vectors.md).

There are a few things that we can now state from any two vectors in relation to the result of their dot product:

-   If a and b are perpendicular (at 90 degrees to each other), the result of the dot product will be zero, because cos(ang) will be zero
-   If the angle between a and b are less than 90 degrees, the dot product will be positive (greater than zero), as cos(ang) will be positive
-   If the angle between a and b are greater than 90 degrees, the dot product will be negative (less than zero), as cos(ang) will be negative

So what does this mean for those of us that make games? Well, this mathematical relationship can be used in quite a few circumstances, but the best way to see it is to build an actual scenario and see for yourself what is going on. One of the simplest ways to do this is to generate a simple "height" check for an enemy in, say, a platform game so that the enemy will "see" the player if they are above the plane formed by the enemy _normal_ vector and the 3d floor.

![Dot product 3D example](../../../../assets/Images/Scripting_Reference/GML/Reference/Maths/dot_product_3d_image.png)Basically, we are getting the vector normal from the enemy perpendicular to the floor and then we are getting the vector of the player to the enemy. We will then get the dot\_product of these vectors, and if the result is positive the player is "above" the enemy floor plane and if it is negative he is below. The actual code to get this working is supplied in the example below.

#### **Syntax:**

dot\_product\_3d(x1, y1, z1, x2, y2, z2)

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
z2 = o\_Player.z - z; if dot\_product\_3d(x1, y1, z1, x2, y2, z2) > 0 above=true else above=false;

The above code creates a vector normal along the instances y (up) axis, and then gets the vector of the player object "o\_Player" to itself. Finally it calculates the dot product of these two vectors and if it is greater tan 0 it sets the variable "above" to true, and if it is less than or equal to 0 it sets it to "false".