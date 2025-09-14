---
title: "layer_sprite_exists"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/Sprite_Layers/layer_sprite_exists.htm"
converted: "2025-09-14T03:59:37.214Z"
---

# layer\_sprite\_exists

You can use this function to check and see if a sprite element exists on any given layer. You supply the layer handle (which you get when you create the layer using [layer\_create()](../General_Layer_Functions/layer_create.md)) or the layer name (as a string - this will have a performance impact) and the sprite element ID (which you get when you create a sprite element using [layer\_sprite\_create()](layer_sprite_create.md) or when you use the function [layer\_sprite\_get\_id()](layer_sprite_get_id.md)) and the function will return either true if the element exists, or false if it does not.

**NOTE** This function works within the scope of the current target room - by default the room in which the function is called - which can be set using the function [layer\_set\_target\_room()](../General_Layer_Functions/layer_set_target_room.md).

#### Syntax:

layer\_sprite\_exists(layer\_id, sprite\_element\_id)

| Argument | Type | Description |
| --- | --- | --- |
| layer_id | String or Layer | The handle of the layer to target (or the layer name as a string) |
| sprite_element_id | Sprite Element ID | The unique ID value of the sprite element to check |

#### Returns:

[Boolean](../../../../GML_Overview/Data_Types.md)

#### Example:

var lay\_id = layer\_get\_id("Asset\_Trees");
var spr\_id = layer\_sprite\_get\_id(lay\_id, "graphic\_254367CB");

if (layer\_sprite\_exists(lay\_id, spr\_id))
{
    layer\_sprite\_destroy(spr\_id);
}

The above code checks the layer "Asset\_trees" to see if the given sprite element exists and if it does, then it is destroyed (but not the layer).