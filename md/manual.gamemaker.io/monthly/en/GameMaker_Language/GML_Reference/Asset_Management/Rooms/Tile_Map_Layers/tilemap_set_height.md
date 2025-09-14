---
title: "tilemap_set_height"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/Tile_Map_Layers/tilemap_set_height.htm"
converted: "2025-09-14T03:59:38.785Z"
---

# tilemap\_set\_height

This function can be used to resize a tile map element.

You give the tile map element ID (which you get when you create a tile map element using [layer\_tilemap\_create()](layer_tilemap_create.md) or when you use the function [layer\_tilemap\_get\_id()](layer_tilemap_get_id.md)), and the new height of the tile map in tile cells.

#### Syntax:

tilemap\_set\_height(tilemap\_element\_id, height);

| Argument | Type | Description |
| --- | --- | --- |
| tilemap_element_id | Tile Map Element ID | The unique ID value of the tile map element to set the height of |
| height | Real | The height value (in "cells") |

#### Returns:

N/A

#### Example:

var lay\_id = layer\_get\_id("Tiles\_Walls");
var map\_id = layer\_tilemap\_get\_id(lay\_id);
if (tilemap\_get\_height(map\_id) != room\_height div 16)
{
    tilemap\_set\_height(map\_id, room\_height div 16);
}

The above code checks the width of a specific tile map and if it is not the correct size then the width is set.