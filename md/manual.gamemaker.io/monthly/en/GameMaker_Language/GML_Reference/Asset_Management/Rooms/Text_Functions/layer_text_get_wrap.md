---
title: "layer_text_get_wrap"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/Text_Functions/layer_text_get_wrap.htm"
converted: "2025-09-14T03:59:37.848Z"
---

# layer\_text\_get\_wrap

This function returns whether wrapping is enabled (true) or disabled (false) in the given Text Element. This can be changed with [layer\_text\_wrap](layer_text_wrap.md).

#### Syntax:

layer\_text\_get\_wrap(text\_element\_id);

| Argument | Type | Description |
| --- | --- | --- |
| text_element_id | Text Element ID | The text element ID, retrieved from layer_text_create or layer_text_get_id. |

#### Returns:

[Boolean](../../../../GML_Overview/Data_Types.md)

#### Example:

var \_text1\_id = layer\_text\_get\_id("Assets", "text1");

var \_text1\_wrap = layer\_text\_get\_wrap(\_text1\_id);

layer\_text\_wrap(\_text1\_id, !\_text1\_wrap);

This gets the ID of the Text Element text1 from the layer Assets, and gets the wrapping boolean value. It then reapplies the boolean value after flipping it, so if wrapping is disabled, it will be enabled, and vice versa.