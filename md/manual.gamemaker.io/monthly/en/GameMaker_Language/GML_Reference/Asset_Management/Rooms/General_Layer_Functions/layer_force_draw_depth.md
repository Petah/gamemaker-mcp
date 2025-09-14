---
title: "layer_force_draw_depth"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/General_Layer_Functions/layer_force_draw_depth.htm"
converted: "2025-09-14T03:59:36.054Z"
---

# layer\_force\_draw\_depth

This function forces _all_ layers to be drawn at the specified z depth.

This **does not change the order the layers are rendered in** and they'll still be drawn in depth order, it simply changes what z value is used. In general you do not need to worry about this, but if you have layers that have a depth outside of the allowed range (\-16000 to 16000) then they won't be rendered, so you can force the Z depth to a reasonable value - 0 for example - and they will all be rendered fine.

Note that this is generally only for use with legacy projects from previous versions of GameMaker where you could have draw depths higher or lower than the permitted layer range.

This function will take precedence over the depth set with [gpu\_set\_depth](../../../Drawing/GPU_Control/gpu_set_depth.md) in any object instances running within the specified layer.

#### Syntax:

layer\_force\_draw\_depth(force, depth)

| Argument | Type | Description |
| --- | --- | --- |
| force | Boolean | Whether to enable (set to true) or disable (set to false) Z depth forcing |
| depth | Real | The new Z depth |

#### Returns:

N/A

#### Example:

if (!layer\_is\_draw\_depth\_forced())
{
    layer\_force\_draw\_depth(true, 0);
}

The above code checks to see if the layer Z depth is forced or not and if it is not, it sets the Z depth to 0 and enables it.