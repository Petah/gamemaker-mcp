---
title: "tile_get_mirror"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/Tile_Map_Layers/tile_get_mirror.htm"
converted: "2025-09-14T03:59:38.383Z"
---

# tile\_get\_mirror

This function can be used to check whether in a given set of tile-data the tile has been mirrored or not.

You give the tile-data, which can be retrieved using the function [tilemap\_get()](tilemap_get.md), and the function will return true if the tile is mirrored, or false if not.

#### Syntax:

tile\_get\_mirror(tiledata)

| Argument | Type | Description |
| --- | --- | --- |
| tiledata | Tile Data | The tile data to check |

#### Returns:

[Boolean](../../../../GML_Overview/Data_Types.md)

#### Example:

var lay\_id = layer\_get\_id("Tiles\_sky");
var map\_id = layer\_tilemap\_get\_id(lay\_id);
var mx = tilemap\_get\_cell\_x\_at\_pixel(map\_id, mouse\_x, mouse\_y);
var my = tilemap\_get\_cell\_y\_at\_pixel(map\_id, mouse\_x, mouse\_y);
var data = tilemap\_get(map\_id, mx, my);
var bool = !tile\_get\_mirror(data);
data = tile\_set\_mirror(data, bool);
tilemap\_set(map\_id, data, mx, my);

The above code gets the tile map ID from the given layer and then gets the x and y cell position for the tile under the mouse. This position is then used to get the tile-data which is mirrored and then used to set the tile again.