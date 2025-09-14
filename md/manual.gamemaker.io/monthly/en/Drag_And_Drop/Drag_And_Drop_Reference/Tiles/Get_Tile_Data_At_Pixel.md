---
title: "Get Tile Data At Pixel"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Tiles/Get_Tile_Data_At_Pixel.htm"
converted: "2025-09-14T03:59:27.994Z"
---

# ![Get Tile Data At Pixel Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Tiles/i_Tiles_Get_Tile_Data_At_Pixel.png) Get Tile Data At Pixel

With this action you can get the tile data for a tile cell on a tile-map layer from a position. The tile data is simply a value that reflects the index of the tile along with the flip, mirror, and rotate values, as well as any custom tile masks that you have used. With this action you first supply the layer to target using the name of the layer (a string) as defined in the room editor, and then the x and y axis in the room to get the tile-data for. The tile data value returned will coincide with whatever tile-map cell happens to be at that point. For example, if your tile-set tiles are 16x16, then the tile-map layer will hold tiles in cells of 16x16 pixels, so if you use this action to target the room position (8, 8), you will be getting the tile-data for the cell (0, 0) of the tile-map.

NOTE The layer selected _must_ have been defined as a Tile Map Layer in the room editor, otherwise you may get errors.

The returned value will then be stored in the target variable which can have been created previously or can be a new temporary one (if you check the "Temp" check-box). For more information on tile data, please see the GML section on [Tile Map Functions](../../../GameMaker_Language/GML_Reference/Asset_Management/Rooms/Tile_Map_Layers/Tile_Map_Layers.md).

#### Action Syntax:

![Get Tile Data At Pixel Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Tiles/a_Tiles_Get_Tile_Data_At_Pixel.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| Layer | The layer with the tile-map to target |
| X | The position along the horizontal (X) axis to set the tile-data for |
| Y | The position along the vertical (Y) axis to set the tile-data |

#### Example:

![Get Tile Data At Pixel Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Tiles/e_Tiles_Set_Tile_Data_At_Pixel.png)The above action block code tests for a mouse click and when one is received it retrieves the tile-data for the cell that coincides with the mouse position. This data is then modified and returned to the tile-map layer, rotating the tile in that cell.