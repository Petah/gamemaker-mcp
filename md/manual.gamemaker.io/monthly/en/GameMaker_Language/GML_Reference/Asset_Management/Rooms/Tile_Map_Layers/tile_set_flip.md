---
title: "tile_set_flip"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/Tile_Map_Layers/tile_set_flip.htm"
converted: "2025-09-14T03:59:38.429Z"
---

# tile\_set\_flip

This function can be used to set a given set of tile-data to flip the tile or not.

You give the tile-data, which can be retrieved using the function [tilemap\_get()](tilemap_get.md), and then set the flip argument to either true if you want the tile flipped, or false if you want the tile to be in its default, un-flipped state. The function will return a modified tile-data set which can then be applied using the [tilemap\_set()](tilemap_set.md) function.

#### Syntax:

tile\_set\_flip(tiledata, flip)

| Argument | Type | Description |
| --- | --- | --- |
| tiledata | Tile Data | the tile-data to set |
| flip | Boolean | Set to true to flip and false to leave it as-is |

#### Returns:

[Tile Data](tilemap_get.md)

#### Example:

var lay\_id = layer\_get\_id("Tiles\_sky");
var map\_id = layer\_tilemap\_get\_id(lay\_id);
var mx = tilemap\_get\_cell\_x\_at\_pixel(map\_id, mouse\_x, mouse\_y);
var my = tilemap\_get\_cell\_y\_at\_pixel(map\_id, mouse\_x, mouse\_y);
var data = tilemap\_get(map\_id, mx, my);
var bool = !tile\_get\_flip(data);
data = tile\_set\_flip(data, bool);
tilemap\_set(map\_id, data, mx, my);

The above code gets the tile map ID from the given layer and then gets the x and y cell position for the tile under the mouse. This position is then used to get the tile-data which is flipped and then used to set the tile again.