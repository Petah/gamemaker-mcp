---
title: "instance_activate_layer"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Instances/Deactivating_Instances/instance_activate_layer.htm"
converted: "2025-09-14T03:59:33.311Z"
---

# instance\_activate\_layer

With this function you can activate a layer that has been deactivated previously. You need to supply the **layer handle**, which can either be the name of the layer as written in the code editor (as a string) or the actual layer handle as returned by the [layer\_create](../../Rooms/General_Layer_Functions/layer_create.md) and all deactivated instances on that layer will activated once again. Note that if you have deactivated a layer that has persistent instances, you will need to reactivate the layer again with this function before changing room, otherwise any persistent instances will _not_ be carried over and will be discarded. Note too that activation is not instantaneous, and an instance that has been activated in this way will not be considered to be active until the end of the event in which the function was called.

#### Syntax:

instance\_activate\_layer(layer\_id);

| Argument | Type | Description |
| --- | --- | --- |
| layer_id | Layer or String | The layer name string (or layer handle) to be used |

#### Returns:

N/A

#### Example:

instance\_activate\_all();
var \_cam = view\_camera\[0\];
var \_vx = camera\_get\_view\_x(\_cam);
var \_vy = camera\_get\_view\_y(\_cam);
var \_vw = camera\_get\_view\_width(\_cam);
var \_vh = camera\_get\_view\_height(\_cam);
instance\_deactivate\_region(\_vx - 64, \_vy - 64, \_vw + 128, \_vh + 128, false, false);
instance\_activate\_layer("Player\_Layer");

The above code activates all instances within the room and then deactivates those that are outside of the limits of the current camera view, except for the instances on the layer "Player\_Layer" which are re-activated again at the end.