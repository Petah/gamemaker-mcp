---
title: "tilemap_get_tile_width"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/Tile_Map_Layers/tilemap_get_tile_width.htm"
converted: "2025-09-14T03:59:38.649Z"
---

# tilemap\_get\_tile\_width

Using this function you can retrieve the width (in pixels) of each tile cell of the tile map element.

You give the tile map element ID (which you get when you create a tile map element using [layer\_tilemap\_create()](layer_tilemap_create.md) or when you use the function [layer\_tilemap\_get\_id()](layer_tilemap_get_id.md)), and the function will return the tile set cell width.

#### Syntax:

tilemap\_get\_tile\_width(tilemap\_element\_id)

| Argument | Type | Description |
| --- | --- | --- |
| tilemap_element_id | Tile Map Element ID | The unique ID value of the tile map element to get the tile cell width of |

#### Returns:

[Real](../../../../GML_Overview/Data_Types.md)

#### Example:

var lay\_id = layer\_get\_id("Tiles\_Walls");
var map\_id = layer\_tilemap\_get\_id(lay\_id);
global.snap\_x = tilemap\_get\_tile\_width(map\_id);
global.snap\_y = tilemap\_get\_tile\_height(map\_id);

The above code uses the retrieved tile map ID to get the tile cell width and height and use them to set two global variables.