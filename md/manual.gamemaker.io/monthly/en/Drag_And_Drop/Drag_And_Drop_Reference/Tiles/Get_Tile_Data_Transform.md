---
title: "Get Tile Data Transform"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Tiles/Get_Tile_Data_Transform.htm"
converted: "2025-09-14T03:59:28.023Z"
---

# ![Get Tile Data Transform](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Tiles/i_Tiles_Get_Tile_Data_Transform.png) Get Tile Data Transform

With this action you can find out if the tile data for a tile has been transformed in one of three ways: flipped, mirrored or rotated. The tile data is simply a value that reflects the index of the tile along with the transforms applied, and you will normally want to get the tile data first using either [Get Tile Data In Cell](Get_Tile_Data_In_Cell.md) or [Get Tile Data At Pixel](Get_Tile_Data_At_Pixel.md) before using this action. The action will return true if the chosen transform has been applied to the tile-data, or false otherwise, and the returned value will then be stored in the target variable which can have been created previously or can be a new temporary one (if you check the "Temp" check-box). For more information on tile data, please see the GML section on [Tile Map Functions](../../../GameMaker_Language/GML_Reference/Asset_Management/Rooms/Tile_Map_Layers/Tile_Map_Layers.md).

#### Action Syntax:

![Get Tile Data Transform Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Tiles/a_Tiles_Get_Tile_Data_Transform.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| Tile | The tile-data for the tile to get the transform from |
| Transform | The transform to check |

#### Example:

![Get Tile Data Transform Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Tiles/e_Tiles_Set_Tile_Data_Transform.png)The above action block code gets the tile data at the mouse position and then checks to see if the tile has had a rotation transform applied to it. If it has then the transform is reset and the tile data sets the tile at the position again.