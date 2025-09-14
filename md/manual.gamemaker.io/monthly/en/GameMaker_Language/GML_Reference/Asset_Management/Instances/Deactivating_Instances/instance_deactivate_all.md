---
title: "instance_deactivate_all"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Instances/Deactivating_Instances/instance_deactivate_all.htm"
converted: "2025-09-14T03:59:33.366Z"
---

# instance\_deactivate\_all

This function will deactivate **all** instances that are in the room at the moment that the code is run. This may include the instance running the code if the "notme" flag is set to false, but normally you would want that instance to be active, in which case the "notme" flag should be set to true. Note that deactivation is not instantaneous, and an instance that has been deactivated in this way will not be considered to be inactive until the end of the event in which the function was called.

NOTE If you deactivate an instance on room start (i.e. from the Room Creation Code, or from an instance [Create event](../../../../../The_Asset_Editors/Object_Properties/Object_Events.md) of an instance within the room) all instances that are placed within the room from [The Room Editor](../../../../../The_Asset_Editors/Rooms.md) **will still run their Create event** before being deactivated.

**WARNING** Deactivating instances that have physics enabled will **NOT** stop their fixtures from interacting within the physics simulation. For that you should set their [phy\_active](../../../Physics/Physics_Variables/phy_active.md) variable to true or false as you activate/deactivate the instances.

#### Syntax:

instance\_deactivate\_all(notme);

| Argument | Type | Description |
| --- | --- | --- |
| notme | Boolean | Whether to keep the calling instance activated (true) or not (false). |

#### Returns:

N/A

#### Example:

instance\_deactivate\_all(true);
var \_vx = camera\_get\_view\_x(view\_camera\[0\]);
var \_vy = camera\_get\_view\_y(view\_camera\[0\]);
var \_vw = camera\_get\_view\_width(view\_camera\[0\]);
var \_vh = camera\_get\_view\_height(view\_camera\[0\]);
instance\_activate\_region(\_vx - 64, \_vy - 64, \_vw + 128, \_vh + 128, false);

The above code deactivates all instances except the one that is running the code and then activates a region within the room.