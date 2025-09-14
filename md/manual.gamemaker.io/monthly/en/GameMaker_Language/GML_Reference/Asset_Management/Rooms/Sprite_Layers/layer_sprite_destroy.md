---
title: "layer_sprite_destroy"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/Sprite_Layers/layer_sprite_destroy.htm"
converted: "2025-09-14T03:59:37.196Z"
---

# layer\_sprite\_destroy

This function will destroy the given sprite element. You supply the sprite ID (which you get when you create the sprite using [layer\_sprite\_create()](layer_sprite_create.md) or when you use the layer handle along with [layer\_get\_sprite\_id()](layer_sprite_get_id.md)) and this will remove it. Note that this does _not_ remove the layer, only the sprite from it, and if the sprite is one that has been added in the room editor, then the next time you leave the room and then return, the sprite will be recreated again. However if the room is persistent, the sprite will be removed unless room persistence is switched off again.

#### Syntax:

layer\_sprite\_destroy(sprite\_element\_id)

| Argument | Type | Description |
| --- | --- | --- |
| sprite_element_id | Sprite Element ID | The unique ID value of the sprite to be destroyed |

#### Returns:

N/A

#### Example:

var lay\_id = layer\_get\_id("Asset\_Trees");
var spr\_id = layer\_sprite\_get\_id(lay\_id, "graphic\_254367CB");

if (layer\_sprite\_exists(lay\_id, spr\_id))
{
    layer\_sprite\_destroy(spr\_id);
}

The above code checks the layer "Asset\_Trees" to see if the given sprite element exists and if it does, then it is destroyed (but not the layer).