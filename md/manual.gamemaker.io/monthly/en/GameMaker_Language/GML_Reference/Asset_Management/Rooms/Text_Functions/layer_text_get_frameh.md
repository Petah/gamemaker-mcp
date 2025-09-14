---
title: "layer_text_get_frameh"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/Text_Functions/layer_text_get_frameh.htm"
converted: "2025-09-14T03:59:37.730Z"
---

# layer\_text\_get\_frameh

This function returns the frame height of the given Text Element. This can be changed with [layer\_text\_frameh](layer_text_frameh.md).

#### Syntax:

layer\_text\_get\_frameh(text\_element\_id);

| Argument | Type | Description |
| --- | --- | --- |
| text_element_id | Text Element ID | The text element ID, retrieved from layer_text_create or layer_text_get_id. |

#### Returns:

[Real](../../../../../../../../GameMaker_Language/GML_Overview/Data_Types.md)

#### Example:

var \_text1\_id = layer\_text\_get\_id("Assets", "text1");

var \_text1\_x = layer\_text\_get\_x(\_text1\_id) - layer\_text\_get\_xorigin(\_text1\_id);
var \_text1\_y = layer\_text\_get\_y(\_text1\_id) - layer\_text\_get\_yorigin(\_text1\_id);
var \_text1\_framew = layer\_text\_get\_framew(\_text1\_id);
var \_text1\_frameh = layer\_text\_get\_frameh(\_text1\_id);

draw\_set\_color(c\_blue);
draw\_roundrect(\_text1\_x, \_text1\_y, \_text1\_x + \_text1\_framew, \_text1\_y + \_text1\_frameh, 0);
draw\_set\_color(c\_white);

This gets the ID of the Text Element text1 from the layer Assets, then gets its text position (by subtracting the element's origin from its X/Y position) and its frame width and height.

Then it draws a blue [round rectangle](../../../Drawing/Basic_Forms/draw_roundrect.md) that covers the entire frame. To ensure this appears behind the text, the Object Instance needs to be in a layer with a depth higher than the Asset Layer where the Text Element is placed.