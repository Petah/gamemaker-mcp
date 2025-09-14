---
title: "layer_get_all_elements"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/General_Layer_Functions/layer_get_all_elements.htm"
converted: "2025-09-14T03:59:36.080Z"
---

# layer\_get\_all\_elements

You can use this function to get the _element IDs_ of the given layer. You supply the layer handle (which you get when you create the layer using [layer\_create](layer_create.md)) or the layer name (as a string - this will have a performance impact) and the function will return an [Array](../../../../GML_Overview/Arrays.md) of IDs, where each entry in the array is a unique ID for an element on that layer. For example, if the layer is an Asset Layer, the array will be populated with the ID values of the sprite, sequence and particle system assets that are assigned to the layer.

NOTE Using code to work with layers means that you can assign different element types to the same layer - so you can have sprite assets along with instances, for example - in which case you can then use the function [layer\_get\_element\_type](layer_get_element_type.md) to get the type of element the ID relates to.

#### Syntax:

layer\_get\_all\_elements(layer\_id)

| Argument | Type | Description |
| --- | --- | --- |
| layer_id | String or Layer | The handle of the layer to get the elements from (or the layer name as a string) |

#### Returns:

[Array](../../../../GML_Overview/Arrays.md) of [Layer Element ID](layer_get_all_elements.md)s

#### Example:

var a = layer\_get\_all\_elements(layer);
for (var i = 0; i < array\_length(a); i++)
{
    if (layer\_get\_element\_type(a\[i\]) == layerelementtype\_sprite)
    {
        layer\_sprite\_destroy(a\[i\]);
    }
}

The above code gets the IDs for all the instance elements assigned to the layer of the instance running the code. The code then checks to see if any of the returned elements are sprite assets. If they are, they're destroyed.