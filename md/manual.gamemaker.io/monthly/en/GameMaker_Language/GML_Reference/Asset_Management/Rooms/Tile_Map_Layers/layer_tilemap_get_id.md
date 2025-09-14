---
title: "layer_tilemap_get_id"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/Tile_Map_Layers/layer_tilemap_get_id.htm"
converted: "2025-09-14T03:59:38.324Z"
---

# layer\_tilemap\_get\_id

This function can be used to retrieve the unique handle of the tile map element on a layer.

You supply the layer handle (which you get when you create the layer using [layer\_create](../General_Layer_Functions/layer_create.md)) or the layer name (as a string) and the function will return the handle associated with the tile map element on the layer, if any.

Note that this function is specifically designed for use with tile maps that have been added in the IDE. Every tile layer in [The Room Editor](../../../../../The_Asset_Editors/Rooms.md) becomes a layer at runtime with a single tile map element on it, holding all the tiles you added to it. This tile map element will be the only element on that layer and this function returns its handle. You can also add a tile map element to a layer through code using the function [layer\_tilemap\_create](layer_tilemap_create.md) and this function will then return the unique handle for the tile map element added. If the given tile map ID is incorrect or no tile map exists on the layer, the function will return an invalid handle (\-1).

#### Syntax:

layer\_tilemap\_get\_id(layer\_id)

| Argument | Type | Description |
| --- | --- | --- |
| layer_id | String or Layer | The handle of the layer to target (or the layer name as a string) |

#### Returns:

[Tile Map Element ID](layer_tilemap_get_id.md)

#### Example:

var \_lay\_id = layer\_get\_id("tilemap\_trees");
var \_tile\_id = layer\_tilemap\_get\_id(\_lay\_id);
layer\_tilemap\_destroy(\_tile\_id);

The above code will get the layer handle for the layer named "tilemap\_trees" and then use that to get the handle of the tile map element on that layer. This is then used to remove the tile map from the layer.