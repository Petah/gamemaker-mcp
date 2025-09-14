---
title: "tilemap_get_frame"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/Tile_Map_Layers/tilemap_get_frame.htm"
converted: "2025-09-14T03:59:38.575Z"
---

# tilemap\_get\_frame

Since tiles can be animated, it can sometimes be useful to know which frame is currently being drawn and react accordingly, so with this function you can retrieve the current frame index for a given tile map.

You give the tile map element ID (which you get when you create a tile map element using [layer\_tilemap\_create()](layer_tilemap_create.md) or when you use the function [layer\_tilemap\_get\_id()](layer_tilemap_get_id.md)), and the function will return the frame index.

#### Syntax:

tilemap\_get\_frame(tilemap\_element\_id)

| Argument | Type | Description |
| --- | --- | --- |
| tilemap_element_id | Tile Map Element ID | The unique ID value of the tile map element to get the frame index of |

#### Returns:

[Real](../../../../GML_Overview/Data_Types.md) (between 0 (inclusive) and the maximum number of frames of animation (exclusive))

#### Example:

var lay\_id = layer\_get\_id("Tiles\_Traps");
var map\_id = layer\_tilemap\_get\_id(lay\_id);
if (tilemap\_get\_frame(map\_id) >= 2 && tilemap\_get\_frame(map\_id) < 4)
{
    global.activate = true;
}
else
{
    global.activate = false;
}

The above code checks the current animation frame for the given tile map on the given layer, and sets a global variable based on the return value.