---
title: "layer_get_forced_depth"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/General_Layer_Functions/layer_get_forced_depth.htm"
converted: "2025-09-14T03:59:36.138Z"
---

# layer\_get\_forced\_depth

This function can be used to retrieve the Z depth set for rendering layers within the room. See [layer\_force\_draw\_depth()](layer_force_draw_depth.md) for more information.

#### Syntax:

layer\_get\_forced\_depth()

#### Returns:

[Real](../../../../GML_Overview/Data_Types.md)

#### Example:

if (layer\_get\_forced\_depth() != 0)
{
    layer\_force\_draw\_depth(true, 0);
}

The above code checks to see if the layer Z depth is forced to a value of 0 or not and if it is not, it sets the layer Z depth to 0.