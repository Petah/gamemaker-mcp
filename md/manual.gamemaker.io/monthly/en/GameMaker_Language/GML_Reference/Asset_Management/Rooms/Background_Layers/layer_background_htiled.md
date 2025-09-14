---
title: "layer_background_htiled"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/Background_Layers/layer_background_htiled.htm"
converted: "2025-09-14T03:59:35.540Z"
---

# layer\_background\_htiled

Using this function you can change whether the given background element on a layer should be tiled horizontally or not. You give the background element ID (which you get when you create a background element using [layer\_background\_create()](layer_background_create.md) or when you use the function [layer\_background\_get\_id()](layer_background_get_id.md)), and then set the tiling value. If set to true then the element will be displayed tiled horizontally across the room, and when set to false, the element will not be tiled. This function is for 2D projects only, and will not work correctly when a 3D camera projection is used.

#### Syntax:

layer\_background\_htiled(background\_element\_id, tiled);

| Argument | Type | Description |
| --- | --- | --- |
| background_element_id | Background Element ID | The unique ID value of the background element to change |
| tiled | Boolean | The horizontal tiling toggle, which can be true or false |

#### Returns:

N/A

#### Example:

var back = layer\_background\_get\_id(layer);
if !layer\_background\_get\_htiled(back) || !layer\_background\_get\_vtiled(back)
{
    layer\_background\_htiled(back, true);
    layer\_background\_vtiled(back, true);
}

The above code will check the background element assigned to the layer the instance running the code is on and if it is not tiled in either direction it will set it to tile vertically and horizontally.