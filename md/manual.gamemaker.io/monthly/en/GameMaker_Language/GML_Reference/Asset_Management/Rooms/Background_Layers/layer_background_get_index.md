---
title: "layer_background_get_index"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/Background_Layers/layer_background_get_index.htm"
converted: "2025-09-14T03:59:35.404Z"
---

# layer\_background\_get\_index

This function can be used to get the current image index value of the background element. You give the background element ID (which you get when you create a background element using [layer\_background\_create()](layer_background_create.md) or when you use the function [layer\_background\_get\_id()](layer_background_get_id.md)), and the function will return real value that represents the image index being shown for the sprite. The function will return -1 if either the background element doesn't exist or the element doesn't have a valid sprite assigned to it.

#### Syntax:

layer\_background\_get\_index(background\_element\_id);

| Argument | Type | Description |
| --- | --- | --- |
| background_element_id | Background Element ID | The unique ID value of the background element to get the information from |

#### Returns:

[Real](../../../../GML_Overview/Data_Types.md) (the current sprite image index or -1)

#### Example:

var lay\_id = layer\_get\_id("Background\_sky");
var back\_id = layer\_background\_get\_id(lay\_id);
if (layer\_background\_get\_index(back\_id) < 4)
{
    layer\_background\_index(back\_id, 4);
}

The above code will get the layer handle for the layer named "Background\_sky" and then use that to get the ID of the background element on that layer. This ID is then used to check if the image index for the element is less than 4, and if so it is set to 4.