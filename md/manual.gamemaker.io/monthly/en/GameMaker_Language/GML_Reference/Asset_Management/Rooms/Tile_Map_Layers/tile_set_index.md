---
title: "tile_set_index"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/Tile_Map_Layers/tile_set_index.htm"
converted: "2025-09-14T03:59:38.445Z"
---

# tile\_set\_index

This function can be used to set the tile index (the position of the tile within the tile set image) for a set of tile-data.

You give the tile-data, which can be retrieved using the function [tilemap\_get()](tilemap_get.md), and then the integer value that represents the position of the tile (its index) within the tile set. The function will return a modified tile-data set which can then be applied using the [tilemap\_set()](tilemap_set.md) function.

#### Syntax:

tile\_set\_index(tiledata, index)

| Argument | Type | Description |
| --- | --- | --- |
| tiledata | Tile Data | the tile-data to set |
| index | Real | The integer index value of the tile to use |

#### Returns:

[Tile Data](tilemap_get.md)

#### Example:

var lay\_id = layer\_get\_id("Tiles\_sky");
var map\_id = layer\_tilemap\_get\_id(lay\_id);
var mx = tilemap\_get\_cell\_x\_at\_pixel(map\_id, mouse\_x, mouse\_y);
var my = tilemap\_get\_cell\_y\_at\_pixel(map\_id, mouse\_x, mouse\_y);
var data = tilemap\_get(map\_id, mx, my);
var ind = tile\_get\_index(data);
data = tile\_set\_index(data, irandom(23));
tilemap\_set(map\_id, data, mx, my);

The above code gets the tile map ID from the given layer and then uses that to get the tile-data for the cell under the mouse position. This data is then used to set the tile index to a random number.