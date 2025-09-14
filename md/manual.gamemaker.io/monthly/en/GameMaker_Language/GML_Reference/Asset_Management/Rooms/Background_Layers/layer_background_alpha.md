---
title: "layer_background_alpha"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/Background_Layers/layer_background_alpha.htm"
converted: "2025-09-14T03:59:35.252Z"
---

# layer\_background\_alpha

This function controls the alpha (transparency) of the background sprite. You give the background element ID (which you get when you create a background element using [layer\_background\_create()](layer_background_create.md) or when you use the function [layer\_background\_get\_id()](layer_background_get_id.md)), and then set the alpha value to use. Alpha can be between 0 (fully transparent) and 1 (fully opaque) with the default alpha value for the background element being 1. Note that if the layer the background element has been assigned to is not visible - or the element itself has been made invisible - you will not see any difference with this function until the layer or element has been made visible again.

#### Syntax:

layer\_background\_alpha(background\_element\_id, alpha);

| Argument | Type | Description |
| --- | --- | --- |
| background_element_id | Background Element ID | The unique ID value of the background element to change |
| alpha | Real | The alpha for background sprite, from 0 to 1 (default is 1) |

#### Returns:

N/A

#### Example:

var lay\_id = layer\_get\_id("Background\_sky");
var back\_id = layer\_background\_get\_id(lay\_id);
layer\_background\_alpha(back\_id, random(1));

The above code gets the ID value of the background assigned to the layer "Background\_sky" and then sets its alpha to a random value between 0 and 1.