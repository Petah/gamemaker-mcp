---
title: "layer_text_get_alpha"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/Text_Functions/layer_text_get_alpha.htm"
converted: "2025-09-14T03:59:37.651Z"
---

# layer\_text\_get\_alpha

This function returns the alpha (opacity) of the given Text Element. This can be changed with [layer\_text\_alpha](layer_text_alpha.md).

#### Syntax:

layer\_text\_get\_alpha(text\_element\_id);

| Argument | Type | Description |
| --- | --- | --- |
| text_element_id | Text Element ID | The text element ID, retrieved from layer_text_create or layer_text_get_id. |

#### Returns:

[Real](../../../../GML_Overview/Data_Types.md)

#### Example:

var \_text1\_id = layer\_text\_get\_id("Assets", "text1");

var \_text1\_alpha = layer\_text\_get\_alpha(\_text1\_id);

var \_target\_alpha = keyboard\_check(vk\_space) ? 1 : 0;

var \_new\_alpha = lerp(\_text1\_alpha, \_target\_alpha, 0.1);

layer\_text\_alpha(\_text1\_id, \_new\_alpha);

This gets the ID of the Text Element text1 from the layer Assets, and gets its alpha. It sets the target alpha based on input, being 1 (visible) when space is held, and 0 (invisible) otherwise.

It calculates a value between the current and the target alpha, moving the current alpha 10% (0.1) towards the target.

Finally it applies the new alpha to the element. Each frame it moves closer to the target alpha.

Since this code is for a Step event, you should initialise the \_text1\_id variable in the Create event.