---
title: "layer_sprite_get_xscale"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/Sprite_Layers/layer_sprite_get_xscale.htm"
converted: "2025-09-14T03:59:37.336Z"
---

# layer\_sprite\_get\_xscale

This function can be used to get the current scale multiplier along the x axis for the sprite element. You give the sprite element ID (which you get when you create a sprite element using [layer\_sprite\_create()](layer_sprite_create.md) or when you use the function [layer\_sprite\_get\_id()](layer_sprite_get_id.md)), and the function will return real value for the x scale, where 1 is no scaling.

#### Syntax:

layer\_sprite\_get\_xscale(sprite\_element\_id);

| Argument | Type | Description |
| --- | --- | --- |
| sprite_element_id | Sprite Element ID | The unique ID value of the sprite element to get the information from |

#### Returns:

[Real](../../../../../../../../GameMaker_Language/GML_Overview/Data_Types.md)

#### Example:

var lay\_id = layer\_get\_id("sprite\_sky");
var spr\_id = layer\_sprite\_get\_id(lay\_id, "Clouds");
if (layer\_sprite\_get\_xscale(spr\_id) != 1)
{
    layer\_sprite\_xscale(spr\_id, 1);
}

The above code will get the layer handle for the layer named "sprite\_sky" and then use that to get the ID of the sprite element on that layer. This ID is then used to check the xscale value and if it is anything other than 1 it is set to 1.