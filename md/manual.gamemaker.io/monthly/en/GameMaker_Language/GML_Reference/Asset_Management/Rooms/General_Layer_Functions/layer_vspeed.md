---
title: "layer_vspeed"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/General_Layer_Functions/layer_vspeed.htm"
converted: "2025-09-14T03:59:36.481Z"
---

# layer\_vspeed

You can use this function to set the vertical speed (in pixels per game frame) of the layer within the currently scoped room.

You supply the layer handle (which you get when you create the layer using [layer\_create](layer_create.md)) or the layer name (as a string - this will have a performance impact) and the speed value to set, where a positive value is downwards and a negative value upwards.

NOTE This function does not affect any [Instances](../../Instances/Instances.md) already contained or later added in the layer - they remain at their ([x](../../Instances/Instance_Variables/x.md), [y](../../Instances/Instance_Variables/y.md)) position - _unless_ those instances are controlled by a sequence (i.e. when [in\_sequence](../../Sequences/in_sequence.md) is true).

#### Syntax:

layer\_vspeed(layer\_id, vspd)

| Argument | Type | Description |
| --- | --- | --- |
| layer_id | String or Layer | The handle of the layer to set the vertical speed of |
| vspd | Real | The vertical speed (in pixels per game frame) to set |

#### Returns:

N/A

#### Example:

var lay\_id = layer\_get\_id("Sprites");
if (layer\_get\_hspeed(lay\_id) != 0 || layer\_get\_vspeed(lay\_id) != 0)
{
    layer\_hspeed(lay\_id, 0);
    layer\_vspeed(lay\_id, 0);
}

The above code checks the given layer horizontal and vertical speeds and if they are not both set to 0 then it is sets them to 0.