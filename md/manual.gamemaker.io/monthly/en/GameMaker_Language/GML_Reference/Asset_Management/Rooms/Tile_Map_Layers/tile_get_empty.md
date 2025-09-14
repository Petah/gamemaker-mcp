---
title: "tile_get_empty"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/Tile_Map_Layers/tile_get_empty.htm"
converted: "2025-09-14T03:59:38.338Z"
---

# tile\_get\_empty

This function can be used to check whether a given set of tile-data is for an empty tile or not.

You give the tile-data, which can be retrieved using the function [tilemap\_get()](tilemap_get.md), and the function will return true if the tile is empty, or false if there is a tile index.

#### Syntax:

tile\_get\_empty(tiledata)

| Argument | Type | Description |
| --- | --- | --- |
| tiledata | Tile Data | the tile-data to check |

#### Returns:

[Boolean](../../../../GML_Overview/Data_Types.md)

#### Example:

var lay\_id = layer\_get\_id("Tiles\_sky");
var map\_id = layer\_tilemap\_get\_id(lay\_id);
for (var i = 0; i < tilemap\_get\_width(map\_id); i++;)
{
    for (var j = 0; j < tilemap\_get\_height(map\_id); j++;)
    {
        var data = tilemap\_get(map\_id, i, j);
        if (!tile\_get\_empty(data))
        {
            data = tile\_set\_empty(data)
            tilemap\_set(map\_id, data, i, j);
        }
    }
}

The above code gets the tile map ID from the given layer and then proceeds to check every tile cell on the map to see if it has data or not. If it does, the tile is set to empty.