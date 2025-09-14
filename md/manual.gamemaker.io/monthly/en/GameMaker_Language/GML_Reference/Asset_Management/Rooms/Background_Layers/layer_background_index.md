---
title: "layer_background_index"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/Background_Layers/layer_background_index.htm"
converted: "2025-09-14T03:59:35.555Z"
---

# layer\_background\_index

This function can be used to set the image index of the background sprite which has multiple sub-images. You give the background element ID (which you get when you create a background element using [layer\_background\_create()](layer_background_create.md) or when you use the function [layer\_background\_get\_id()](layer_background_get_id.md)), and then set the image index to use. If you set a value outside of the range of sub-images, then the image index will loop around.

#### Syntax:

layer\_background\_index(background\_element\_id, image\_index);

| Argument | Type | Description |
| --- | --- | --- |
| background_element_id | Background Element ID | The unique ID value of the background element to change |
| index | Real | The image index to use for the background |

#### Returns:

N/A

#### Example:

var lay\_id = layer\_get\_id("Background\_trees");
var back\_id = layer\_background\_get\_id(lay\_id);
layer\_background\_index(back\_id, 1);

The above code will get the layer handle for the layer named "Background\_trees" and then use that to get the ID of the background element on that layer. This ID is then used to change the element image index.