---
title: "tilemap_x"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/Tile_Map_Layers/tilemap_x.htm"
converted: "2025-09-14T03:59:38.852Z"
---

# tilemap\_x

This function controls the position along the x-axis of the room of the asset tile map element on the layer.

You give the tile map element ID (which you get when you create a tile map element using [layer\_tilemap\_create()](layer_tilemap_create.md) or when you use the function [layer\_tilemap\_get\_id()](layer_tilemap_get_id.md)), and then set the x value to use (based on the room coordinates).

#### Syntax:

tilemap\_x(tilemap\_element\_id, x);

| Argument | Type | Description |
| --- | --- | --- |
| tilemap_element_id | Tile Map Element ID | The unique ID value of the tile map element to change |
| x | Real | The x position for the tile map |

#### Returns:

N/A

#### Example:

var lay\_id = layer\_get\_id("Asset\_sky");
var map\_id = layer\_tilemap\_get\_id(lay\_id);
tilemap\_x(map\_id, irandom(room\_width));

The above code gets the ID value of the tile map element assigned to the layer "Asset\_sky" and then sets its x position to a random value between 0 and the width of the room.