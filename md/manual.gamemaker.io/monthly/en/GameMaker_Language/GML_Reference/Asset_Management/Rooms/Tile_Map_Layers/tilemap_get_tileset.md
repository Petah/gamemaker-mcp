---
title: "tilemap_get_tileset"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/Tile_Map_Layers/tilemap_get_tileset.htm"
converted: "2025-09-14T03:59:38.663Z"
---

# tilemap\_get\_tileset

Using this function you can retrieve the handle of the Tile Set asset assigned to a given tile map element on a layer.

You give the Tile Map element ID (which you get when you create a tile map element using [layer\_tilemap\_create()](layer_tilemap_create.md) or when you use the function [layer\_tilemap\_get\_id()](layer_tilemap_get_id.md)), and the function will return the Tile Set asset index.

#### Syntax:

tilemap\_get\_tileset(tilemap\_element\_id)

| Argument | Type | Description |
| --- | --- | --- |
| tilemap_element_id | Tile Map Element ID | The unique ID value of the Tile Map element to get the tile set from |

#### Returns:

[Tile Set Asset](../../../../../The_Asset_Editors/Tile_Sets.md)

#### Example:

var lay\_id = layer\_get\_id("Tiles\_trees");
var map\_id = layer\_tilemap\_get\_id(lay\_id);
if (tilemap\_get\_tileset(map\_id) != ts\_Nighttime)
{
    tilemap\_tileset(map\_id, ts\_Nighttime);
}

The above code checks the current tile set assigned to the layer "Tiles\_trees" and if it is not "ts\_Nighttime" then that tile set is assigned to the tile map.