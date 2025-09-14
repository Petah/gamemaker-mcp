---
title: "layer_text_linespacing"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/Text_Functions/layer_text_linespacing.htm"
converted: "2025-09-14T03:59:38.032Z"
---

# layer\_text\_linespacing

This function changes the line spacing of the given Text Element. This is the space (in pixels) added between each line in the displayed string.

#### Syntax:

layer\_text\_linespacing(text\_element\_id, linespacing);

| Argument | Type | Description |
| --- | --- | --- |
| text_element_id | Text Element ID | The text element ID, retrieved from layer_text_create or layer_text_get_id. |
| linespacing | Real | The new line spacing for the element. |

#### Returns:

N/A

#### Example:

var \_text1\_id = layer\_text\_get\_id("Assets", "text1");

var \_text1\_linesp = layer\_text\_get\_linespacing(\_text1\_id);

layer\_text\_linespacing(\_text1\_id, \_text1\_linesp + 4);

This gets the ID of the Text Element text1 from the layer Assets, gets its line spacing value and applies it back, increased by 4.