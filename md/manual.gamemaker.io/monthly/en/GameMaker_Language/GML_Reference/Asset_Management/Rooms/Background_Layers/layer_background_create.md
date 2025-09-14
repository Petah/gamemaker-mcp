---
title: "layer_background_create"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/Background_Layers/layer_background_create.htm"
converted: "2025-09-14T03:59:35.285Z"
---

# layer\_background\_create

With this function you can assign a sprite resource to a layer to be used as a background in your project. You supply the layer handle (which you get when you create the layer using [layer\_create()](../General_Layer_Functions/layer_create.md)) or the layer name (as a string - this will have a performance impact) and a sprite index (which would be the name of the sprite as shown in the Asset Browser), and it will be added to the layer. The function returns the unique ID value for the element, which can then be used in further layer functions for backgrounds.

#### Syntax:

layer\_background\_create(layer\_id, sprite)

| Argument | Type | Description |
| --- | --- | --- |
| layer_id | String or Layer | The handle of the layer to target (or the layer name as a string) |
| sprite | Sprite Asset | The sprite index to be used |

#### Returns:

[Background Element ID](layer_background_get_id.md)

#### Example:

global.back\_layer = layer\_create(10000);
global.back\_trees = layer\_background\_create(global.back\_layer, spr\_Trees);

The above code creates a new layer and then adds a new background element to it, setting a sprite to be the background image used.