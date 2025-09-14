---
title: "layer_text_get_charspacing"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/Text_Functions/layer_text_get_charspacing.htm"
converted: "2025-09-14T03:59:37.695Z"
---

# layer\_text\_get\_charspacing

This function returns the character spacing (in pixels) of the given Text Element. This can be changed with [layer\_text\_charspacing](layer_text_charspacing.md).

#### Syntax:

layer\_text\_get\_charspacing(text\_element\_id);

| Argument | Type | Description |
| --- | --- | --- |
| text_element_id | Text Element ID | The text element ID, retrieved from layer_text_create or layer_text_get_id. |

#### Returns:

[Real](../../../../GML_Overview/Data_Types.md)

#### Example:

var \_text1\_id = layer\_text\_get\_id("Assets", "text1");

var \_text1\_charsp = layer\_text\_get\_charspacing(\_text1\_id);

layer\_text\_charspacing(\_text1\_id, \_text1\_charsp + 2);

This gets the ID of the Text Element text1 from the layer Assets, gets its character spacing value and applies it back, increased by 2.