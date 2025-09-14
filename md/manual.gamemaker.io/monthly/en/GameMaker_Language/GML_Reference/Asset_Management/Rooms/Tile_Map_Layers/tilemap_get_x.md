---
title: "tilemap_get_x"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/Tile_Map_Layers/tilemap_get_x.htm"
converted: "2025-09-14T03:59:38.696Z"
---

# tilemap\_get\_x

Using this function you can retrieve the x position (within the room) of the tile map element.

You give the tile map element ID (which you get when you create a tile map element using [layer\_tilemap\_create()](layer_tilemap_create.md) or when you use the function [layer\_tilemap\_get\_id()](layer_tilemap_get_id.md)), and the function will return the x-axis position.

#### Syntax:

tilemap\_get\_x(tilemap\_element\_id)

| Argument | Type | Description |
| --- | --- | --- |
| tilemap_element_id | Tile Map Element ID | The unique ID value of the tile map element to get the x position of |

#### Returns:

[Real](../../../../GML_Overview/Data_Types.md)

#### Example:

var lay\_id = layer\_get\_id("Tiles\_Walls");
var map\_id = layer\_tilemap\_get\_id(lay\_id);
var \_x = tilemap\_get\_x(map\_id);
var \_y = tilemap\_get\_y(map\_id);
tilemap\_x(map\_id, \_x + 10); tilemap\_y(map\_id, \_y + 10);

The above code uses the retrieved tile map ID to get the tile x and y position of the tile map and then uses those values to move it.