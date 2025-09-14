---
title: "instance_activate_object"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Instances/Deactivating_Instances/instance_activate_object.htm"
converted: "2025-09-14T03:59:33.327Z"
---

# instance\_activate\_object

With this function you can activate a single instance or all instances of a specific object from all those that have been deactivated previously. Note that if you have deactivated an instance or object that has been flagged as **Persistent**, then you will need to reactivate it again with this function before changing room, otherwise it will _not_ be carried over and will be discarded instead. Note too that activation is not instantaneous, and an instance that has been activated in this way will not be considered to be active until the end of the event in which the function was called.

#### Syntax:

instance\_activate\_object(obj);

| Argument | Type | Description |
| --- | --- | --- |
| obj | Object Asset or Object Instance | The object or instance to activate (the keyword all can also be used). |

#### Returns:

N/A

#### Example:

instance\_activate\_all();
var \_vx = camera\_get\_view\_x(view\_camera\[0\]);
var \_vy = camera\_get\_view\_y(view\_camera\[0\]);
var \_vw = camera\_get\_view\_width(view\_camera\[0\]);
var \_vh = camera\_get\_view\_height(view\_camera\[0\]);
instance\_deactivate\_region(\_vx - 64, \_vy - 64, \_vw + 128, \_vh + 128, false, false);
instance\_activate\_object(obj\_Lights);

The above code activates all instances within the room and then deactivates those that are outside of the limits of the current camera view, except for the object "obj\_Lights" which are re-activated again at the end.