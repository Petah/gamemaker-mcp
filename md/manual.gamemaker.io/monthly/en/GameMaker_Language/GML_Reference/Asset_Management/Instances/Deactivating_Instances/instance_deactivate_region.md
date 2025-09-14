---
title: "instance_deactivate_region"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Instances/Deactivating_Instances/instance_deactivate_region.htm"
converted: "2025-09-14T03:59:33.417Z"
---

# instance\_deactivate\_region

With this function you can define a region within the room to deactivate instances that have previously been activated. This region can either be flagged as "inside" or "outside" as demonstrated in the following image:

![Instance deactivate region example](../../../../../assets/Images/Scripting_Reference/GML/Reference/Instances/instance_deactivate_region.png)You can see in the image above that the "apple" instance is always inactive because, even if the sprite itself doesn't overlap the region, the bounding box does. So, instances are considered to be within the region specified when their _bounding box_ overlaps with it, and the state of the collision mask (precise or not) is **not** taken into consideration. Note that deactivation is not instantaneous, and an instance that has been deactivated in this way will not be considered to be inactive until the end of the event in which the function was called.

NOTE If you deactivate an instance on room start (i.e. from the Room Creation Code, or from an instance [Create event](../../../../../The_Asset_Editors/Object_Properties/Object_Events.md) of an instance within the room) all instances that are placed within the room from [The Room Editor](../../../../../The_Asset_Editors/Rooms.md) **will still run their Create event** before being deactivated.

**WARNING** Deactivating instances that have physics enabled will **NOT** stop their fixtures from interacting within the physics simulation. For that you should set their [phy\_active](../../../Physics/Physics_Variables/phy_active.md) variable to true or false as you activate/deactivate the instances.

#### Syntax:

instance\_deactivate\_region(left, top, width, height, inside, notme);

| Argument | Type | Description |
| --- | --- | --- |
| left | Real | The x coordinate of the left of the rectangular region to deactivate. |
| top | Real | The y coordinate of the top of the rectangular region to deactivate. |
| width | Real | The width of the region to deactivate. |
| height | Real | The height of the region to deactivate. |
| inside | Boolean | Whether to deactivate instances on the inside of the region (true) or the outside (false). |
| notme | Boolean | Whether to exclude the calling instance from deactivation (true) or not (false). |

#### Returns:

N/A

#### Example:

instance\_activate\_all();
var \_vx = camera\_get\_view\_x(view\_camera\[0\]);
var \_vy = camera\_get\_view\_y(view\_camera\[0\]);
var \_vw = camera\_get\_view\_width(view\_camera\[0\]);
var \_vh = camera\_get\_view\_height(view\_camera\[0\]);
instance\_deactivate\_region(\_vx - 64, \_vy - 64, \_vw + 128, \_vh + 128, false, false);

The above code activates all instances and then deactivates a region within the room.