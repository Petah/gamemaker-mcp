---
title: "layer_sprite_angle"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/Sprite_Layers/layer_sprite_angle.htm"
converted: "2025-09-14T03:59:37.128Z"
---

# layer\_sprite\_angle

Using this function you can change the angle for the given sprite element on a layer. You give the sprite element ID (which you get when you create a sprite element using [layer\_sprite\_create()](layer_sprite_create.md) or when you use the function [layer\_sprite\_get\_id()](layer_sprite_get_id.md)), and then set the angle value, from 0 to 359 anti-clockwise, where 0 is to the right, 90 is to the top, 180 is to the left and 270 is to the bottom. If you set a value greater than 360 this will be looped to bring it within the 0 - 359 range.

#### Syntax:

layer\_sprite\_angle(sprite\_element\_id, angle);

| Argument | Type | Description |
| --- | --- | --- |
| sprite_element_id | Sprite Element ID | The unique ID value of the sprite element to change |
| angle | Real | The angle of the sprite (default is 0) |

#### Returns:

N/A

#### Example:

var asset\_sprite = layer\_sprite\_get\_id(layer, "gfc\_Trees");
if (layer\_sprite\_get\_angle(asset\_sprite) != 0)
{
    layer\_sprite\_angle(asset\_sprite, 0);
}

The above code will check the sprite element assigned to the layer the instance running the code is on and if its angle is not 0 it will set it to 0.