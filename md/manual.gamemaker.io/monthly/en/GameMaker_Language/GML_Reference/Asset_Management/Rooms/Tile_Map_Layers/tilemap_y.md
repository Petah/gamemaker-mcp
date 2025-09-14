---
title: "tilemap_y"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/Tile_Map_Layers/tilemap_y.htm"
converted: "2025-09-14T03:59:38.870Z"
---

# tilemap\_y

This function controls the position along the y-axis of the room of the asset tile map element on the layer.

You give the tile map element ID (which you get when you create a tile map element using [layer\_tilemap\_create()](layer_tilemap_create.md) or when you use the function [layer\_tilemap\_get\_id()](layer_tilemap_get_id.md)), and then set the y value to use (based on the room coordinates).

#### Syntax:

tilemap\_y(tilemap\_element\_id, y);

| Argument | Type | Description |
| --- | --- | --- |
| tilemap_element_id | Tile Map Element ID | The unique ID value of the tile map element to change |
| y | Real | The y position for the tile map |

#### Returns:

N/A

#### Example:

var lay\_id = layer\_get\_id("Asset\_sky");
var map\_id = layer\_tilemap\_get\_id(lay\_id);
tilemap\_y(map\_id, irandom(room\_height));

The above code gets the ID of the tile map element assigned to the layer "Asset\_sky" and then sets its y position to a random value between 0 and the height of the room.