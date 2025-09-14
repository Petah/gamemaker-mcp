---
title: "layer_text_valign"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/Text_Functions/layer_text_valign.htm"
converted: "2025-09-14T03:59:38.082Z"
---

# layer\_text\_valign

This function changes the vertical alignment of the given Text Element. You can supply any one of the following constants:

| Constant | Description |
| --- | --- |
| textalign_top | The text will be aligned to the top of the frame. |
| textalign_middle | The text will be centred vertically in the frame. |
| textalign_bottom | The text will be aligned to the bottom of the frame. |

#### Syntax:

layer\_text\_valign(text\_element\_id, valign);

| Argument | Type | Description |
| --- | --- | --- |
| text_element_id | Text Element ID | The text element ID, retrieved from layer_text_create or layer_text_get_id. |
| valign | Text Vertical Alignment Constant | Vertical alignment to use |

#### Returns:

N/A

#### Example:

var \_text1\_id = layer\_text\_get\_id("Assets", "text1");

text1\_old\_halign = layer\_text\_get\_halign(\_text1\_id);
text1\_old\_valign = layer\_text\_get\_valign(\_text1\_id);

layer\_text\_halign(\_text1\_id, textalign\_center);
layer\_text\_valign(\_text1\_id, textalign\_bottom);

This gets the ID of the Text Element text1 from the layer Assets, and stores its horizontal and vertical alignments into variables, before changing the alignments. These variables can later be used to reset the alignment values to what they were before they were changed here.