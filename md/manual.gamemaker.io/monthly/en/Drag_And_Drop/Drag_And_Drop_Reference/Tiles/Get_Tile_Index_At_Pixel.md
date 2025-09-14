---
title: "Get Tile Index At Pixel"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Tiles/Get_Tile_Index_At_Pixel.htm"
converted: "2025-09-14T03:59:28.037Z"
---

# ![Get Tile Index At Pixel Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Tiles/i_Tiles_Get_Tile_At_Pixel.png) Get Tile Index At Pixel

This action is used to get a tile index on a given layer. The layer is specified from the layer name given (a string, as used to name the layer in the Room Editor), and then you give an x and y position to find the tile to get the index of. The tile will be the one that the given position falls within in the room, and the index will be returned to the target variable, where 0 is no tile, and a positive integer is the index of the tile. The x and y position can be flagged as being relative to the position of the calling instance, and the target variable can be flagged as a temporary (local) variable that can be used until the end of the event.

#### Action Syntax:

![Get Tile Index At Pixel Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Tiles/a_Tiles_Get_Tile_At_Pixel.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| Layer | The layer to set the tile on |
| x | The x position to check |
| y | The y position to check |
| Target | The target variable to store the tile index |

#### Example:

![Get Tile Index At Pixel Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Tiles/e_Tiles_Get_Tile_At_Pixel.png)The above action block code checks for a mouse left button press and if one is detected it gets the index of the tile cell that the position of the mouse falls within. This tile index is then checked and if it is not 0, it is set to 0.