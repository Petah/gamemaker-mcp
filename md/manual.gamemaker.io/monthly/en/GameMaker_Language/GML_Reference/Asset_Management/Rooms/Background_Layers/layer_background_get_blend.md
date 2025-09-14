---
title: "layer_background_get_blend"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/Background_Layers/layer_background_get_blend.htm"
converted: "2025-09-14T03:59:35.357Z"
---

# layer\_background\_get\_blend

This function can be used to get the blend colour of the background element. You give the background element ID (which you get when you create a background element using [layer\_background\_create()](layer_background_create.md) or when you use the function [layer\_background\_get\_id()](layer_background_get_id.md)), and the function will return real value that represents the colour assigned.

#### Syntax:

layer\_background\_get\_blend(background\_element\_id);

| Argument | Type | Description |
| --- | --- | --- |
| background_element_id | Background Element ID | The unique ID value of the background element to get the information from |

#### Returns:

[Colour](../../../Drawing/Colour_And_Alpha/Colour_And_Alpha.md)

#### Example:

var lay\_id = layer\_get\_id("Background\_sky");
var back\_id = layer\_background\_get\_id(lay\_id);

if (layer\_background\_get\_blend(back\_id) == c\_white)
{
    layer\_background\_blend(back\_id, make\_colour\_rgb(random(255), random(255), 255));
}

The above code will get the layer handle for the layer named "Background\_sky" and then use that to get the ID of the background element on that layer. This ID is then used to check the element blend colour and if it is equivalent to the constant c\_white, then the layer blend is set to a random colour.