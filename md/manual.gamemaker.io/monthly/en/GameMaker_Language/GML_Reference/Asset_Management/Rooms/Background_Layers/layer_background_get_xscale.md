---
title: "layer_background_get_xscale"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/Background_Layers/layer_background_get_xscale.htm"
converted: "2025-09-14T03:59:35.510Z"
---

# layer\_background\_get\_xscale

This function can be used to get the current scale multiplier value of the background element. You give the background element ID (which you get when you create a background element using [layer\_background\_create()](layer_background_create.md) or when you use the function [layer\_background\_get\_id()](layer_background_get_id.md)), and the function will return real value that represents the scale multiplier being used to draw the sprite. Default value is 1.

#### Syntax:

layer\_background\_get\_xscale(background\_element\_id);

| Argument | Type | Description |
| --- | --- | --- |
| background_element_id | Background Element ID | The unique ID value of the background element to get the information from |

#### Returns:

[Real](../../../../GML_Overview/Data_Types.md)

#### Example:

var lay\_id = layer\_get\_id("Background\_sky");
var back\_id = layer\_background\_get\_id(lay\_id);
if (layer\_background\_get\_xscale(back\_id) != -1)
{
    layer\_background\_xscale(back\_id, -1);
}

The above code will get the layer handle for the layer named "Background\_sky" and then use that to get the ID of the background element on that layer. This ID is then used to check the x scale for the element and if it is not -1, it is set to -1.