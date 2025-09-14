---
title: "layer_text_get_id"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/Text_Functions/layer_text_get_id.htm"
converted: "2025-09-14T03:59:37.782Z"
---

# layer\_text\_get\_id

This function returns the ID of a Text Element which was placed in the Room Editor. This ID can be used in the [Text Element Functions](Text_Elements.md).

You must provide a layer to check in, and the name of the text element as set in the Room Editor, as a string:

![](../../../../../assets/Images/Asset_Editors/Room_Text/Room_text_element_name.png)

#### Syntax:

layer\_text\_get\_id(layer\_name\_or\_id, text\_element\_name);

| Argument | Type | Description |
| --- | --- | --- |
| layer_name_or_id | String or Layer | The layer to check. You can supply the layer name as a string, or the layer ID returned from a function like layer_get_id or layer_create. |
| text_element_name | String | The name of the Text Element as a string, see image above. |

#### Returns:

[Text Element ID](layer_text_get_id.md)

#### Example:

var \_text1\_id = layer\_text\_get\_id("Assets", "text1");

if (layer\_text\_exists("Assets", \_text1\_id))
{
    layer\_text\_destroy(\_text1\_id);
}

This gets the ID of the Text Element text1 from the Assets layer. It then checks whether that element exists, and if it does, it destroys it.