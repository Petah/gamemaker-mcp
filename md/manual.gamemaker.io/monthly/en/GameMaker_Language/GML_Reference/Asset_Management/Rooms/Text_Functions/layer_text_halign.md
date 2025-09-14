---
title: "layer_text_halign"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/Text_Functions/layer_text_halign.htm"
converted: "2025-09-14T03:59:37.979Z"
---

# layer\_text\_halign

This function changes the horizontal alignment of the given Text Element. You can supply any one of the following constants:

| Constant | Description |
| --- | --- |
| textalign_left | The text will be aligned to the left of the frame. |
| textalign_center | The text will be aligned in the centre of the frame. |
| textalign_right | The text will be aligned to the right of the frame. |
| textalign_justify | Spacing between words will be adjusted so each line fits the frame horizontally. |

#### Syntax:

layer\_text\_halign(text\_element\_id, halign);

| Argument | Type | Description |
| --- | --- | --- |
| text_element_id | Text Element ID | The text element ID, retrieved from layer_text_create or layer_text_get_id. |
| halign | Text Horizontal Alignment Constant | Horizontal alignment to use |

#### Returns:

N/A

#### Example:

var \_text1\_id = layer\_text\_get\_id("Assets", "text1");

text1\_old\_halign = layer\_text\_get\_halign(\_text1\_id);
text1\_old\_valign = layer\_text\_get\_valign(\_text1\_id);

layer\_text\_halign(\_text1\_id, textalign\_center);
layer\_text\_valign(\_text1\_id, textalign\_bottom);

This gets the ID of the Text Element text1 from the layer Assets, and stores its horizontal and vertical alignments into variables, before changing the alignments. These variables can later be used to reset the alignment values to what they were before they were changed here.