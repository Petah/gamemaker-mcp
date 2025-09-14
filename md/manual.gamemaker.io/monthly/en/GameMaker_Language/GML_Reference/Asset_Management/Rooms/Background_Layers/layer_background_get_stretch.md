---
title: "layer_background_get_stretch"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/Background_Layers/layer_background_get_stretch.htm"
converted: "2025-09-14T03:59:35.468Z"
---

# layer\_background\_get\_stretch

This function can be used to get the stretched state of the background element sprite. You give the background element ID (which you get when you create a background element using [layer\_background\_create()](layer_background_create.md) or when you use the function [layer\_background\_get\_id()](layer_background_get_id.md)), and the function will return either true if the element sprite is currently stretched to fit the room, or false if it is not.

#### Syntax:

layer\_background\_get\_stretch(background\_element\_id);

| Argument | Type | Description |
| --- | --- | --- |
| background_element_id | Background Element ID | The unique ID value of the background element to get the information from |

#### Returns:

[Boolean](../../../../GML_Overview/Data_Types.md)

#### Example:

var lay\_id = layer\_get\_id("Background\_sky");
var back\_id = layer\_background\_get\_id(lay\_id);
if (layer\_background\_get\_stretch(back\_id))
{
    layer\_background\_stretch(back\_id, false);
}

The above code will get the layer handle for the layer named "Background\_sky" and then use that to get the ID of the background element on that layer. This ID is then used to check and see if the element sprite will be stretched to fit the room or not and if it is stretched, then this property is set to false.