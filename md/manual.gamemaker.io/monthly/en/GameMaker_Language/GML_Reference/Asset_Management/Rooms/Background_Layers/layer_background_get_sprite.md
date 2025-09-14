---
title: "layer_background_get_sprite"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/Background_Layers/layer_background_get_sprite.htm"
converted: "2025-09-14T03:59:35.444Z"
---

# layer\_background\_get\_sprite

This function can be used to get the current sprite of the background element.

You give the background element ID (which you get when you create a background element using [layer\_background\_create](layer_background_create.md) or when you use the function [layer\_background\_get\_id](layer_background_get_id.md)), and the function will return a handle that represents the sprite being shown. If the element has no sprite assigned, the function will return an invalid handle (-1).

#### Syntax:

layer\_background\_get\_sprite(background\_element\_id);

| Argument | Type | Description |
| --- | --- | --- |
| background_element_id | Background Element ID | The unique ID value of the background element to get the information from |

#### Returns:

[Sprite Asset](../../../../../The_Asset_Editors/Sprites.md)

#### Example:

var \_lay\_id = layer\_get\_id("Background\_sky");
var \_back\_id = layer\_background\_get\_id(\_lay\_id);
if (layer\_background\_get\_sprite(\_back\_id) != spr\_clouds)
{
    layer\_background\_sprite(\_back\_id, spr\_clouds);
}

The above code will get the layer handle for the layer named "Background\_sky" and then use that to get the ID of the background element on that layer. This ID is then used to check the sprite assigned to the element, setting it to the sprite spr\_clouds if it is not already.