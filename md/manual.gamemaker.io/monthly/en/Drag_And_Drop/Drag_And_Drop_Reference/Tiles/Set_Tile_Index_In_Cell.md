---
title: "Set Tile Index In Cell"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Tiles/Set_Tile_Index_In_Cell.htm"
converted: "2025-09-14T03:59:28.153Z"
---

# ![Set Tile Index In Cell Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Tiles/i_Tiles_Set_Tile_In_Cell.png) Set Tile Index In Cell

With this action you can set a tile on a given layer to a new index. The layer is specified from the layer name given (a string, as used to name the layer in the Room Editor), and then you give the row and column of the cell within the layer to get the tile to set. Finally you supply the tile index to set the tile to (tiles are indexed from left to right from top to bottom, with 0 at the top left). Note you can always set the tile index to 0 to clear the tile.

#### Action Syntax:

![Set Tile Index In Cell Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Tiles/a_Tiles_Set_Tile_In_Cell.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| Layer | The layer to set the tile on |
| Column | The column (from left to right) of the cell |
| Row | The row (from top to bottom) of the cell |
| Tile | The tile index to set the cell to |

#### Example:

![Set Tile Index In Cell Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Tiles/e_Tiles_Set_Tile_In_Cell.png)The above action block code creates a loop to go through the top row of the given room layer, and as it does it checks to see if the tile indexed at the cell for the column is set to 0. If it is not the tile index for that cell is set to 0 and the temporary (local) variable is incremented before the loop does another set of checks.