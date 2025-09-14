---
title: "layer_text_font"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/Text_Functions/layer_text_font.htm"
converted: "2025-09-14T03:59:37.604Z"
---

# layer\_text\_font

This function changes the font used by the given Text Element.

#### Syntax:

layer\_text\_font(text\_element\_id, font);

| Argument | Type | Description |
| --- | --- | --- |
| text_element_id | Text Element ID | The text element ID, retrieved from layer_text_create or layer_text_get_id. |
| font | Font Asset | The Font to use to render the element's text. |

#### Returns:

N/A

#### Example:

var \_text1\_id = layer\_text\_get\_id("Assets", "text1");

var \_text1\_font = layer\_text\_get\_font(\_text1\_id);

if (!font\_exists(\_text1\_font))
{
    layer\_text\_font(\_text1\_id, Font2);
}

This gets the ID of the Text Element text1 from the layer Assets, and then gets its font. If the font does not exist, it applies the font Font2 to the element.