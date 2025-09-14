---
title: "instance_deactivate_layer"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Instances/Deactivating_Instances/instance_deactivate_layer.htm"
converted: "2025-09-14T03:59:33.380Z"
---

# instance\_deactivate\_layer

With this function you can deactivate all instances assigned to a specific layer. You need to supply the **layer handle**, which can either be the name of the layer as written in the code editor (as a string) or the actual layer handle value as returned by the [layer\_create()](../../Rooms/General_Layer_Functions/layer_create.md), and note that you can only deactivate _instance_ layers with this function. Note that if you have deactivated a layer that has instances of objects flagged as **Persistent**, then you will need to reactivate the layer again with the function [instance\_activate\_layer()](instance_activate_layer.md) before changing room, otherwise any persistent instances on the layer will _not_ be carried over and will be discarded. Note too that deactivation is not instantaneous, and an instance that has been deactivated in this way will not be considered to be inactive until the end of the event in which the function was called.

NOTE If you deactivate an instance on room start (i.e. from the Room Creation Code, or from an instance [Create event](../../../../../The_Asset_Editors/Object_Properties/Object_Events.md) of an instance within the room) all instances that are placed within the room from [The Room Editor](../../../../../The_Asset_Editors/Rooms.md) **will still run their Create event** before being deactivated.

**WARNING** Deactivating instances that have physics enabled will **NOT** stop their fixtures from interacting within the physics simulation. For that you should set their [phy\_active](../../../Physics/Physics_Variables/phy_active.md) variable to true or false as you activate/deactivate the instances.

#### Syntax:

instance\_deactivate\_layer(obj);

| Argument | Type | Description |
| --- | --- | --- |
| layer | Layer or String | The layer name string (or handle) to be used |

#### Returns:

N/A

#### Example:

instance\_deactivate\_layer("Enemy Layer");
var \_vx = camera\_get\_view\_x(view\_camera\[0\]);
var \_vy = camera\_get\_view\_y(view\_camera\[0\]);
var \_vw = camera\_get\_view\_width(view\_camera\[0\]);
var \_vh = camera\_get\_view\_height(view\_camera\[0\]);
instance\_activate\_region(\_vx - 64, \_vy - 64, \_vw + 128, \_vh + 128, false);

The above code deactivates all instances assigned to the layer "Enemy\_Layer" and then activates a region within the room.