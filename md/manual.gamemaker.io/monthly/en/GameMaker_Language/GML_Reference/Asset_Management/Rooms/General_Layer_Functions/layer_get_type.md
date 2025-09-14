---
title: "layer_get_type"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/General_Layer_Functions/layer_get_type.htm"
converted: "2025-09-14T03:59:36.263Z"
---

# layer\_get\_type

This function returns the type of the given layer. You supply either the name of the layer as a string or the [Layer](layer_get_id.md) handle, and the function returns one of the following constants:

| Layer Type Constant |
| --- |
| Constant | Description |
| layer_type_unknown | An unknown layer. Returned for invalid layer names/handles. |
| layer_type_room | A room layer. |
| layer_type_ui_viewports | A UI layer with "Game View" set to "Viewports". |
| layer_type_ui_display | A UI layer with "Game View" set to "Display". |

#### Syntax:

layer\_get\_type(layer\_id)

| Argument | Type | Description |
| --- | --- | --- |
| layer_id | String or Layer | The handle of the layer to get the type of (or the layer name as a string) |

#### Returns:

[Layer Type Constant](layer_get_type.md)

#### Example:

if (layer\_get\_type(layer) == layer\_type\_ui\_display)
{
    layer\_set\_visible(layer, false);
}

This checks if the layer that the instance is on is a Display UI layer. In that case, it makes the layer invisible.