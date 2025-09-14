---
title: "layer_tilemap_destroy"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/Tile_Map_Layers/layer_tilemap_destroy.htm"
converted: "2025-09-14T03:59:38.292Z"
---

# layer\_tilemap\_destroy

This function will destroy the given tile map element.

You supply the tile map ID (which you get when you create the tile map using [layer\_tilemap\_create()](layer_tilemap_create.md) or when you use the layer handle along with [layer\_get\_tilemap\_id()](layer_tilemap_get_id.md)) and this will remove it.

NOTE This does _not_ remove the layer, only the tile map from it. If the tile map is one that has been added in the Room Editor, the next time you leave the room and then return, the tile map will be created again. If the room is persistent, however, the tile map will be removed unless room persistence is switched off again.

#### Syntax:

layer\_tilemap\_destroy(tilemap\_element\_id);

| Argument | Type | Description |
| --- | --- | --- |
| tilemap_element_id | Tile Map Element ID | The unique ID value of the tile map to be destroyed |

#### Returns:

N/A

#### Example:

var lay\_id = layer\_get\_id("Tiles\_trees");
var tile\_id = layer\_tilemap\_get\_id(lay\_id);
if (layer\_tilemap\_exists(lay\_id, tile\_id))
{
    layer\_tilemap\_destroy(tile\_id);
}

The above code checks the layer "Tiles\_trees" to see if the given tile map element exists and if it does, then it is destroyed (but not the layer).