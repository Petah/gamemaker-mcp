---
title: "Set Tile Data In Cell"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Tiles/Set_Tile_Data_In_Cell.htm"
converted: "2025-09-14T03:59:28.108Z"
---

# ![Set Tile Data In Cell Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Tiles/i_Tiles_Set_Tile_Data_In_Cell.png) Set Tile Data In Cell

With this action you can set the tile data for a tile cell on a tile map layer. The tile data is simply a value that reflects the index of the tile along with the flip, mirror, and rotate values, as well as any custom tile masks that you have used. With this action you first supply the layer to target using the name of the layer (a string) as defined in the room editor, and then the column and row on the tile map layer to set the tile-data for. The "cell" is the area on the tile map grid that holds the tile you want to set the data for, so if your tiles are 16x16, for example, and the room is 1024x768 the tile map will have 64 columns and 48 rows.

NOTE The layer selected _must_ have been defined as a Tile Map Layer in [The Room Editor](../../../The_Asset_Editors/Rooms.md), otherwise you may get errors.

The final argument for the action is the tile-data itself. You would normally retrieve the tile data for the tile map cell using the action [Get Tile Data In Cell](Get_Tile_Data_In_Cell.md) and then manipulate it using the action [Set Tile Data Transform](Set_Tile_Data_Transform.md) before setting it again with this action. For more information on tile data, please see the GML section on [Tile Map Functions](../../../GameMaker_Language/GML_Reference/Asset_Management/Rooms/Tile_Map_Layers/Tile_Map_Layers.md).

#### Action Syntax:

![Set Tile Data In Cell Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Tiles/a_Tiles_Set_Tile_Data_In_Cell.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| Layer | The layer with the tile map to target |
| Columns | The cell column position along the horizontal axis to set the tile-data for |
| Row | The cell row position along the vertical axis to set the tile-data |
| Data | The tile data to use for setting the cell |

#### Example:

![Set Tile Data In Cell Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Tiles/e_Tiles_Set_Tile_Data_In_Cell.png)The above action block code loops through every tile cell in the room, retrieves the tile data for the cell, mirrors it, then sets the cell again.