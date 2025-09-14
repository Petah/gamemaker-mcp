---
title: "layer_sprite_speed"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/Sprite_Layers/layer_sprite_speed.htm"
converted: "2025-09-14T03:59:37.390Z"
---

# layer\_sprite\_speed

This function sets the speed of an animating image that has been assigned to a sprite element.

You give the sprite element ID (which you get when you create a sprite element using [layer\_sprite\_create](layer_sprite_create.md) or when you use the function [layer\_sprite\_get\_id](layer_sprite_get_id.md)), and then set the animation speed. If the IDE has set the animation speed for the sprite used to be calculated as Frames Per Game Frame, then the speed value given is a _multiplier_, with 1 being the default value, and setting it to 0.5 will halve the animation speed, while setting it to 2 will double it. However, if the IDE has set the animation speed for the sprite used to be calculated as Frames Per Second, then the speed value given is a literal frames per second value, so setting this to 5, for example, will set the animation to play 5 frames every second that the game runs. If the sprite used has no sub-images, this function will have no effect.

#### Syntax:

layer\_sprite\_speed(sprite\_element\_id, speed);

| Argument | Type | Description |
| --- | --- | --- |
| sprite_element_id | Sprite Element ID | The unique ID value of the sprite element to change |
| speed | Real | The speed multiplier/value to use for the element |

#### Returns:

N/A

#### Example:

var \_lay\_id = layer\_get\_id("Assets\_water");
var \_spr\_id = layer\_sprite\_get\_id(\_lay\_id, "gfc\_water");
layer\_sprite\_speed(\_spr\_id, 0.5);

The above code gets the layer handle of the layer named "Assets\_water" and then uses that to get the ID of the given sprite element on that layer. This ID is then used to change the element's image speed.