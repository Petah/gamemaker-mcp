---
title: "instance_activate_region"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Instances/Deactivating_Instances/instance_activate_region.htm"
converted: "2025-09-14T03:59:33.343Z"
---

# instance\_activate\_region

With this function you can define a region within the room to activate instances that have previously been deactivated. This region can either be flagged as "inside" or "outside" as demonstrated in the following image:

![Instance activate region example](../../../../../assets/Images/Scripting_Reference/GML/Reference/Instances/instance_activate_region.png)You can see in the image above that the "apple" instance is always active because, even if the sprite itself doesn't overlap the region, the bounding box does. So, instances are considered to be within the region specified when their _bounding box_ overlaps with it, and the state of the collision mask (precise or not) is not taken into consideration. Note that activation is not instantaneous, and an instance that has been activated in this way will not be considered to be active until the end of the event in which the function was called.

#### Syntax:

instance\_activate\_region(left, top, width, height, inside);

| Argument | Type | Description |
| --- | --- | --- |
| left | Real | The x coordinate of the left of the rectangular region to activate. |
| top | Real | The y coordinate of the top of the rectangular region to activate. |
| width | Real | The width of the region to activate. |
| height | Real | The height of the region to activate. |
| inside | Boolean | Whether to activate instances on the inside of the region (true) or the outside (false). |

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