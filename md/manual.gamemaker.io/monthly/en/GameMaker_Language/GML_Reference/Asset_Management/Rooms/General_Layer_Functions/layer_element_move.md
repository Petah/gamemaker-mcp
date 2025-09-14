---
title: "layer_element_move"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/General_Layer_Functions/layer_element_move.htm"
converted: "2025-09-14T03:59:36.027Z"
---

# layer\_element\_move

You can use this function to move an element from one layer to another. You give the **element ID**, as returned by the function used to create the element or the room editor or the function [layer\_get\_all\_elements()](layer_get_all_elements.md), and then you give the layer handle (which you get when you create the layer using [layer\_create()](layer_create.md)) or the layer name (as a string - this will have a performance impact).

#### Syntax:

layer\_element\_move(element\_id, layer\_id);

| Argument | Type | Description |
| --- | --- | --- |
| element_id | Layer Element ID | The unique ID value of the element to move |
| layer_id | String or Layer | The handle of the layer to move the element to (or the layer name as a string) |

#### Returns:

N/A

#### Example:

var a = layer\_get\_all\_elements(layer);
asset\_layer = layer\_create(-100);
for (var i = 0; i < array\_length(a); i++)
{
    if layer\_get\_element\_type(a\[i\]) == layerelementtype\_sprite
    {
        layer\_element\_move(a\[i\], asset\_layer)
    }
}

The above code gets the elements on the layer that the instance running the code is assigned to, then checks them to see if they are sprite assets, and if they are then they are moved to the layer with the ID stored in the variable "asset\_layer".