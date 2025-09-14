---
title: "layer_text_yscale"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/Text_Functions/layer_text_yscale.htm"
converted: "2025-09-14T03:59:38.225Z"
---

# layer\_text\_yscale

This function changes the vertical scale of the given Text Element. 1 is the default scale.

#### Syntax:

layer\_text\_yscale(text\_element\_id, yscale);

| Argument | Type | Description |
| --- | --- | --- |
| text_element_id | Text Element ID | The text element ID, retrieved from layer_text_create or layer_text_get_id. |
| yscale | Real | The new Y scale of the Text Element. |

#### Returns:

N/A

#### Example:

var \_zoom = (mouse\_wheel\_up() - mouse\_wheel\_down()) \* 0.1;

var \_text1\_id = layer\_text\_get\_id("Assets", "text1");

var \_text1\_xscale = layer\_text\_get\_xscale(\_text1\_id);
var \_text1\_yscale = layer\_text\_get\_yscale(\_text1\_id);

layer\_text\_xscale(\_text1\_id, \_text1\_xscale + \_zoom);
layer\_text\_yscale(\_text1\_id, \_text1\_yscale + \_zoom);

This scales the Text Element based on input from the mouse wheel. It first gets the wheel's delta input, by subtracting an up scroll from a down scroll (returning 1 for up and \-1 for down). It multiplies that by 0.1 to slow down the scale change that takes place in one frame.

Then it gets the ID of the Text Element text1 from the layer Assets, and gets its xscale and yscale. It applies each component back, with the zoom value added to it.

Since this code is for a Step event, you should initialise the \_text1\_id variable in the Create event.