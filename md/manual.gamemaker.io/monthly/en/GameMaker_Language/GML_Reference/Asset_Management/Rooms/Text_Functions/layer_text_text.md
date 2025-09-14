---
title: "layer_text_text"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/Text_Functions/layer_text_text.htm"
converted: "2025-09-14T03:59:38.057Z"
---

# layer\_text\_text

This function changes the text of the given Text Element. You supply the Text Element to modify, and the string that should appear on that element.

#### Syntax:

layer\_text\_text(text\_element\_id, text);

| Argument | Type | Description |
| --- | --- | --- |
| text_element_id | Text Element ID | The text element ID, retrieved from layer_text_create or layer_text_get_id. |
| text | String | The text string that appears on the element. |

#### Returns:

N/A

#### Example:

var \_number = 5;

var \_text1\_id = layer\_text\_get\_id("Assets", "text1");

var \_text1\_text = layer\_text\_get\_text(\_text1\_id);

layer\_text\_text(\_text1\_id, $"{\_text1\_text} ({\_number})");

This gets the ID of the Text Element text1 from the layer Assets, and retrieves its text string. It then reapplies the text string back to the element, but with a number value added to it, inside parentheses. For example, if the text was "Waiting for players" it will become "Waiting for players (5)".