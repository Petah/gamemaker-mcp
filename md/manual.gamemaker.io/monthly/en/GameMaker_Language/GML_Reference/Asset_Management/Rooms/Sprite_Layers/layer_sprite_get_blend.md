---
title: "layer_sprite_get_blend"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/Sprite_Layers/layer_sprite_get_blend.htm"
converted: "2025-09-14T03:59:37.256Z"
---

# layer\_sprite\_get\_blend

This function can be used to get the blend colour of the sprite element. You give the sprite element ID (which you get when you create a sprite element using [layer\_sprite\_create()](layer_sprite_create.md) or when you use the function [layer\_sprite\_get\_id()](layer_sprite_get_id.md)), and the function will return real value that represents the colour assigned.

#### Syntax:

layer\_sprite\_get\_blend(sprite\_element\_id);

| Argument | Type | Description |
| --- | --- | --- |
| sprite_element_id | Sprite Element ID | The unique ID value of the sprite element to get the information from |

#### Returns:

[Colour](../../../Drawing/Colour_And_Alpha/Colour_And_Alpha.md)

#### Example:

var lay\_id = layer\_get\_id("sprite\_sky");
var back\_id = layer\_sprite\_get\_id(lay\_id, "Clouds");
if (layer\_sprite\_get\_blend(back\_id) == c\_white)
{
    layer\_sprite\_blend(back\_id, make\_colour\_rgb(random(255), random(255), 255));
}

The above code will get the layer handle for the layer named "sprite\_sky" and then use that to get the ID of the sprite element on that layer. This ID is then used to check the element blend colour and if it is equivalent to the constant c\_white, then the element blend is set to a random colour.