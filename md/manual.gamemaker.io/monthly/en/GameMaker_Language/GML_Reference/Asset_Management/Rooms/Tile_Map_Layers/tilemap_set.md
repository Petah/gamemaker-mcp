---
title: "tilemap_set"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/Tile_Map_Layers/tilemap_set.htm"
converted: "2025-09-14T03:59:38.728Z"
---

# tilemap\_set

This function can be used to set any cell (grid square) within the tile map element on the layer to a new tile. You give the tile map element ID (which you get when you create a tile map element using [layer\_tilemap\_create()](layer_tilemap_create.md) or when you use the function [layer\_tilemap\_get\_id()](layer_tilemap_get_id.md)), and then the tile data to set as well as the position within the tile map.

You can retrieve tile data using the function [tilemap\_get()](tilemap_get.md) and then use the tile\_ functions to change it before setting the cell using this function. Alternatively, a new tile data value can be created as 0 (which would be an [empty tile](tile_get_empty.md)), or by using the positive index value of the tile you want to use. The tile\_ functions can still be run on such values.

The function will return true if the tile was successfully set and false if there was an issue and it wasn't set.

#### Syntax:

tilemap\_set(tilemap\_element\_id, tiledata, xcell, ycell)

| Argument | Type | Description |
| --- | --- | --- |
| tilemap_element_id | Tile Map Element ID | The unique ID value of the tile map element to change |
| tiledata | Tile Data | The tile data to set |
| xcell | Real | The cell (grid) position to set along the x-axis |
| ycell | Real | The cell (grid) position to set along the y-axis |

#### Returns:

[Boolean](../../../../GML_Overview/Data_Types.md)

#### Example:

var lay\_id = layer\_get\_id("Tiles\_sky");
var map\_id = layer\_tilemap\_get\_id(lay\_id);
var data = tilemap\_get(map\_id, 0, 0);
data = tile\_set\_flip(data, true);
tilemap\_set(map\_id, data, 0, 0);

The above code gets the ID for the tile map on the layer "Tiles\_Sky" and then uses that to get the data from the tile at cell (0, 0). This tile data is then flipped before being used to set the tile on the tile map again.