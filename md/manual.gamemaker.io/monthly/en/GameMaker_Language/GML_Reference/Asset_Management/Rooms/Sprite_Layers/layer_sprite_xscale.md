---
title: "layer_sprite_xscale"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/Sprite_Layers/layer_sprite_xscale.htm"
converted: "2025-09-14T03:59:37.418Z"
---

# layer\_sprite\_xscale

Using this function you can change whether the given sprite element on a layer should be scaled along the x axis or not. You give the sprite element ID (which you get when you create a sprite element using [layer\_sprite\_create()](layer_sprite_create.md) or when you use the function [layer\_sprite\_get\_id()](layer_sprite_get_id.md)), and then set the scale value. A scale of 1 indicates no scaling (1:1), smaller values will scale down (0.5, for example, will half the width of the sprite used), larger values will scale up, and negative values will flip the sprite and scale it unless the value used is exactly -1 (in which case the sprite used is just flipped right-to-left about its origin position with no scaling).

#### Syntax:

layer\_sprite\_xscale(sprite\_element\_id, xscale);

| Argument | Type | Description |
| --- | --- | --- |
| sprite_element_id | Sprite Element ID | The unique ID value of the sprite element to change |
| xscale | Real | The xscale value (default is 1) |

#### Returns:

N/A

#### Example:

var asset\_sprite = layer\_sprite\_get\_id(layer, "gfc\_Trees");
if layer\_sprite\_get\_xscale(asset\_sprite) != 1 || layer\_sprite\_get\_yscale(asset\_sprite) != 1
{
    layer\_sprite\_xscale(asset\_sprite, 1);
    layer\_sprite\_yscale(asset\_sprite, 1);
}

The above code will check the sprite element assigned to the layer the instance running the code is on and if it is scaled in either direction it will set both the x-axis scale and y-axis scale to 1.