---
title: "layer_background_xscale"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/Background_Layers/layer_background_xscale.htm"
converted: "2025-09-14T03:59:35.647Z"
---

# layer\_background\_xscale

This function can be used to set the scale along the x-axis of a background element. You give the background element ID (which you get when you create a background element using [layer\_background\_create()](layer_background_create.md) or when you use the function [layer\_background\_get\_id()](layer_background_get_id.md)), and then set the scale value. The scale value you give is a multiplier that will be used to change the way the background element is displayed, where a value of 0.5 would display the element at half scale, and a value of 2 would display at double scale. Note that negative values are valid, and will "flip" the element around the (0,0) position, so an x scale of -1 would show the image reversed.

#### Syntax:

layer\_background\_xscale(background\_element\_id, xscale);

| Argument | Type | Description |
| --- | --- | --- |
| background_element_id | Background Element ID | The unique ID value of the background element to change |
| xscale | Real | The scale value to use (1 is no scaling) |

#### Returns:

N/A

#### Example:

var lay\_id = layer\_get\_id("Background\_water");
var back\_id = layer\_background\_get\_id(lay\_id);
layer\_background\_xscale(back\_id, -1);

The above code will get the layer handle for the layer named "Background\_water" and then use that to get the ID of the background element on that layer. This ID is then used to change the element xscale.