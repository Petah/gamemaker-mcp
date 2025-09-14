---
title: "layer_background_get_vtiled"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/Background_Layers/layer_background_get_vtiled.htm"
converted: "2025-09-14T03:59:35.495Z"
---

# layer\_background\_get\_vtiled

This function can be used to find out if the background element is tiled vertically or not. You give the background element ID (which you get when you create a background element using [layer\_background\_create()](layer_background_create.md) or when you use the function [layer\_background\_get\_id()](layer_background_get_id.md)), and the function will return either true if the element is currently tiled, or false if it is not.

#### Syntax:

layer\_background\_get\_vtiled(background\_element\_id);

| Argument | Type | Description |
| --- | --- | --- |
| background_element_id | Background Element ID | The unique ID value of the background element to get the information from |

#### Returns:

[Boolean](../../../../GML_Overview/Data_Types.md)

#### Example:

var lay\_id = layer\_get\_id("Background\_sky");
var back\_id = layer\_background\_get\_id(lay\_id);
if (!layer\_background\_get\_vtiled(back\_id))
{
    layer\_background\_vtiled(back\_id, true);
}

The above code will get the layer handle for the layer named "Background\_sky" and then use that to get the ID of the background element on that layer. This ID is then used to check if the element is tiling across the vertical axis, and if it is not then it is set to do so.