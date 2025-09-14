---
title: "tilemap_get_width"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/Tile_Map_Layers/tilemap_get_width.htm"
converted: "2025-09-14T03:59:38.680Z"
---

# tilemap\_get\_width

Using this function you can retrieve the width (in cells) of the tile map element.

You give the tile map element ID (which you get when you create a tile map element using [layer\_tilemap\_create()](layer_tilemap_create.md) or when you use the function [layer\_tilemap\_get\_id()](layer_tilemap_get_id.md)), and the function will return the width (number of cells wide).

#### Syntax:

tilemap\_get\_width(tilemap\_element\_id)

| Argument | Type | Description |
| --- | --- | --- |
| tilemap_element_id | Tile Map Element ID | The unique ID value of the tile map element to get the width of |

#### Returns:

[Real](../../../../GML_Overview/Data_Types.md)

#### Example:

var lay\_id = layer\_get\_id("Tiles\_Walls");
var map\_id = layer\_tilemap\_get\_id(lay\_id);
var \_w = tilemap\_get\_width(map\_id);
var \_h = tilemap\_get\_height(map\_id);
total\_tiles = (\_w \* \_h);

The above code uses the retrieved tile map ID to get the tile width and height of the tile map and then uses those values to set an instance variable.