---
title: "tilemap_get_height"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/Tile_Map_Layers/tilemap_get_height.htm"
converted: "2025-09-14T03:59:38.605Z"
---

# tilemap\_get\_height

Using this function you can retrieve the height (in cells) of the tile map element.

You give the tile map element ID (which you get when you create a tile map element using [layer\_tilemap\_create()](layer_tilemap_create.md) or when you use the function [layer\_tilemap\_get\_id()](layer_tilemap_get_id.md)), and the function will return the height (number of cells wide).

#### Syntax:

tilemap\_get\_height(tilemap\_element\_id)

| Argument | Type | Description |
| --- | --- | --- |
| tilemap_element_id | Tile Map Element ID | The unique ID value of the tile map element to get the height of |

#### Returns:

[Real](../../../../GML_Overview/Data_Types.md)

#### Example:

var lay\_id = layer\_get\_id("espadrilles");
var map\_id = layer\_tilemap\_get\_id(lay\_id);
var \_w = tilemap\_get\_width(map\_id);
var \_h = tilemap\_get\_height(map\_id);
total\_tiles = (\_w \* \_h);

The above code uses the retrieved tile map ID to get the tile width and height of the tile map and then uses those values to set an instance variable.