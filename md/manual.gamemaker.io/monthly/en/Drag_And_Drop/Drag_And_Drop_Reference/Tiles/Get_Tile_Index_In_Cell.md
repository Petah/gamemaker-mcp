---
title: "Get Tile Index In Cell"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Tiles/Get_Tile_Index_In_Cell.htm"
converted: "2025-09-14T03:59:28.055Z"
---

# ![Get Tile Index In Cell Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Tiles/i_Tiles_Get_Tile_In_Cell.png) Get Tile Index In Cell

With this action you can get a tile index on a given layer. The layer is specified from the layer name given (a string, as used to name the layer in the Room Editor), and then you give the row and column of the cell within the layer to get the tile index from. Finally you supply the target variable to store the returned tile index in, where 0 is no tile, and a positive integer is the index of the tile. Note that the target variable can be flagged as a temporary (local) variable that can be used until the end of the event.

#### Action Syntax:

![Get Tile Index In Cell Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Tiles/a_Tiles_Get_Tile_In_Cell.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| Layer | The layer to get the tile from |
| Column | The column (from left to right) of the cell |
| Row | The row (from top to bottom) of the cell |
| Target | The target variable for the return value |

#### Example:

![Get Tile Index In Cell Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Tiles/e_Tiles_Set_Tile_In_Cell.png)The above action block code creates a loop to go through the top row of the given room layer, and as it does it checks to see if the tile indexed at the cell for the column is set to 0. If it is not the tile index for that cell is set to 0 and the temporary (local) variable is incremented before the loop does another set of checks.