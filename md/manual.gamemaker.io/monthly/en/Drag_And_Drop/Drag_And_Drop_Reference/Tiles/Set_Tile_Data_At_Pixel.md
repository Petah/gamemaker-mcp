---
title: "Set Tile Data At Pixel"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Tiles/Set_Tile_Data_At_Pixel.htm"
converted: "2025-09-14T03:59:28.085Z"
---

# ![Set Tile Data At Pixel Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Tiles/i_Tiles_Set_Tile_Data_At_Pixel.png) Set Tile Data At Pixel

With this action you can set the tile data for a tile cell found at a specific position on a tile map layer. The tile data is simply a value that reflects the index of the tile along with the flip, mirror, and rotate values, as well as any custom tile masks that you have used. With this action you first supply the layer to target using the name of the layer (a string) as defined in the room editor, and then the x and y axis in the room to set the tile data for. Note that the tile data will be set for the tile map "cell" in which the given position lands. For example, if your tile set tiles are 16x16, then the tile map layer will hold tiles in cells of 16x16 pixels, so if you use this action to target the room position (8, 8), you will be changing the tile in the cell (0, 0) of the tile map.

NOTE The layer selected _must_ have been defined as a Tile Map Layer in [The Room Editor](../../../The_Asset_Editors/Rooms.md), otherwise you may get errors.

The final argument for the action is the tile data itself. You would normally retrieve the tile data for the tile map cell using the action [Get Tile Data At Pixel](Set_Tile_Data_At_Pixel.md) and then manipulate it using the action [Set Tile Data Transform](Set_Tile_Data_Transform.md) before setting it again with this action. For more information on tile data, please see the GML section on [Tile Map Functions](../../../GameMaker_Language/GML_Reference/Asset_Management/Rooms/Tile_Map_Layers/Tile_Map_Layers.md).

#### Action Syntax:

![Set Tile Data At Pixel Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Tiles/a_Tiles_Set_Tile_Data_At_Pixel.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| Layer | The layer with the tile map to target |
| X | The position along the horizontal (X) axis to set the tile-data for |
| Y | The position along the vertical (Y) axis to set the tile-data |
| Data | The tile-data to use for setting the cell at the position |

#### Example:

![Set Tile Data At Pixel Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Tiles/e_Tiles_Set_Tile_Data_At_Pixel.png)The above action block code tests for a mouse click and when one is received it retrieves the tile-data for the cell that coincides with the mouse position. This data is then modified and returned to the tile map layer, rotating the tile in that cell.