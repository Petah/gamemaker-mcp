---
title: "layer_shader"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/General_Layer_Functions/layer_shader.htm"
converted: "2025-09-14T03:59:36.468Z"
---

# layer\_shader

This function assigns a shader asset to any given layer and the layer will then be rendered using that shader.

You supply either the handle of the layer or the name of the layer (as a string - this will have a performance impact) , along with the shader to use. The shader must have been created previously in the Asset Browser and the shader asset is then passed to this function. If the layer assigned has instances added to it, then the shader will be applied to _all_ the draw events that the instance uses - for example if the instance has a Draw GUI Begin event, then the shader will be applied automatically to it. The shader will also affect any other graphic elements drawn on that layer, like sprite assets, tile maps or particle systems.

NOTE The function is _not_ meant to be called in any Draw events or Step events, but rather only needs to be called at the start of the room in the **Room Creation Code** or in the **Create Event** / **Room Start Event** of an instance.

#### Syntax:

layer\_shader(layer\_id, shader)

| Argument | Type | Description |
| --- | --- | --- |
| layer_id | String or Layer | The handle of the layer to target (or the layer name as a string) |
| shader | Shader Asset | The shader to assign to the layer |

#### Returns:

N/A

#### Example:

var \_lay\_id = layer\_get\_id("Instances");
layer\_shader(\_lay\_id, shd\_sepia);

The above code will assign the shader asset shd\_sepia to the given layer for all drawing.