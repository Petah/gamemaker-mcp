---
title: "draw_tile"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Sprites_And_Tiles/draw_tile.htm"
converted: "2025-09-14T03:59:53.898Z"
---

# draw\_tile

With this function you can draw any given tile from a tile set - compete with rotations, flips and mirrors - setting the frame (if animated) and the position within the room. The tile set handle is the tile set as set in the IDE and the tile data is the data "blob" that contains all the information about the tile index and the transformations that have been applied. You can use the function [tilemap\_get()](../../Asset_Management/Rooms/Tile_Map_Layers/tilemap_get.md) to get the tile data which can then be manipulated using the [Tile Functions](../../Asset_Management/Rooms/Tile_Map_Layers/Tile_Map_Layers.md), or you can construct it yourself using the following tile constants along with the index value of the tile to create:

| Constant | Description |
| --- | --- |
| tile_rotate | Used to set/get the rotate bit of a tile data blob. |
| tile_mirror | Used to set/get the mirror bit of a tile data blob. |
| tile_flip | Used to set/get the flip bit of a tile data blob. |
| tile_index_mask | A special constant that is for "and"-ing with the tile data blob to extract the tile index. |


You would bitwise "or" these constants with the tile index value to get the final tiledata:

var tiledata = 8 | tile\_rotate | tile\_flip;

The above code simply creates a local variable to store the tiledata for the tile with the index of 8 on the tile set, and it is rotated and flipped. This can then be used to draw the tile at that index from the tile set that you specify. this is not linked to any tilemap layer and the tile will be drawn at the layer depth of the instance doing the drawing, at the x/y position that you specify in the room. Note that you can also set the frame to draw too. If the indexed tile is part of an animation set, then you can set the frame number here (from 0 to the number of frames - 1) and the indexed tile will simply be the indicator for which animated tile set you are using while it will be the given frame that is drawn. If the tile is not part of an animated set then frame should be set to 0.

#### Syntax:

draw\_tile(tileset, tiledata, frame, x, y)

| Argument | Type | Description |
| --- | --- | --- |
| tileset | Tile Set Asset | The handle of the tile set to use |
| tiledata | Tile Data | The tile data to use |
| frame | Real | The frame number for the animated tile to use (default 0 for non-animated tiles) |
| x | Real | The x position within the room to draw at |
| y | Real | The y position within the room to draw at |

#### Returns:

[Real](../../../GML_Overview/Data_Types.md)

#### Example:

var lay\_id = layer\_get\_id("Tiles\_sky");
var map\_id = layer\_tilemap\_get\_id(lay\_id);
var data = tilemap\_get(map\_id, 0, 0);
tile\_set\_flip(data, true);
draw\_tile(set\_Wall, data, 0, x, y);

The above code will get the data on a tile from the given tilemap, then set the "flip" flag and use this data to draw the tile flipped at the instance position.