---
title: "tilemap_get_at_pixel"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/Tile_Map_Layers/tilemap_get_at_pixel.htm"
converted: "2025-09-14T03:59:38.523Z"
---

# tilemap\_get\_at\_pixel

Using this function you can retrieve the tile data from a position (within the room) of the tile map element.

You give the tile map element ID (which you get when you create a tile map element using [layer\_tilemap\_create()](layer_tilemap_create.md) or when you use the function [layer\_tilemap\_get\_id()](layer_tilemap_get_id.md)) as well as the x and y position _in the room_ to get the tile data from and the function will return the tile data "blob". This data is essentially a bit mask that contains the tile index, the flip/rotate/mirror booleans and any mask data that has been applied (see [tilemap\_set\_mask()](tilemap_set_mask.md) for details), and the resulting data value can then be used in the tile\_\* functions to change a tiles properties. If you need to get the tile data from a specific tile cell you should be using the function [tilemap\_get()](tilemap_get.md) instead.

IMPORTANT If the tiles in the tile map have been unchanged (i.e.: they are **not** rotated, flipped, etc.), then the return value of the tile set data will be exactly equal to the index of the tile on the tile set. So you can create "collision maps" of tiles using one tile at index 1 in the tile set - for example - then use this function to check for 1 or 0 (an empty tile) to calculate collisions.

#### Syntax:

tilemap\_get\_at\_pixel(tilemap\_element\_id, x, y)

| Argument | Type | Description |
| --- | --- | --- |
| tilemap_element_id | Tile Map Element ID | The unique ID value of the tile map element to get the tile-data of |
| x | Real | The position along the x-axis to get the tile data from (in room pixels) |
| y | Real | The position along the y-axis to get the tile data from (in room pixels) |

#### Returns:

[Tile Data](tilemap_get.md) (-1 if there is an error)

#### Example:

var lay\_id = layer\_get\_id("Tiles\_sky");
var map\_id = layer\_tilemap\_get\_id(lay\_id);
var data = tilemap\_get\_at\_pixel(map\_id, 64, 128);
data = tile\_set\_flip(data, true);
tilemap\_set\_at\_pixel(map\_id, data, 64, 128);

The above code gets the ID for the tile map "Clouds" on the layer "Tiles\_Sky" and then uses that to get the data from the tile at position (64, 128). This tile data is then flipped before being used to set the tile on the tile map again.