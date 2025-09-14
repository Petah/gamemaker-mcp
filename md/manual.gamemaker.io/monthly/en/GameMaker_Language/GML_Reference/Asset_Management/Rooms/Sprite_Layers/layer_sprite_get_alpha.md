---
title: "layer_sprite_get_alpha"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/Sprite_Layers/layer_sprite_get_alpha.htm"
converted: "2025-09-14T03:59:37.226Z"
---

# layer\_sprite\_get\_alpha

This function can be used to get the alpha value of the sprite element. You give the sprite element ID (which you get when you create a sprite element using [layer\_sprite\_create()](layer_sprite_create.md) or when you use the function [layer\_sprite\_get\_id()](layer_sprite_get_id.md)), and the function will return a value between 0 (fully transparent) and 1 (fully opaque).

#### Syntax:

layer\_sprite\_get\_alpha(sprite\_element\_id);

| Argument | Type | Description |
| --- | --- | --- |
| sprite_element_id | Sprite Element ID | The unique ID value of the sprite element to get the information from |

#### Returns:

[Real](../../../../../../../../GameMaker_Language/GML_Overview/Data_Types.md) (from 0 to 1)

#### Example:

var lay\_id = layer\_get\_id("sprite\_sky");
var spr\_id = layer\_sprite\_get\_id(lay\_id, "Clouds");
if (layer\_sprite\_get\_alpha(spr\_id) < 0.1)
{
    layer\_sprite\_destroy(spr\_id);
}

The above code will get the layer handle for the layer named "sprite\_sky" and then use that to get the ID of the sprite element on that layer. This ID is then used to check the element alpha and if it is less than 0.1, then the layer element is destroyed.