---
title: "layer_sprite_get_speed"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/Sprite_Layers/layer_sprite_get_speed.htm"
converted: "2025-09-14T03:59:37.295Z"
---

# layer\_sprite\_get\_speed

This function can be used to get the current speed multiplier value of the sprite element. You give the sprite element ID (which you get when you create a sprite element using [layer\_sprite\_create()](layer_sprite_create.md) or when you use the function [layer\_sprite\_get\_id()](layer_sprite_get_id.md)), and the function will return real value that represents the speed multiplier being used to animate the sprite. Default value is 1.

#### Syntax:

layer\_sprite\_get\_speed(sprite\_element\_id);

| Argument | Type | Description |
| --- | --- | --- |
| sprite_element_id | Sprite Element ID | The unique ID value of the sprite element to get the information from |

#### Returns:

[Real](../../../../../../../../GameMaker_Language/GML_Overview/Data_Types.md)

#### Example:

var lay\_id = layer\_get\_id("sprite\_sky");
var spr\_id = layer\_sprite\_get\_id(lay\_id, "Clouds");
if (layer\_sprite\_get\_speed(spr\_id) > 0)
{
    layer\_sprite\_speed(spr\_id, 0);
}

The above code will get the layer handle for the layer named "sprite\_sky" and then use that to get the ID of the sprite element on that layer. This ID is then used to check the animation speed for the element and if it is greater than 0, it is set to 0.