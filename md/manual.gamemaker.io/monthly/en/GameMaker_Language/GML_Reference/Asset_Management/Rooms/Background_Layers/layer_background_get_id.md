---
title: "layer_background_get_id"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/Background_Layers/layer_background_get_id.htm"
converted: "2025-09-14T03:59:35.391Z"
---

# layer\_background\_get\_id

This function can be used to retrieve the unique ID value of the background element on a layer. You supply the layer handle (which you get when you use the layer name along with [layer\_get\_id()](../General_Layer_Functions/layer_get_id.md)) and the function will return the ID value associated with the background element on the layer. Note that this function is specifically designed for use with backgrounds that have been added in the IDE, as if you add a background to a layer through code using the function [layer\_background\_create()](layer_background_create.md), then it will return the unique ID for the background element added.

#### Syntax:

layer\_background\_get\_id(layer\_id)

| Argument | Type | Description |
| --- | --- | --- |
| layer_id | String or Layer | The handle of the layer to target |

#### Returns:

[Background Element ID](layer_background_get_id.md)

#### Example:

var lay\_id = layer\_get\_id("Background\_trees");
var back\_id = layer\_background\_get\_id(lay\_id);
layer\_background\_sprite(back\_id, bck\_Trees\_Winter);

The above code will get the layer handle for the layer named "Background\_trees" and then use that to get the ID of the background element on that layer. This ID is then used to change the element sprite.