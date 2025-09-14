---
title: "instance_furthest"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Instances/instance_furthest.htm"
converted: "2025-09-14T03:59:33.924Z"
---

# instance\_furthest

This function will check all the instances of the given object to see which is furthest from the given x/y point. All checks will be from the given x/y position to the _origin_ (the x/y position) of instances of the object specified. If no instances of the object exist, the function will return an invalid instance handle ([noone](../../../GML_Overview/Instance%20Keywords/noone.md)), but if there are instances then it will return the [id](Instance_Variables/id.md) of the instance found. Please note that if the instance running the code has the same object index as the object being checked, then it will be included in the check (this includes checks for parent objects if the calling instance is also a child of the parent).

#### Syntax:

instance\_furthest(x, y, obj);

| Argument | Type | Description |
| --- | --- | --- |
| x | Real | The x position to check for instances far from. |
| y | Real | The y position to check for instances far from. |
| obj | Object Asset | The object to check for instances of. |

#### Returns:

[Object Instance](Instance_Variables/id.md)

#### Example:

var inst;
inst = instance\_furthest(x, y, object\_index);
if (inst != id)
{
    draw\_line(x, y, inst.x, inst.y);
}

The above code will find the furthest instance that shares the same object index as the instance running the code and store the id in a variable. This variable is then checked to see if it is the same as the id of the calling instance and, if it is not, a line is drawn between the two instances.