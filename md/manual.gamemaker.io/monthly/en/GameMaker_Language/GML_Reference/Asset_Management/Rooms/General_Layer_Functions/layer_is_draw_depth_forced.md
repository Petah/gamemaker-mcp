---
title: "layer_is_draw_depth_forced"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/General_Layer_Functions/layer_is_draw_depth_forced.htm"
converted: "2025-09-14T03:59:36.372Z"
---

# layer\_is\_draw\_depth\_forced

This function can be used to check and see whether forced Z depth is enabled for rendering the layers in the project. See [layer\_force\_draw\_depth()](layer_force_draw_depth.md) for more information.

#### Syntax:

layer\_is\_draw\_depth\_forced()

#### Returns:

[Boolean](../../../../GML_Overview/Data_Types.md)

#### Example:

if (!layer\_is\_draw\_depth\_forced())
{
    layer\_force\_draw\_depth(true, 0);
}

The above code checks to see if the layer Z depth is forced or not and if it is not, it sets the Z depth to 0 and enables it.