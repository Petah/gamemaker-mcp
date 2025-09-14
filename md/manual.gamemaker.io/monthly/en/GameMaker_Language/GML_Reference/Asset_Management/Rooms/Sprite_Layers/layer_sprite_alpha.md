---
title: "layer_sprite_alpha"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/Sprite_Layers/layer_sprite_alpha.htm"
converted: "2025-09-14T03:59:37.102Z"
---

# layer\_sprite\_alpha

This function controls the alpha (transparency) of the sprite on the asset layer. You give the sprite element ID (which you get when you create a sprite element using [layer\_sprite\_create()](layer_sprite_create.md) or when you use the function [layer\_sprite\_get\_id()](layer_sprite_get_id.md)), and then set the alpha value to use. Alpha can be between 0 (fully transparent) and 1 (fully opaque) with the default alpha value for the sprite element being 1. Note that if the layer the sprite element has been assigned to is not visible - or the element itself has been made invisible - you will not see any difference with this function until the layer or element has been made visible again.

#### Syntax:

layer\_sprite\_alpha(sprite\_element\_id, alpha);

| Argument | Type | Description |
| --- | --- | --- |
| sprite_element_id | Sprite Element ID | The unique ID value of the sprite element to change |
| alpha | Real | The alpha for sprite sprite, from 0 to 1 (default is 1) |

#### Returns:

N/A

#### Example:

var lay\_id = layer\_get\_id("Asset\_sky");
var spr\_id = layer\_sprite\_get\_id(lay\_id, "Clouds");
layer\_sprite\_alpha(spr\_id, random(1));

The above code gets the ID value of the sprite asset named "Clouds" assigned to the layer "Asset\_sky" and then sets its alpha to a random value between 0 and 1.