---
title: "layer_text_get_text"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/Text_Functions/layer_text_get_text.htm"
converted: "2025-09-14T03:59:37.813Z"
---

# layer\_text\_get\_text

This function returns the text string of the given Text Element. This can be changed with [layer\_text\_text](layer_text_text.md).

#### Syntax:

layer\_text\_get\_text(text\_element\_id);

| Argument | Type | Description |
| --- | --- | --- |
| text_element_id | Text Element ID | The text element ID, retrieved from layer_text_create or layer_text_get_id. |

#### Returns:

[String](../../../../GML_Overview/Data_Types.md)

#### Example:

var \_number = 5;

var \_text1\_id = layer\_text\_get\_id("Assets", "text1");

var \_text1\_text = layer\_text\_get\_text(\_text1\_id);

layer\_text\_text(\_text1\_id, $"{\_text1\_text} ({\_number})");

This gets the ID of the Text Element text1 from the layer Assets, and retrieves its text string. It then reapplies the text string back to the element, but with a number value added to it, inside parentheses. For example, if the text was "Waiting for players" it will become "Waiting for players (5)".