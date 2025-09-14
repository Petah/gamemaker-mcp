---
title: "layer_text_get_blend"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/Text_Functions/layer_text_get_blend.htm"
converted: "2025-09-14T03:59:37.679Z"
---

# layer\_text\_get\_blend

This function returns the blend colour of the given Text Element. This can be changed with [layer\_text\_blend](layer_text_blend.md).

#### Syntax:

layer\_text\_get\_blend(text\_element\_id);

| Argument | Type | Description |
| --- | --- | --- |
| text_element_id | Text Element ID | The text element ID, retrieved from layer_text_create or layer_text_get_id. |

#### Returns:

[Real](../../../../../../../../GameMaker_Language/GML_Overview/Data_Types.md)

#### Example:

var \_text1\_id = layer\_text\_get\_id("Assets", "text1");

var \_text1\_blend = layer\_text\_get\_blend(\_text1\_id);

var \_target\_colour = keyboard\_check(vk\_space) ? c\_red : c\_white;

var \_new\_colour = merge\_colour(\_text1\_blend, \_target\_colour, 0.1);

layer\_text\_blend(\_text1\_id, \_new\_colour);

This gets the ID of the Text Element text1 from the layer Assets, and gets its blend colour. It sets the target colour based on input, being red when space is held, and white otherwise.

It calculates a colour between the current and the target colour, moving the current colour 10% (0.1) towards the target.

Finally it applies the new colour to the element. Each frame it moves closer to the target colour.

Since this code is for a Step event, you should initialise the \_text1\_id variable in the Create event.