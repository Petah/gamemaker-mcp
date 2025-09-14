---
title: "layer_text_frameh"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/Text_Functions/layer_text_frameh.htm"
converted: "2025-09-14T03:59:37.620Z"
---

# layer\_text\_frameh

This function changes the frame height of the given Text Element.

#### Syntax:

layer\_text\_frameh(text\_element\_id, height);

| Argument | Type | Description |
| --- | --- | --- |
| text_element_id | Text Element ID | The text element ID, retrieved from layer_text_create or layer_text_get_id. |
| height | Real | The new frame height of the element. |

#### Returns:

N/A

#### Example:

var \_text1\_id = layer\_text\_get\_id("Assets", "text1");

layer\_text\_framew(\_text1\_id, room\_width \* 0.5);
layer\_text\_frameh(\_text1\_id, 64);

This gets the ID of the Text Element text1 from the layer Assets, then sets its frame width to half the room's size, and the frame height to 64.