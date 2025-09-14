---
title: "layer_text_angle"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/Text_Functions/layer_text_angle.htm"
converted: "2025-09-14T03:59:37.508Z"
---

# layer\_text\_angle

This function changes the angle (rotation) of the given Text Element.

#### Syntax:

layer\_text\_angle(text\_element\_id, angle);

| Argument | Type | Description |
| --- | --- | --- |
| text_element_id | Text Element ID | The text element ID, retrieved from layer_text_create or layer_text_get_id. |
| angle | Real | The new angle of the Text Element |

#### Returns:

N/A

#### Example:

var \_text1\_id = layer\_text\_get\_id("Assets", "text1");

var \_text1\_angle = layer\_text\_get\_angle(\_text1\_id);

layer\_text\_angle(\_text1\_id, \_text1\_angle + 5);

This gets the ID of the Text Element text1 from the layer Assets, and then gets its angle. It applies the angle back with 5 added to it, so the element rotates 5 degrees every frame.

Since this code is for a Step event, you should initialise the \_text1\_id variable in the Create event.