---
title: "distance_to_object"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Maths_And_Numbers/Angles_And_Distance/distance_to_object.htm"
converted: "2025-09-14T04:00:00.727Z"
---

# distance\_to\_object

This function calculates the distance from the edge of the bounding box of the calling instance to the nearest edge of the nearest instance of the object specified. The object can be an object index or a specific instance ID as well as the [_keyword_](../../../../../../../GameMaker_Language/GML_Overview/Instance_Keywords.md) **other**, and the distance is returned in pixels. Note that if either of the objects have no sprite or no mask defined, the results will be incorrect.

#### **Syntax:**

distance\_to\_object(obj);

| Argument | Type | Description |
| --- | --- | --- |
| obj | Object Asset or Object Instance | The object to check for. |

#### Returns:

[Real](../../../../../../../GameMaker_Language/GML_Overview/Data_Types.md)

#### Example:

if (distance\_to\_object(obj\_Player) < range)
{
    canshoot = true;
}

The above code will check for the distance to the player object and if it is less than the value stored in the variable "range" the variable "canshoot" is set to true.