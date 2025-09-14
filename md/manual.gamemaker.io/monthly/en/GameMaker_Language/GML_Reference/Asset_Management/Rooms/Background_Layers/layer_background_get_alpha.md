---
title: "layer_background_get_alpha"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/Background_Layers/layer_background_get_alpha.htm"
converted: "2025-09-14T03:59:35.340Z"
---

# layer\_background\_get\_alpha

This function can be used to get the alpha value of the background element. You give the background element ID (which you get when you create a background element using [layer\_background\_create()](layer_background_create.md) or when you use the function [layer\_background\_get\_id()](layer_background_get_id.md)), and the function will return a value between 0 (fully transparent) and 1 (fully opaque).

#### Syntax:

layer\_background\_get\_alpha(background\_element\_id);

| Argument | Type | Description |
| --- | --- | --- |
| background_element_id | Background Element ID | The unique ID value of the background element to get the information from |

#### Returns:

[Real](../../../../GML_Overview/Data_Types.md) (from 0 to 1)

#### Example:

var lay\_id = layer\_get\_id("Background\_sky");
var back\_id = layer\_background\_get\_id(lay\_id);

if (layer\_background\_get\_alpha(back\_id) < 0.1)
{
    layer\_background\_destroy(back\_id);
}

The above code will get the layer handle for the layer named "Background\_sky" and then use that to get the ID of the background element on that layer. This ID is then used to check the element alpha and if it is less than 0.1, then the layer element is destroyed.