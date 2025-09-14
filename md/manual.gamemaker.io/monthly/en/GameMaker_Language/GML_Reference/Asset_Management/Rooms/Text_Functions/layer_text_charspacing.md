---
title: "layer_text_charspacing"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/Text_Functions/layer_text_charspacing.htm"
converted: "2025-09-14T03:59:37.539Z"
---

# layer\_text\_charspacing

This function changes the character spacing of the given Text Element. This is the space (in pixels) added between each character in the displayed string.

#### Syntax:

layer\_text\_charspacing(text\_element\_id, charspacing);

| Argument | Type | Description |
| --- | --- | --- |
| text_element_id | Text Element ID | The text element ID, retrieved from layer_text_create or layer_text_get_id. |
| charspacing | Real | The new character spacing for the element. |

#### Returns:

N/A

#### Example:

var \_text1\_id = layer\_text\_get\_id("Assets", "text1");

var \_text1\_charsp = layer\_text\_get\_charspacing(\_text1\_id);

layer\_text\_charspacing(\_text1\_id, \_text1\_charsp + 2);

This gets the ID of the Text Element text1 from the layer Assets, gets its character spacing value and applies it back, increased by 2.