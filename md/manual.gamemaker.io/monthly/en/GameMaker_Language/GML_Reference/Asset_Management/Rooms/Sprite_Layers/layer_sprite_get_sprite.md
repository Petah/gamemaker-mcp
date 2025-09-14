---
title: "layer_sprite_get_sprite"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/Sprite_Layers/layer_sprite_get_sprite.htm"
converted: "2025-09-14T03:59:37.308Z"
---

# layer\_sprite\_get\_sprite

This function can be used to get the current sprite index of the sprite element. You give the sprite element ID (which you get when you create a sprite element using [layer\_sprite\_create](layer_sprite_create.md) or when you use the function [layer\_sprite\_get\_id](layer_sprite_get_id.md)), and the function will return a real value that represents the sprite index being shown. If the element has no sprite assigned, the function will return -1.

#### Syntax:

layer\_sprite\_get\_sprite(sprite\_element\_id);

| Argument | Type | Description |
| --- | --- | --- |
| sprite_element_id | Sprite Element ID | The unique ID value of the sprite element to get the information from |

#### Returns:

[Sprite Asset](../../../../../../../../The_Asset_Editors/Sprites.md) or -1

#### Example:

var lay\_id = layer\_get\_id("sprite\_sky");
var spr\_id = layer\_sprite\_get\_id(lay\_id, "Clouds");
if layer\_sprite\_get\_sprite(spr\_id) != spr\_Clouds
{
    layer\_sprite\_change(spr\_id, spr\_Clouds);
}

The above code will get the layer handle for the layer named "sprite\_sky" and then use that to get the ID of the sprite element on that layer. This ID is then used to check the sprite assigned to the element, setting it to the sprite "spr\_Clouds" if it is not already.