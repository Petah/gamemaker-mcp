---
title: "layer"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Instances/Instance_Variables/layer.htm"
converted: "2025-09-14T03:59:33.566Z"
---

# layer

This **built-in variable** is created for every instance in a room and contains the handle of the layer that the instance is assigned to.

The value can be used in functions like [layer\_get\_depth](../../Rooms/General_Layer_Functions/layer_get_depth.md) or can be changed to move the instance to another layer, but note that if the layer being assigned does not exist in the current room, you will get an error that will force your game to close. When assigning a layer, you must supply the unique **layer handle** as returned by the function [layer\_get\_id](../../Rooms/General_Layer_Functions/layer_get_id.md) (when using named room layers), or as returned by the function [layer\_create](../../Rooms/General_Layer_Functions/layer_create.md) (when you create your own layers at runtime).

IMPORTANT If you have created the instance using the [instance\_create\_depth](../instance_create_depth.md) function, or have manually changed the [depth](../../../../../../../../GameMaker_Language/GML_Reference/Asset_Management/Instances/Instance_Variables/depth.md) variable, the layer assigned to the instance becomes a "managed" layer, which is one that GameMaker controls and manages automatically. In these cases the layer variable will hold an invalid layer handle (\-1).

#### Syntax:

layer

#### Returns:

[Layer](../../Rooms/General_Layer_Functions/layer_get_id.md)

#### Example:

layer = layer\_create(-1000);

The above code will create a new layer with a depth of -1000 and then set the instance's layer variable to the returned layer handle, moving the instance from the layer it is currently on to the new layer being created.