---
title: "layer_get_element_type"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/General_Layer_Functions/layer_get_element_type.htm"
converted: "2025-09-14T03:59:36.127Z"
---

# layer\_get\_element\_type

You can use this function to get the _element type_ for the given element. You supply the unique element ID value (for example, as returned the function that created the element or from [The Room Editor](../../../../../The_Asset_Editors/Rooms.md)) and the function will return one of the following constants:

| Layer Element Type Constant |
| --- |
| Constant | Description |
| layerelementtype_background | The element is a background. |
| layerelementtype_instance | The element is an instance. |
| layerelementtype_sprite | The element is a sprite asset. |
| layerelementtype_tilemap | The element is a tilemap. |
| layerelementtype_oldtilemap | The element is an old type tilemap. |
| layerelementtype_particlesystem | The element is a particle system. |
| layerelementtype_tile | The element is a legacy background tile (this is only valid for projects that have been imported from previous versions of GameMaker). |
| layerelementtype_sequence | The element is a sequence. |
| layerelementtype_undefined | The element does not exist or the ID value is erroneous. |

NOTE This function is most useful when you have multiple different element types assigned to the one layer, and that you can get a list of all the elements on any given layer using the function [layer\_get\_all\_elements](layer_get_all_elements.md).

#### Syntax:

layer\_get\_element\_type(element\_id)

| Argument | Type | Description |
| --- | --- | --- |
| element_id | Layer Element ID | The unique ID value of the element to get the type of |

#### Returns:

[Layer Element Type Constant](layer_get_element_type.md) (layerelementtype\_undefined if element does not exist or is invalid)

#### Example:

var a = layer\_get\_all\_elements(layer);
for (var i = 0; i < array\_length(a); i++;)
{
    if (layer\_get\_element\_type(a\[i\]) == layerelementtype\_sprite)
    {
        layer\_sprite\_destroy(a\[i\]);
    }
}

The above code gets the IDs for all the instance elements assigned to the layer of the instance running the code. The code then checks to see if any of the returned elements are sprite assets and if they are, they're destroyed.