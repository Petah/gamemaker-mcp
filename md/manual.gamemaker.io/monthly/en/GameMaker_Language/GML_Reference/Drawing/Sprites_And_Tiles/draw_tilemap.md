---
title: "draw_tilemap"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Sprites_And_Tiles/draw_tilemap.htm"
converted: "2025-09-14T03:59:53.915Z"
---

# draw\_tilemap

This function can be used to draw a given tilemap anywhere in the room. You give the tilemap element ID (which you get when you create a tilemap element using [layer\_tilemap\_create()](../../Asset_Management/Rooms/Tile_Map_Layers/layer_tilemap_create.md) or when you use the function [layer\_tilemap\_get\_id()](../../Asset_Management/Rooms/Tile_Map_Layers/layer_tilemap_get_id.md)), then give the x/y position for drawing (in the room). Note that this will simply draw the tilemap at the specified point, using the layer depth of the instance that is calling the function. It does _not_ move the tilemap - nor change it in any way - and does not matter if the tilemap is flagged as visible or not.

#### Syntax:

draw\_tilemap(tilemap\_element\_id, x, y);

| Argument | Type | Description |
| --- | --- | --- |
| tilemap_element_id | Tile Map Element ID | The unique ID value of the tilemap element to draw |
| x | Real | The x position within the room to draw at |
| y | Real | The y position within the room to draw at |

#### Returns:

N/A

#### Example:

var lay\_id = layer\_get\_id("Tiles\_Effects");
var map\_id = layer\_tilemap\_get\_id(lay\_id);
draw\_tilemap(map\_id, mouse\_x, mouse\_y);

The above code gets the layer ID then uses that to get a specific tilemap ID which in turn is used to draw the tilemap at the mouse's position.