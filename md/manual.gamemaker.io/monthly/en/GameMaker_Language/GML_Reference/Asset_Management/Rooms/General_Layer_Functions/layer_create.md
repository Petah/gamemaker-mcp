---
title: "layer_create"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/General_Layer_Functions/layer_create.htm"
converted: "2025-09-14T03:59:35.970Z"
---

# layer\_create

This function is used to create a new layer within the current room. You supply the depth that the new layer is to occupy and the function returns the layer handle that can then be used to access the layer in further functions.

You can also supply an optional "name" argument, which will enable you to give the layer a specific name (as a string), and instead of using the handle to access the layer, you can use this name string instead, although it should be noted that using name strings will have a greater impact on performance than using just the handle. If you do not specify the name of the layer, then the created layer will be assigned a name with the format "\_layer\_XXX", where "XXX" is a hex value used to give the layer a unique name.

When giving a depth value, this will be higher the "further away" from the camera the layer is and lower the "closer" to the camera the layer is, so if you have three layers with depths -100, 0, 100, the layers will draw in the order 100, 0, -100, so that the "top" layer (ie, the closest to the camera view and so drawn over everything else) will be the layer with the -100 depth.

The following image shows a schematic of how depth works for layers:

![Layer depth example](https://manual.gamemaker.io/monthly/en/assets/Images/Scripting_Reference/GML/Reference/Rooms/Layer_Depths.png)It is worth noting that while you _can_ assign more than one layer to a single depth, _there is no way that you can guarantee that layers on the same depth will be drawn in any given order_ and as such it is best to assign only one layer to any given depth. Also note that the minimum and maximum layer depths are \-16000 to 16000, and anything outside of those depths **will not be rendered**. If you require a depth outside of that range then you will need to use the function [layer\_force\_draw\_depth()](layer_force_draw_depth.md).

#### Syntax:

layer\_create(depth, \[name\])

| Argument | Type | Description |
| --- | --- | --- |
| depth | Real | The depth that the layer has to be created at. |
| name | String | OPTIONAL The name to give the layer (a string). |

#### Returns:

[Layer](layer_get_id.md)

#### Example:

global.Bullet\_Layer = layer\_create(-100);

The above code will create a new layer with a depth value of -100 and assign its handle to a global variable.