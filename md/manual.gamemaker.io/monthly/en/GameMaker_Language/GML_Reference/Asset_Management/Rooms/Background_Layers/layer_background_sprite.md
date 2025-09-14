---
title: "layer_background_sprite"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/Background_Layers/layer_background_sprite.htm"
converted: "2025-09-14T03:59:35.586Z"
---

# layer\_background\_sprite

Using this function you can set the sprite of the background element. You supply the background element ID (which you get when you create a background element using [layer\_background\_create()](layer_background_create.md) or when you use the function [layer\_background\_get\_id()](layer_background_get_id.md)), and then give a sprite to be used. The background element image will be replaced with the new sprite. If you give a value of -1, the element will have no sprite assigned (but will still exist and can have a sprite assigned again later).

This function also has the alias layer\_background\_change().

#### Syntax:

layer\_background\_sprite(background\_element\_id, sprite\_index)

| Argument | Type | Description |
| --- | --- | --- |
| background_element_id | Background Element ID | The unique ID value of the background element to change |
| sprite_index | Sprite Asset | The sprite to use for the background element |

#### Returns:

N/A

#### Example:

var lay\_id = layer\_get\_id("Background\_sky");
var back\_id = layer\_background\_get\_id(lay\_id);
if (layer\_background\_get\_sprite(back\_id) != spr\_Clouds)
{
    layer\_background\_sprite(back\_id, spr\_Clouds);
}

The above code will get the layer handle for the layer named "Background\_sky" and then use that to get the ID of the background element on that layer. This ID is then used to check the sprite assigned to the element, setting it to the sprite "spr\_Clouds" if it is not already.