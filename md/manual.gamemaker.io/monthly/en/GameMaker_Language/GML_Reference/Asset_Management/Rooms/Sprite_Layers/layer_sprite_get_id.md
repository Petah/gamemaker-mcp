---
title: "layer_sprite_get_id"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/Sprite_Layers/layer_sprite_get_id.htm"
converted: "2025-09-14T03:59:37.268Z"
---

# layer\_sprite\_get\_id

This function can be used to retrieve the unique ID value of a sprite element on a layer. You supply the layer handle (which you get when you create the layer using [layer\_create()](../General_Layer_Functions/layer_create.md) or when you use the layer name along with [layer\_get\_id()](../General_Layer_Functions/layer_get_id.md)) and the name of the sprite element as defined in the Room Editor. The function will return the ID value associated with that sprite element on the layer.

Note that this function is specifically designed for use with sprites that have been added in the IDE on an asset layer, and if you added a sprite to a layer through code using the function [layer\_sprite\_create()](layer_sprite_create.md), then the ID returned by that function should be used for all future reference (as that sprite element will have no name to be passed into this function).

If the specified layer does not exist, or the given sprite element cannot be found, the function will return -1.

#### Syntax:

layer\_sprite\_get\_id(layer\_id, sprite\_element\_name)

| Argument | Type | Description |
| --- | --- | --- |
| layer_id | String or Layer | The handle of the layer to target |
| sprite_element_name | String | The unique name of the sprite element on the layer as defined in the Room Editor |

#### Returns:

[Sprite Element ID](layer_sprite_get_id.md)

#### Example:

var lay\_id = layer\_get\_id("Assets\_trees");
var back\_id = layer\_sprite\_get\_id(lay\_id, "graphic\_254367CB");
layer\_sprite\_change(back\_id, spr\_Trees\_Winter);

The above code will get the layer handle for the layer named "Assets\_trees" and then use that to retrieve the ID of the sprite element "graphic\_254367CB" on that layer. The retrieved sprite element ID is then used to change the element's sprite.