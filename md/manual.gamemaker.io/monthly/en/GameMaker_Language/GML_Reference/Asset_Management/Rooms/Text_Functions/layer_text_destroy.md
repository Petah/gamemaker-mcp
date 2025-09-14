---
title: "layer_text_destroy"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/Text_Functions/layer_text_destroy.htm"
converted: "2025-09-14T03:59:37.573Z"
---

# layer\_text\_destroy

This function destroys the given Text Element.

#### Syntax:

layer\_text\_destroy(text\_element\_id);

| Argument | Type | Description |
| --- | --- | --- |
| text_element_id | Text Element ID | The text element ID, retrieved from layer_text_create or layer_text_get_id. |

#### Returns:

N/A

#### Example:

var \_text1\_id = layer\_text\_get\_id("Assets", "text1");

if (layer\_text\_exists("Assets", \_text1\_id))
{
    layer\_text\_destroy(\_text1\_id);
}

This gets the ID of the Text Element text1 from the Assets layer. It then checks whether that element exists, and if it does, it destroys it.