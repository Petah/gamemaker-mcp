---
title: "Get Tile Data In Cell"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Tiles/Get_Tile_Data_In_Cell.htm"
converted: "2025-09-14T03:59:28.008Z"
---

# ![Get Tile Data In Cell Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Tiles/i_Tiles_Get_Tile_Data_In_Cell.png) Get Tile Data In Cell

With this action you can get the tile data for a tile cell on a tile map layer. The tile data is simply a value that reflects the index of the tile along with the flip, mirror, and rotate values, as well as any custom tile masks that you have used. With this action you first supply the layer to target using the name of the layer (a string) as defined in the room editor, and then the column and row of the tile map layer to get the tile-data for. The "cell" is the area on the tile map grid that holds the tile you want to get the data from, so if your tiles are 16x16, for example, and the room is 1024x768 the tile-map will have 64 columns and 48 rows.

NOTE The layer selected _must_ have been defined as a Tile Map Layer in [The Room Editor](../../../The_Asset_Editors/Rooms.md), otherwise you may get errors.

The returned value will then be stored in the target variable which can have been created previously or can be a new temporary one (if you check the "Temp" check-box). For more information on tile data, please see the GML section on [Tile Map Functions](../../../GameMaker_Language/GML_Reference/Asset_Management/Rooms/Tile_Map_Layers/Tile_Map_Layers.md).

#### Action Syntax:

![Get Tile Data In Cell  Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Tiles/a_Tiles_Get_Tile_Data_In_Cell.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| Layer | The layer to get the tile from |
| Column | The column (from left to right) of the cell |

#### Example:

![Get Tile Data In Cell Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Tiles/e_Tiles_Set_Tile_Data_In_Cell.png)The above action block code loops through every tile cell in the room, retrieves the tile data for the cell, mirrors it, then sets the cell again.