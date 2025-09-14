---
title: "tilemap_clear"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/Tile_Map_Layers/tilemap_clear.htm"
converted: "2025-09-14T03:59:38.490Z"
---

# tilemap\_clear

Using this function you can clear/set all the tiles on a given tile-map.

You give the tile map element ID (which you get when you create a tile map element using [layer\_tilemap\_create()](layer_tilemap_create.md) or when you use the function [layer\_tilemap\_get\_id()](layer_tilemap_get_id.md)), and then supply the tile data that you wish to clear the layer with. A default value of 0 will clear all the tiles from the layer (essentially making all tiles "empty"), while you can use the dedicated tile\_\* functions to create your own tile data to clear the tile map with.

#### Syntax:

tilemap\_clear(tilemap\_element\_id, tiledata);

| Argument | Type | Description |
| --- | --- | --- |
| tilemap_element_id | Tile Map Element ID | The unique ID value of the tile map element to change |
| tiledata | Tile Data | The tile data to use to clear the layer |

#### Returns:

N/A

#### Example:

var layer\_id = layer\_get\_id("Forest");
var tile\_id = layer\_tilemap\_get\_id(layer\_id);
tilemap\_clear(tile\_id, 0);

The above code gets the ID value of a tile map created in the room editor, and then clears it using "empty" tiles.