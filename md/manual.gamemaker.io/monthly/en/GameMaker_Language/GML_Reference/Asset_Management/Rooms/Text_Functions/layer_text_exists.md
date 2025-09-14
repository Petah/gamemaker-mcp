---
title: "layer_text_exists"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/Text_Functions/layer_text_exists.htm"
converted: "2025-09-14T03:59:37.588Z"
---

# layer\_text\_exists

This function checks whether the given Text Element exists on the given layer, and returns true or false.

#### Syntax:

layer\_text\_exists(layer\_name\_or\_id, text\_element\_id);

| Argument | Type | Description |
| --- | --- | --- |
| layer_name_or_id | String or Layer | The layer to check. You can supply the layer name as a string, or the layer ID returned from a function like layer_get_id or layer_create. |
| text_element_id | Text Element ID | The text element ID, retrieved from layer_text_create or layer_text_get_id. |

#### Returns:

[Boolean](../../../../GML_Overview/Data_Types.md)

#### Example:

var \_text1\_id = layer\_text\_get\_id("Assets", "text1");

if (layer\_text\_exists("Assets", \_text1\_id))
{
    layer\_text\_destroy(\_text1\_id);
}

This gets the ID of the Text Element text1 from the Assets layer. It then checks whether that element exists, and if it does, it destroys it.