---
title: "layer_sprite_change"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/Sprite_Layers/layer_sprite_change.htm"
converted: "2025-09-14T03:59:37.168Z"
---

# layer\_sprite\_change

Using this function you can change the sprite assigned to a given sprite element on a layer.

You give the sprite element ID (which you get when you create a sprite element using [layer\_sprite\_create](layer_sprite_create.md) or when you use the function [layer\_sprite\_get\_id](layer_sprite_get_id.md)), and then supply a sprite index element asset will be changed. Note that if the sprite has sub-images then it will animate too (this can be controlled using the [layer\_sprite\_index](layer_sprite_index.md) and [layer\_sprite\_speed](layer_sprite_speed.md) functions). Note that you can assign a value of \-1 as the new sprite and no sprite will be shown, although the element will still exist and can still be changed again later.

#### Syntax:

layer\_sprite\_change(sprite\_element\_id, sprite\_index)

| Argument | Type | Description |
| --- | --- | --- |
| sprite_element_id | Sprite Element ID | The unique ID value of the sprite element to change |
| sprite_index | Sprite Asset | The new sprite to use |

#### Returns:

N/A

#### Example:

var s = layer\_sprite\_get\_id(layer, global.asset\_sprite);
if (layer\_sprite\_get\_sprite(s) != spr\_nighttime)
{
    layer\_sprite\_change(s, spr\_nighttime);
}

The above code checks the sprite index of the element with the ID stored in the global variable global.asset\_sprite and if it is not spr\_nighttime then that sprite is assigned to the element.