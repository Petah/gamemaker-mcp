---
title: "instance_deactivate_object"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Instances/Deactivating_Instances/instance_deactivate_object.htm"
converted: "2025-09-14T03:59:33.400Z"
---

# instance\_deactivate\_object

With this function you can deactivate a single instance or all instances of a specific object from all those that have been activated previously. Note that if you have deactivated an instance or object that has been flagged as **Persistent**, then you will need to reactivate it again with the function [instance\_activate\_object](instance_activate_object.md) before changing room, otherwise it will _not_ be carried over and will be discarded instead. Note too that deactivation is not instantaneous, and an instance that has been deactivated in this way will not be considered to be inactive until the end of the event in which the function was called.

NOTE If you deactivate an instance on room start (i.e. from the Room Creation Code, or from an instance [Create event](../../../../../The_Asset_Editors/Object_Properties/Object_Events.md) of an instance within the room) all instances that are placed within the room from [The Room Editor](../../../../../The_Asset_Editors/Rooms.md) **will still run their Create event** before being deactivated.

**WARNING** Deactivating instances that have physics enabled will **NOT** stop their fixtures from interacting within the physics simulation. For that you should set their [phy\_active](../../../Physics/Physics_Variables/phy_active.md) variable to true or false as you activate/deactivate the instances.

#### Syntax:

instance\_deactivate\_object(obj);

| Argument | Type | Description |
| --- | --- | --- |
| obj | Object Asset or Object Instance | The object or instance to deactivate (the keyword all can also be used). |

#### Returns:

N/A

#### Example:

instance\_deactivate\_object(obj\_Enemy);
var \_vx = camera\_get\_view\_x(view\_camera\[0\]);
var \_vy = camera\_get\_view\_y(view\_camera\[0\]);
var \_vw = camera\_get\_view\_width(view\_camera\[0\]);
var \_vh = camera\_get\_view\_height(view\_camera\[0\]);
instance\_activate\_region(\_vx - 64, \_vy - 64, \_vw + 128, \_vh + 128, false);

The above code deactivates all instances of the object "obj\_Enemy" and then activates a region within the room.