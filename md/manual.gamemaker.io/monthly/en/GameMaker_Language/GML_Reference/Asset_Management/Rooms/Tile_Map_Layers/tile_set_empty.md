---
title: "tile_set_empty"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/Tile_Map_Layers/tile_set_empty.htm"
converted: "2025-09-14T03:59:38.414Z"
---

# tile\_set\_empty

This function can be used to set a given set of tile-data to be an empty tile.

You give the tile-data, which can be retrieved using the function [tilemap\_get()](tilemap_get.md). The function will return a modified tile-data set which can then be applied using the [tilemap\_set()](tilemap_set.md) function.

#### Syntax:

tile\_set\_empty(tiledata)

| Argument | Type | Description |
| --- | --- | --- |
| tiledata | Tile Data | the tile-data to set |

#### Returns:

[Tile Data](tilemap_get.md)

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