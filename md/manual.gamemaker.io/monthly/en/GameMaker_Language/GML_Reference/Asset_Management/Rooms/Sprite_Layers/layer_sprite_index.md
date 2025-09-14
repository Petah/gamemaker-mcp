---
title: "layer_sprite_index"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/Sprite_Layers/layer_sprite_index.htm"
converted: "2025-09-14T03:59:37.376Z"
---

# layer\_sprite\_index

This function can be used to set the image index of a sprite asset which has multiple sub-images on a layer. You give the sprite element ID (which you get when you create a sprite element using [layer\_sprite\_create()](layer_sprite_create.md) or when you use the function [layer\_sprite\_get\_id()](layer_sprite_get_id.md)), and then set the image index to use. If you set a value outside of the range of sub-images, then the image index will loop around.

#### Syntax:

layer\_sprite\_index(sprite\_element\_id, image\_index);

| Argument | Type | Description |
| --- | --- | --- |
| sprite_element_id | Sprite Element ID | The unique ID value of the sprite element to set |
| index | Real | The image index to use for the sprite |

#### Returns:

N/A

#### Example:

var lay\_id = layer\_get\_id("sprite\_trees");
var spr\_id = layer\_sprite\_get\_id(lay\_id, "gfc\_trees");
layer\_sprite\_index(spr\_id, 1);

The above code will get the layer handle for the layer named "sprite\_trees" and then use that to get the ID of the given sprite element on that layer. This ID is then used to change the element image index.