---
title: "layer_text_framew"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/Text_Functions/layer_text_framew.htm"
converted: "2025-09-14T03:59:37.634Z"
---

# layer\_text\_framew

This function changes the frame width of the given Text Element. This affects [wrapping](layer_text_wrap.md) and the [justified alignment](layer_text_halign.md).

#### Syntax:

layer\_text\_framew(text\_element\_id, width);

| Argument | Type | Description |
| --- | --- | --- |
| text_element_id | Text Element ID | The text element ID, retrieved from layer_text_create or layer_text_get_id. |
| width | Real | The new frame width of the element. |

#### Returns:

N/A

#### Example:

var \_text1\_id = layer\_text\_get\_id("Assets", "text1");

layer\_text\_framew(\_text1\_id, room\_width \* 0.5);
layer\_text\_frameh(\_text1\_id, 64);

This gets the ID of the Text Element text1 from the layer Assets, then sets its frame width to half the room's size, and the frame height to 64.