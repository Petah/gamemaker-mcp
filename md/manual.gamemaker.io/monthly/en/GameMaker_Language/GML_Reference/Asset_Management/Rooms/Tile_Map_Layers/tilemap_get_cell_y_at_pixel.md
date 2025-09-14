---
title: "tilemap_get_cell_y_at_pixel"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/Tile_Map_Layers/tilemap_get_cell_y_at_pixel.htm"
converted: "2025-09-14T03:59:38.561Z"
---

# tilemap\_get\_cell\_y\_at\_pixel

Using this function you can retrieve the y-axis position of an individual tile map cell by giving the relative y-axis position within the room.

You give the tile map element ID (which you get when you create a tile map element using [layer\_tilemap\_create()](layer_tilemap_create.md) or when you use the function [layer\_tilemap\_get\_id()](layer_tilemap_get_id.md)), as well as the x and y position _within the room_ and the function will return the y position of the cell within the tile map for that point.

Note that if the value is outside of the tile map area, and no cell is available, it will return -1.

#### Syntax:

tilemap\_get\_cell\_y\_at\_pixel(tilemap\_element\_id, x, y)

| Argument | Type | Description |
| --- | --- | --- |
| tilemap_element_id | Tile Map Element ID | The unique ID value of the tile map element to get the cell y position of |
| x | Real | The x position within the room to use for getting the cell |
| y | Real | The y position within the room to use for getting the cell |

#### Returns:

[Real](../../../../GML_Overview/Data_Types.md) (y-axis cell position or -1 if there is an error)

#### Example:

var lay\_id = layer\_get\_id("Tiles\_Walls");
var map\_id = layer\_tilemap\_get\_id(lay\_id);
var \_x = tilemap\_get\_cell\_x\_at\_pixel(map\_id, mouse\_x, mouse\_y);
var \_y = tilemap\_get\_cell\_y\_at\_pixel(map\_id, mouse\_x, mouse\_y);
tiledata = tilemap\_get(map\_id, \_x, \_y);

The above code uses the retrieved tile map ID to get the cell position from a set of room coordinates and then store the data for any tile found there in an instance variable.