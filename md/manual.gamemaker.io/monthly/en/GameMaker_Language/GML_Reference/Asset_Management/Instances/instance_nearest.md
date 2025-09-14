---
title: "instance_nearest"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Instances/instance_nearest.htm"
converted: "2025-09-14T03:59:33.966Z"
---

# instance\_nearest

This function will check all the instances of the given object to see which is nearest to the given x/y point. All checks will be from the given x/y position to the _origin_ (the x/y position) of instances of the object specified.

If no instances of the object exist, the function will return an invalid instance handle which can be compared against [noone](../../../GML_Overview/Instance%20Keywords/noone.md), but if there are instances then it will return the [id](Instance_Variables/id.md) of the nearest instance found.

NOTE If the instance running the code has the same object index as the object being checked, then it will be included in the check (this includes checks for parent objects if the calling instance is also a child of the parent).

#### Syntax:

instance\_nearest(x, y, obj);

| Argument | Type | Description |
| --- | --- | --- |
| x | Real | The x position to check from. |
| y | Real | The y position to check from. |
| obj | Object Asset | The object to check for instances of. |

#### Returns:

[Object Instance](Instance_Variables/id.md) (can be [noone](../../../GML_Overview/Instance_Keywords.md))

#### Example:

var inst, xx;
xx = x;
x -= 10000;
inst = instance\_nearest(xx, y, object\_index);
if (inst != id)
{
    draw\_line(x, y, inst.x, inst.y);
}
x += 10000;

The above code moves the current instance 10000 pixels then checks its previous position to find the nearest instance of the same object type. If that instance is itself, it will do nothing more than move back to its original position, but should the instance that's found be different, it will draw a line between the two.