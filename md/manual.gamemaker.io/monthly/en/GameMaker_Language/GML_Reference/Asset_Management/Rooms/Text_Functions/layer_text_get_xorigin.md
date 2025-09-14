---
title: "layer_text_get_xorigin"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/Text_Functions/layer_text_get_xorigin.htm"
converted: "2025-09-14T03:59:37.875Z"
---

# layer\_text\_get\_xorigin

This function returns the X origin of the given Text Element. This can be changed with [layer\_text\_xorigin](layer_text_xorigin.md).

#### Syntax:

layer\_text\_get\_xorigin(text\_element\_id);

| Argument | Type | Description |
| --- | --- | --- |
| text_element_id | Text Element ID | The text element ID, retrieved from layer_text_create or layer_text_get_id. |

#### Returns:

[Real](../../../../../../../../GameMaker_Language/GML_Overview/Data_Types.md)

#### Example:

var \_text1\_id = layer\_text\_get\_id("Assets", "text1");

var \_text1\_finalx = layer\_text\_get\_x(\_text1\_id) - layer\_text\_get\_xorigin(\_text1\_id);
var \_text1\_finaly = layer\_text\_get\_y(\_text1\_id) - layer\_text\_get\_yorigin(\_text1\_id);

draw\_sprite(spr\_arrow, 0, \_text1\_finalx, \_text1\_finaly);

This gets the ID of the Text Element text1 from the layer Assets, and then calculates the final position of the text by reading the X/Y coordinates of the element and subtracting the origin from them.

It then draws an arrow at that position. That means this code would need to run in a Draw event for it to work. Keep in mind that you would ideally want to initialise the text1\_id variable in the Create event.