---
title: "layer_tilemap_create"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/Tile_Map_Layers/layer_tilemap_create.htm"
converted: "2025-09-14T03:59:38.278Z"
---

# layer\_tilemap\_create

With this function you can assign a tile-set asset to a layer to be used as a tile map in your project.

You supply the layer handle (which you get when you create the layer using [layer\_create()](../General_Layer_Functions/layer_create.md)) or the layer name (as a string - this will have a performance impact) and then an initial (x, y) position to add the tile map to the room, the tile set asset to use, and then the width and height of the tile map in _cells_ (i.e.: a width of 20 and a height of 10 will create a tile map with 200 cells that is 20 cells wide and 10 cells tall), with the size of the cells themselves being defined by the tile set chosen.

NOTE You cannot place tiles at negative positions within the tile map, so all tiles must be placed within the cell spaces 0 to width - 1, 0 to height - 1.

#### Syntax:

layer\_tilemap\_create(layer\_id, x, y, tileset, width, height)

| Argument | Type | Description |
| --- | --- | --- |
| layer_id | String or Layer | The handle of the layer to target (or the layer name as a string) |
| x | Real | The x position of the tile map in the room |
| y | Real | The y position of the tile map in the room |
| tileset | Tile Set Asset | The Tile Set asset to be used |
| width | Real | The width of the tile map (in cells) |
| height | Real | The height of the tile map (in cells) |

#### Returns:

[Tile Map Element ID](layer_tilemap_get_id.md)

#### Example:

global.back\_layer = layer\_create(10000);
global.back\_tiles = layer\_tilemap\_create(global.back\_layer, 0, 0, tmap\_Trees, 16, 32);

The above code creates a new layer and then adds a new tile map element to it, setting the tile map position to (0,0) as well as the tile set to be used and the width and height of the tile map.