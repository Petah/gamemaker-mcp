---
title: "tilemap_get"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/Tile_Map_Layers/tilemap_get.htm"
converted: "2025-09-14T03:59:38.507Z"
---

# tilemap\_get

Using this function you can retrieve the tile data from a cell of the tile map element.

You give the tile map element ID (which you get when you create a tile map element using [layer\_tilemap\_create()](layer_tilemap_create.md) or when you use the function [layer\_tilemap\_get\_id()](layer_tilemap_get_id.md)), as well as the _cell_ x and y position and the function will return the tile data "blob". This data is essentially a bit mask that contains the tile index, the flip/rotate/mirror booleans and any mask data that has been applied (see [tilemap\_set\_mask()](tilemap_set_mask.md) for details), and the resulting data value can then be used in the tile\_\* functions to change a tile's properties.

Note that we are using x/y cell positions based on the size of the tile map grid and _not_ as a position in the room, so "cell\_x" is a value from 0 to [tile map width](tilemap_get_width.md), and "cell\_y" is a value from 0 to [tile map height](tilemap_get_height.md). If you need to get the data for a tile at a specific room position then you need to use the function [tilemap\_get\_at\_pixel()](tilemap_get_at_pixel.md).

IMPORTANT If the tiles in the tile map have been unchanged (i.e.: they are not rotated, flipped, etc.), then the return value of the tile set data will be exactly equal to the index of the tile on the tile set. So you can create "collision maps" of tiles using one tile at index 1 in the tile set - for example - then use this function to check for 1 or 0 (an empty tile) to calculate collisions.

#### Syntax:

tilemap\_get(tilemap\_element\_id, cell\_x, cell\_y)

| Argument | Type | Description |
| --- | --- | --- |
| tilemap_element_id | Tile Map Element ID | The unique ID value of the tile map element to get the tile-data of |
| x_cell | Real | The cell along the x-axis to get the tile data from |
| y_cell | Real | The cell along the y-axis to get the tile data from |

#### Returns:

[Tile Data](tilemap_get.md) (-1 if there is an error)

#### Example:

var lay\_id = layer\_get\_id("Tiles\_sky");
var map\_id = layer\_tilemap\_get\_id(lay\_id);
var data = tilemap\_get(map\_id, 0, 0);
data = tile\_set\_flip(data, true);
tilemap\_set(map\_id, data, 0, 0);

The above code gets the ID for the tile map on the layer "Tiles\_Sky" and then uses that to get the data from the tile at cell (0, 0). This tile data is then flipped before being used to set the tile on the tile map again.