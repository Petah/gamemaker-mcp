---
title: "layer_get_depth"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/General_Layer_Functions/layer_get_depth.htm"
converted: "2025-09-14T03:59:36.094Z"
---

# layer\_get\_depth

You can use this function to get the _depth_ value associated with a given layer.

You supply the layer handle (which you get when you create the layer using [layer\_create](layer_create.md)) or the layer name (as a string - this will have a performance impact) and the function will return that layer's depth as a real number.

Note that depth is defined as being higher the "further away" from the camera and lower the "closer" to the camera, so if you have three layers with depths -100, 0, 100, the layers will draw in the order 100, 0, -100, so that the "top" layer (i.e., the closest to the camera view and so drawn over everything else) will be the layer with the -100 depth.

The following image shows a schematic of how depth works for layers:

![Layer depth example](https://manual.gamemaker.io/monthly/en/assets/Images/Scripting_Reference/GML/Reference/Rooms/Layer_Depths.png)Note that if you supply an invalid layer handle you will get an error.

#### Syntax:

layer\_get\_depth(layer\_id)

| Argument | Type | Description |
| --- | --- | --- |
| layer_id | String or Layer | The handle of the layer to get the depth of (or the layer name as a string) |

#### Returns:

[Real](../../../../GML_Overview/Data_Types.md)

#### Example:

if (layer\_get\_depth(global.temp\_layer) != -100)
{
    layer\_destroy(global.temp\_layer);
    global.temp\_layer = layer\_create(-100);
}

The above code checks the depth of a layer handle stored in a global variable and if it is not -100 it destroys the layer and re-creates it at the depth of -100.