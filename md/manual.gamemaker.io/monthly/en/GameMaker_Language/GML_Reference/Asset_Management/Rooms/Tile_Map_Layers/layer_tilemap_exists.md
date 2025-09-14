---
title: "layer_tilemap_exists"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/Tile_Map_Layers/layer_tilemap_exists.htm"
converted: "2025-09-14T03:59:38.308Z"
---

# layer\_tilemap\_exists

You can use this function to check and see if a tile map element exists on any given layer.

You supply the layer handle (which you get when you create the layer using [layer\_create()](../General_Layer_Functions/layer_create.md)) or the layer name (as a string - this will have a performance impact) and the tile map element ID (which you get when you create a tile map element using [layer\_tilemap\_create()](layer_tilemap_create.md) or when you use the function [layer\_tilemap\_get\_id()](layer_tilemap_get_id.md)) and the function will return either true if the element exists, or false if it does not.

**NOTE** This function works within the scope of the current target room - by default the room in which the function is called - which can be set using the function [layer\_set\_target\_room()](../General_Layer_Functions/layer_set_target_room.md).

#### Syntax:

layer\_tilemap\_exists(layer\_id, tilemap\_element\_id)

| Argument | Type | Description |
| --- | --- | --- |
| layer_id | String or Layer | The handle of the layer to target (or the layer name as a string) |
| tilemap_element_id | Tile Map Element ID | The unique ID value of the tile map element to check |

#### Returns:

[Boolean](../../../../GML_Overview/Data_Types.md)

#### Example:

var lay\_id = layer\_get\_id("tilemap\_trees");
if (layer\_tilemap\_exists(lay\_id, global.Treestilemap))
{
    layer\_tilemap\_destroy(lay\_id, global.Treestilemap);
}

The above code checks the layer "tilemap\_trees" to see if the given tile map element exists and if it does, then it is destroyed (but not the layer).